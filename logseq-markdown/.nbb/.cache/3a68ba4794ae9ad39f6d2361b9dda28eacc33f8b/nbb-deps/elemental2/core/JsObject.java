package elemental2.core;

import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
public class JsObject {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface EntriesArrayArrayUnionType<T> {
    @JsOverlay
    static JsObject.EntriesArrayArrayUnionType of(Object o) {
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

  public static native JsObject assign(JsObject target, JsObject... var_args);

  @JsOverlay
  public static final JsObject assign(Object target, Object... var_args) {
    return assign(Js.<JsObject>uncheckedCast(target), Js.<JsObject>uncheckedCast(var_args));
  }

  public static native JsObject create(JsObject proto, JsObject properties);

  public static native JsObject create(JsObject proto);

  @JsOverlay
  public static final JsObject create(Object proto, Object properties) {
    return create(Js.<JsObject>uncheckedCast(proto), Js.<JsObject>uncheckedCast(properties));
  }

  @JsOverlay
  public static final JsObject create(Object proto) {
    return create(Js.<JsObject>uncheckedCast(proto));
  }

  public static native JsObject defineProperties(JsObject obj, JsObject props);

  @JsOverlay
  public static final JsObject defineProperties(Object obj, Object props) {
    return defineProperties(Js.<JsObject>uncheckedCast(obj), Js.<JsObject>uncheckedCast(props));
  }

  public static native JsObject defineProperty(JsObject obj, String prop, JsObject descriptor);

  @JsOverlay
  public static final JsObject defineProperty(Object obj, String prop, Object descriptor) {
    return defineProperty(
        Js.<JsObject>uncheckedCast(obj), prop, Js.<JsObject>uncheckedCast(descriptor));
  }

  public static native <T> JsObject.EntriesArrayArrayUnionType<T>[][] entries(JsPropertyMap<T> obj);

  public static native <T> T freeze(T obj);

  public static native <T> ObjectPropertyDescriptor<T> getOwnPropertyDescriptor(T obj, String prop);

  public static native JsPropertyMap<ObjectPropertyDescriptor> getOwnPropertyDescriptors(
      JsObject obj);

  @JsOverlay
  public static final JsPropertyMap<ObjectPropertyDescriptor> getOwnPropertyDescriptors(
      Object obj) {
    return getOwnPropertyDescriptors(Js.<JsObject>uncheckedCast(obj));
  }

  public static native String[] getOwnPropertyNames(JsObject obj);

  @JsOverlay
  public static final String[] getOwnPropertyNames(Object obj) {
    return getOwnPropertyNames(Js.<JsObject>uncheckedCast(obj));
  }

  public static native Object[] getOwnPropertySymbols(JsObject obj);

  @JsOverlay
  public static final Object[] getOwnPropertySymbols(Object obj) {
    return getOwnPropertySymbols(Js.<JsObject>uncheckedCast(obj));
  }

  public static native JsObject getPrototypeOf(JsObject obj);

  @JsOverlay
  public static final JsObject getPrototypeOf(Object obj) {
    return getPrototypeOf(Js.<JsObject>uncheckedCast(obj));
  }

  public static native boolean is(Object p0, Object p1);

  public static native boolean isExtensible(JsObject obj);

  @JsOverlay
  public static final boolean isExtensible(Object obj) {
    return isExtensible(Js.<JsObject>uncheckedCast(obj));
  }

  public static native boolean isFrozen(JsObject obj);

  @JsOverlay
  public static final boolean isFrozen(Object obj) {
    return isFrozen(Js.<JsObject>uncheckedCast(obj));
  }

  public static native boolean isSealed(JsObject obj);

  @JsOverlay
  public static final boolean isSealed(Object obj) {
    return isSealed(Js.<JsObject>uncheckedCast(obj));
  }

  public static native String[] keys(JsObject obj);

  @JsOverlay
  public static final String[] keys(Object obj) {
    return keys(Js.<JsObject>uncheckedCast(obj));
  }

  public static native <T> T preventExtensions(T obj);

  public static native <T> T seal(T obj);

  public static native JsObject setPrototypeOf(JsObject obj, Object proto);

  @JsOverlay
  public static final JsObject setPrototypeOf(Object obj, Object proto) {
    return setPrototypeOf(Js.<JsObject>uncheckedCast(obj), proto);
  }

  public static native <T> T[] values(JsPropertyMap<T> obj);

  public JsObject __parent__;
  public JsObject __proto__;
  public Function constructor;

  public JsObject() {}

  public JsObject(Object value) {}

  public native void __defineGetter__(String sprop, Function fun);

  public native void __defineSetter__(String sprop, Function fun);

  public native Function __lookupGetter__(String sprop);

  public native Function __lookupSetter__(String sprop);

  public native boolean hasOwnProperty(Object propertyName);

  public native boolean isPrototypeOf(JsObject other);

  @JsOverlay
  public final boolean isPrototypeOf(Object other) {
    return isPrototypeOf(Js.<JsObject>uncheckedCast(other));
  }

  public native boolean propertyIsEnumerable(String propertyName);

  public native Object toJSON();

  public native Object toJSON(String key);

  public native String toLocaleString();

  public native String toSource();

  @JsMethod(name = "toString")
  public native String toString_();

  public native Object valueOf();
}
