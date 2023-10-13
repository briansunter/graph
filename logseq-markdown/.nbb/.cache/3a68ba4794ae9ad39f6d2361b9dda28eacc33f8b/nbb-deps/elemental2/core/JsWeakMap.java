package elemental2.core;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, name = "WeakMap", namespace = JsPackage.GLOBAL)
public class JsWeakMap<KEY, VALUE> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorIterableJsIterableTypeParameterArrayUnionType<KEY, VALUE> {
    @JsOverlay
    static JsWeakMap.ConstructorIterableJsIterableTypeParameterArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default KEY asKEY() {
      return Js.cast(this);
    }

    @JsOverlay
    default VALUE asVALUE() {
      return Js.cast(this);
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorIterableUnionType<KEY, VALUE> {
    @JsOverlay
    static JsWeakMap.ConstructorIterableUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsWeakMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<KEY, VALUE>[][]
        asConstructorIterableArrayArrayUnionTypeArrayArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default JsIterable<
            JsWeakMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<KEY, VALUE>[]>
        asJsIterable() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isConstructorIterableArrayArrayUnionTypeArrayArray() {
      return (Object) this instanceof Object[];
    }
  }

  public JsWeakMap() {}

  public JsWeakMap(
      JsWeakMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<KEY, VALUE>[][]
          iterable) {}

  public JsWeakMap(JsWeakMap.ConstructorIterableUnionType<KEY, VALUE> iterable) {}

  public JsWeakMap(
      JsIterable<JsWeakMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<KEY, VALUE>[]>
          iterable) {}

  public native void clear();

  public native boolean delete(KEY key);

  public native VALUE get(KEY key);

  public native boolean has(KEY key);

  public native JsWeakMap<KEY, VALUE> set(KEY key, VALUE value);
}
