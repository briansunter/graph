package me.tonsky.persistent_sorted_set;

import java.util.*;
import clojure.lang.*;

@SuppressWarnings("unchecked")
class Seq extends ASeq implements IReduce, Reversible, IChunkedSeq {
  final PersistentSortedSet _set;
  Seq  _parent;
  Leaf _node;
  int  _idx;
  final Object _keyTo;
  final Comparator _cmp;
  final boolean _asc;
  final int _version;

  Seq(IPersistentMap meta, PersistentSortedSet set, Seq parent, Leaf node, int idx, Object keyTo, Comparator cmp, boolean asc, int version) {
    super(meta);
    _set = set;
    _parent = parent;
    _node   = node;
    _idx    = idx;
    _keyTo  = keyTo;
    _cmp    = cmp;
    _asc    = asc;
    _version = version;
  }

  void checkVersion() {
    if (_version != _set._version)
      throw new RuntimeException("Tovarisch, you are iterating and mutating a transient set at the same time!");
  }

  Leaf child() {
    assert _node instanceof Node;
    return ((Node) _node)._children[_idx];
  }

  boolean over() {
    if (_keyTo == null) return false;
    int d = _cmp.compare(first(), _keyTo);
    return _asc ? d > 0 : d < 0;
  }

  boolean advance() {
    checkVersion();
    if (_asc) {
      if (_idx < _node._len-1) {
        _idx++;
        return !over();
      } else if (_parent != null) {
        _parent = _parent.next();
        if (_parent != null) {
          _node = _parent.child();
          _idx = 0;
          return !over();
        }
      }
    } else { // !_asc
      if (_idx > 0) {
        _idx--;
        return !over();
      } else if (_parent != null) {
        _parent = _parent.next();
        if (_parent != null) {
          _node = _parent.child();
          _idx = _node._len - 1;
          return !over();
        }
      }
    }
    return false;
  }

  protected Seq clone() {
    return new Seq(meta(), _set, _parent, _node, _idx, _keyTo, _cmp, _asc, _version);
  }

  // ASeq
  public Object first() {
    checkVersion();
    // assert !(_node instanceof Node);
    return _node._keys[_idx];
  }

  public Seq next() {
    Seq next = clone();
    return next.advance() ? next : null;
  }

  public Obj withMeta(IPersistentMap meta) {
    if (meta() == meta) return this;
    return new Seq(meta, _set, _parent, _node, _idx, _keyTo, _cmp, _asc, _version);
  }

  // IReduce
  public Object reduce(IFn f) {
    checkVersion();
    Seq clone = clone();
    Object ret = clone.first();
    while (clone.advance()) {
      ret = f.invoke(ret, clone.first());
      if (ret instanceof Reduced)
        return ((Reduced) ret).deref();
    }
    return ret;
  }

  public Object reduce(IFn f, Object start) {
    checkVersion();
    Seq clone = clone();
    Object ret = start;
    do {
      ret = f.invoke(ret, clone.first());
      if (ret instanceof Reduced)
        return ((Reduced) ret).deref();
    } while (clone.advance());
    return ret;
  }

  // Iterable
  public Iterator iterator() { checkVersion(); return new JavaIter(clone()); }

  // IChunkedSeq
  public Chunk chunkedFirst() { checkVersion(); return new Chunk(this); }

  public Seq chunkedNext() {
    checkVersion();
    if (_parent == null) return null;
    Seq nextParent = _parent.next();
    if (nextParent == null) return null;
    Leaf node = nextParent.child();
    Seq seq = new Seq(meta(), _set, nextParent, node, _asc ? 0 : node._len - 1, _keyTo, _cmp, _asc, _version);
    return seq.over() ? null : seq;
  }

  public ISeq chunkedMore() {
    Seq seq = chunkedNext();
    if (seq == null) return PersistentList.EMPTY;
    return seq;
  }

  // Reversible
  boolean atBeginning() {
    return _idx == 0 && (_parent == null || _parent.atBeginning());
  }

  boolean atEnd() {
    return _idx == _node._len-1 && (_parent == null || _parent.atEnd());
  }

  public Seq rseq() {
    checkVersion();
    if (_asc)
      return _set.rslice(_keyTo, atBeginning() ? null : first(), _cmp);
    else
      return _set.slice(_keyTo, atEnd() ? null : first(), _cmp);
  }
}