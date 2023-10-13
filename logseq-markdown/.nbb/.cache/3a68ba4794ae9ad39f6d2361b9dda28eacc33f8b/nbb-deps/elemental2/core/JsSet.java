package elemental2.core;

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, name = "Set", namespace = JsPackage.GLOBAL)
public class JsSet<VALUE> implements JsIterable<VALUE> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorIterableUnionType<VALUE> {
    @JsOverlay
    static JsSet.ConstructorIterableUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsIterable<VALUE> asJsIterable() {
      return Js.cast(this);
    }

    @JsOverlay
    default VALUE[] asVALUEArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isVALUEArray() {
      return (Object) this instanceof Object[];
    }
  }

  @JsFunction
  public interface ForEachCallbackFn<VALUE> {
    Object onInvoke(VALUE p0, VALUE p1, JsSet<? extends VALUE> p2);
  }

  public int size;

  public JsSet() {}

  public JsSet(JsSet.ConstructorIterableUnionType<VALUE> iterable) {}

  public JsSet(JsIterable<VALUE> iterable) {}

  public JsSet(VALUE[] iterable) {}

  public native JsSet<VALUE> add(VALUE value);

  public native void clear();

  public native boolean delete(VALUE value);

  public native JsIteratorIterable<VALUE[]> entries();

  public native Object forEach(JsSet.ForEachCallbackFn<? super VALUE> callback, Object thisArg);

  public native Object forEach(JsSet.ForEachCallbackFn<? super VALUE> callback);

  public native boolean has(VALUE value);

  public native JsIteratorIterable<VALUE> keys();

  public native JsIteratorIterable<VALUE> values();
}
