package elemental2.core;

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, name = "Map", namespace = JsPackage.GLOBAL)
public class JsMap<KEY, VALUE>
    implements JsIterable<JsMap.JsIterableTypeParameterArrayUnionType<KEY, VALUE>[]> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorIterableJsIterableTypeParameterArrayUnionType<KEY, VALUE> {
    @JsOverlay
    static JsMap.ConstructorIterableJsIterableTypeParameterArrayUnionType of(Object o) {
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
    static JsMap.ConstructorIterableUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<KEY, VALUE>[][]
        asConstructorIterableArrayArrayUnionTypeArrayArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default JsIterable<JsMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<KEY, VALUE>[]>
        asJsIterable() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isConstructorIterableArrayArrayUnionTypeArrayArray() {
      return (Object) this instanceof Object[];
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface EntriesJsIteratorIterableTypeParameterArrayUnionType<KEY, VALUE> {
    @JsOverlay
    static JsMap.EntriesJsIteratorIterableTypeParameterArrayUnionType of(Object o) {
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

  @JsFunction
  public interface ForEachCallbackFn<KEY, VALUE> {
    Object onInvoke(VALUE p0, KEY p1, JsMap<? extends KEY, ? extends VALUE> p2);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface JsIterableTypeParameterArrayUnionType<KEY, VALUE> {
    @JsOverlay
    static JsMap.JsIterableTypeParameterArrayUnionType of(Object o) {
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

  public int size;

  public JsMap() {}

  public JsMap(
      JsMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<KEY, VALUE>[][] iterable) {}

  public JsMap(JsMap.ConstructorIterableUnionType<KEY, VALUE> iterable) {}

  public JsMap(
      JsIterable<JsMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<KEY, VALUE>[]>
          iterable) {}

  public native void clear();

  public native boolean delete(KEY key);

  public native JsIteratorIterable<
          JsMap.EntriesJsIteratorIterableTypeParameterArrayUnionType<KEY, VALUE>[]>
      entries();

  public native Object forEach(
      JsMap.ForEachCallbackFn<? super KEY, ? super VALUE> callback, Object thisArg);

  public native Object forEach(JsMap.ForEachCallbackFn<? super KEY, ? super VALUE> callback);

  public native VALUE get(KEY key);

  public native boolean has(KEY key);

  public native JsIteratorIterable<KEY> keys();

  public native JsMap<KEY, VALUE> set(KEY key, VALUE value);

  public native JsIteratorIterable<VALUE> values();
}
