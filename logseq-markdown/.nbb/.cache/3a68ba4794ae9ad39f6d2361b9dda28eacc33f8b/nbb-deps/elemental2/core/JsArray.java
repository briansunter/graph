package elemental2.core;

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsArrayLike;

@JsType(isNative = true, name = "Array", namespace = JsPackage.GLOBAL)
public class JsArray<T> implements JsIterable<T>, JsArrayLike<T> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface EntriesJsIteratorIterableTypeParameterArrayUnionType<T> {
    @JsOverlay
    static JsArray.EntriesJsIteratorIterableTypeParameterArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default T asT() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }
  }

  @JsFunction
  public interface EveryCallbackFn<T> {
    Object onInvoke(T p0, int p1, T[] p2);
  }

  @JsFunction
  public interface FilterCallbackFn<T> {
    Object onInvoke(T p0, int p1, T[] p2);
  }

  @JsFunction
  public interface FindIndexPredicateFn<T> {
    boolean onInvoke(T p0, int p1, T[] p2);
  }

  @JsFunction
  public interface FindPredicateFn<T> {
    boolean onInvoke(T p0, int p1, T[] p2);
  }

  @JsFunction
  public interface ForEachCallbackFn<T> {
    Object onInvoke(T p0, int p1, T[] p2);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface FromArrayLikeUnionType<T> {
    @JsOverlay
    static JsArray.FromArrayLikeUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsArrayLike<T> asJsArrayLike() {
      return Js.cast(this);
    }

    @JsOverlay
    default JsIterable<T> asJsIterable() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsFunction
  public interface FromMapFn<T, R> {
    @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
    public interface P0UnionType<T> {
      @JsOverlay
      static JsArray.FromMapFn.P0UnionType of(Object o) {
        return Js.cast(o);
      }

      @JsOverlay
      default String asString() {
        return Js.asString(this);
      }

      @JsOverlay
      default T asT() {
        return Js.cast(this);
      }

      @JsOverlay
      default boolean isString() {
        return (Object) this instanceof String;
      }
    }

    R onInvoke(JsArray.FromMapFn.P0UnionType<T> p0, double p1);

    @JsOverlay
    default R onInvoke(String p0, double p1) {
      return onInvoke(Js.<JsArray.FromMapFn.P0UnionType<T>>uncheckedCast(p0), p1);
    }

    @JsOverlay
    default R onInvoke(T p0, double p1) {
      return onInvoke(Js.<JsArray.FromMapFn.P0UnionType<T>>uncheckedCast(p0), p1);
    }
  }

  @JsFunction
  public interface MapCallbackFn<R, T> {
    R onInvoke(T p0, int p1, T[] p2);
  }

  @JsFunction
  public interface ReduceCallbackFn<R, T> {
    R onInvoke(Object p0, T p1, int p2, T[] p3);
  }

  @JsFunction
  public interface ReduceRightCallbackFn<R, T> {
    R onInvoke(Object p0, T p1, int p2, T[] p3);
  }

  @JsFunction
  public interface SomeCallbackFn<T> {
    Object onInvoke(T p0, int p1, T[] p2);
  }

  @JsFunction
  public interface SortCompareFn<T> {
    double onInvoke(T p0, T p1);
  }

  public static native <T, R> R[] from(
      JsArray.FromArrayLikeUnionType<T> arrayLike,
      JsArray.FromMapFn<? super T, ? extends R> mapFn,
      Object this_);

  public static native <T, R> R[] from(
      JsArray.FromArrayLikeUnionType<T> arrayLike, JsArray.FromMapFn<? super T, ? extends R> mapFn);

  public static native <T, R> R[] from(JsArray.FromArrayLikeUnionType<T> arrayLike);

  @JsOverlay
  public static final <T, R> R[] from(
      JsArrayLike<T> arrayLike, JsArray.FromMapFn<? super T, ? extends R> mapFn, Object this_) {
    return from(Js.<JsArray.FromArrayLikeUnionType<T>>uncheckedCast(arrayLike), mapFn, this_);
  }

  @JsOverlay
  public static final <T, R> R[] from(
      JsArrayLike<T> arrayLike, JsArray.FromMapFn<? super T, ? extends R> mapFn) {
    return from(Js.<JsArray.FromArrayLikeUnionType<T>>uncheckedCast(arrayLike), mapFn);
  }

  @JsOverlay
  public static final <T, R> R[] from(JsArrayLike<T> arrayLike) {
    return from(Js.<JsArray.FromArrayLikeUnionType<T>>uncheckedCast(arrayLike));
  }

  @JsOverlay
  public static final <T, R> R[] from(
      JsIterable<T> arrayLike, JsArray.FromMapFn<? super T, ? extends R> mapFn, Object this_) {
    return from(Js.<JsArray.FromArrayLikeUnionType<T>>uncheckedCast(arrayLike), mapFn, this_);
  }

  @JsOverlay
  public static final <T, R> R[] from(
      JsIterable<T> arrayLike, JsArray.FromMapFn<? super T, ? extends R> mapFn) {
    return from(Js.<JsArray.FromArrayLikeUnionType<T>>uncheckedCast(arrayLike), mapFn);
  }

  @JsOverlay
  public static final <T, R> R[] from(JsIterable<T> arrayLike) {
    return from(Js.<JsArray.FromArrayLikeUnionType<T>>uncheckedCast(arrayLike));
  }

  @JsOverlay
  public static final <T, R> R[] from(
      String arrayLike, JsArray.FromMapFn<? super T, ? extends R> mapFn, Object this_) {
    return from(Js.<JsArray.FromArrayLikeUnionType<T>>uncheckedCast(arrayLike), mapFn, this_);
  }

  @JsOverlay
  public static final <T, R> R[] from(
      String arrayLike, JsArray.FromMapFn<? super T, ? extends R> mapFn) {
    return from(Js.<JsArray.FromArrayLikeUnionType<T>>uncheckedCast(arrayLike), mapFn);
  }

  @JsOverlay
  public static final <T, R> R[] from(String arrayLike) {
    return from(Js.<JsArray.FromArrayLikeUnionType<T>>uncheckedCast(arrayLike));
  }

  @JsOverlay
  public static final <T, R> R[] from(
      T[] arrayLike, JsArray.FromMapFn<? super T, ? extends R> mapFn, Object this_) {
    return from(Js.<JsArrayLike<T>>uncheckedCast(arrayLike), mapFn, this_);
  }

  @JsOverlay
  public static final <T, R> R[] from(
      T[] arrayLike, JsArray.FromMapFn<? super T, ? extends R> mapFn) {
    return from(Js.<JsArrayLike<T>>uncheckedCast(arrayLike), mapFn);
  }

  @JsOverlay
  public static final <T, R> R[] from(T[] arrayLike) {
    return from(Js.<JsArrayLike<T>>uncheckedCast(arrayLike));
  }

  public static native boolean isArray(Object arr);

  public static native <T> T[] of(T... var_args);

  public int index;
  public String input;
  public int length;

  public JsArray(Object... items) {}

  public native T[] concat(T... items);

  public native T[] copyWithin(int target, int start, int end);

  public native T[] copyWithin(int target, int start);

  public native JsIteratorIterable<
          JsArray.EntriesJsIteratorIterableTypeParameterArrayUnionType<T>[]>
      entries();

  public native boolean every(JsArray.EveryCallbackFn<? super T> callback, Object thisobj);

  public native boolean every(JsArray.EveryCallbackFn<? super T> callback);

  public native T[] fill(T value, int begin, int end);

  public native T[] fill(T value, int begin);

  public native T[] fill(T value);

  public native T[] filter(JsArray.FilterCallbackFn<? super T> callback, Object thisobj);

  public native T[] filter(JsArray.FilterCallbackFn<? super T> callback);

  public native T find(JsArray.FindPredicateFn<? super T> predicateFn, Object this_);

  public native T find(JsArray.FindPredicateFn<? super T> predicateFn);

  public native int findIndex(JsArray.FindIndexPredicateFn<? super T> predicateFn, Object this_);

  public native int findIndex(JsArray.FindIndexPredicateFn<? super T> predicateFn);

  public native void forEach(JsArray.ForEachCallbackFn<? super T> callback, Object thisobj);

  public native void forEach(JsArray.ForEachCallbackFn<? super T> callback);

  public native boolean includes(T searchElement, int fromIndex);

  public native boolean includes(T searchElement);

  public native int indexOf(T obj, int fromIndex);

  public native int indexOf(T obj);

  public native String join();

  public native String join(Object separator);

  public native JsIteratorIterable<Double> keys();

  public native int lastIndexOf(T obj, int fromIndex);

  public native int lastIndexOf(T obj);

  public native <R> R[] map(JsArray.MapCallbackFn<? extends R, ? super T> callback, Object thisobj);

  public native <R> R[] map(JsArray.MapCallbackFn<? extends R, ? super T> callback);

  public native T pop();

  public native int push(T... var_args);

  public native <R> R reduce(
      JsArray.ReduceCallbackFn<? extends R, ? super T> callback, Object initialValue);

  public native <R> R reduce(JsArray.ReduceCallbackFn<? extends R, ? super T> callback);

  public native <R> R reduceRight(
      JsArray.ReduceRightCallbackFn<? extends R, ? super T> callback, Object initialValue);

  public native <R> R reduceRight(JsArray.ReduceRightCallbackFn<? extends R, ? super T> callback);

  public native T[] reverse();

  public native T shift();

  public native T[] slice();

  public native T[] slice(int begin, int end);

  public native T[] slice(int begin);

  public native boolean some(JsArray.SomeCallbackFn<? super T> callback, Object thisobj);

  public native boolean some(JsArray.SomeCallbackFn<? super T> callback);

  public native T[] sort();

  public native T[] sort(JsArray.SortCompareFn<? super T> compareFn);

  public native T[] splice(int index, int howMany, T... var_args);

  public native String toSource();

  @JsMethod(name = "toString")
  public native String toString_();

  public native int unshift(T... var_args);
}
