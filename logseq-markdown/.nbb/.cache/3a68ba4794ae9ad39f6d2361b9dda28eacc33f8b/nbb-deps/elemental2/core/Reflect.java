package elemental2.core;

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsConstructorFn;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Reflect {
  @JsFunction
  public interface ApplyTargetFn<RESULT> {
    RESULT onInvoke(Object... p0);
  }

  public static native <RESULT> RESULT apply(
      Reflect.ApplyTargetFn<? extends RESULT> targetFn, Object thisArg, Object[] argList);

  @JsOverlay
  public static final <TARGET> TARGET construct(
      Class<?> targetConstructorFn,
      Object[] argList,
      Class<? extends TARGET> newTargetConstructorFn) {
    return construct(
        Js.asConstructorFn(targetConstructorFn),
        argList,
        Js.asConstructorFn(newTargetConstructorFn));
  }

  @JsOverlay
  public static final <TARGET> TARGET construct(Class<?> targetConstructorFn, Object[] argList) {
    return construct(Js.asConstructorFn(targetConstructorFn), argList);
  }

  public static native <TARGET> TARGET construct(
      JsConstructorFn<?> targetConstructorFn,
      Object[] argList,
      JsConstructorFn<? extends TARGET> newTargetConstructorFn);

  public static native <TARGET> TARGET construct(
      JsConstructorFn<?> targetConstructorFn, Object[] argList);

  public static native boolean defineProperty(
      JsObject target, String propertyKey, ObjectPropertyDescriptor attributes);

  @JsOverlay
  public static final boolean defineProperty(
      Object target, String propertyKey, ObjectPropertyDescriptor attributes) {
    return defineProperty(Js.<JsObject>uncheckedCast(target), propertyKey, attributes);
  }

  public static native boolean deleteProperty(JsObject target, String propertyKey);

  @JsOverlay
  public static final boolean deleteProperty(Object target, String propertyKey) {
    return deleteProperty(Js.<JsObject>uncheckedCast(target), propertyKey);
  }

  public static native Object get(JsObject target, String propertyKey, JsObject receiver);

  public static native Object get(JsObject target, String propertyKey);

  @JsOverlay
  public static final Object get(Object target, String propertyKey, Object receiver) {
    return get(
        Js.<JsObject>uncheckedCast(target), propertyKey, Js.<JsObject>uncheckedCast(receiver));
  }

  @JsOverlay
  public static final Object get(Object target, String propertyKey) {
    return get(Js.<JsObject>uncheckedCast(target), propertyKey);
  }

  public static native ObjectPropertyDescriptor getOwnPropertyDescriptor(
      JsObject target, String propertyKey);

  @JsOverlay
  public static final ObjectPropertyDescriptor getOwnPropertyDescriptor(
      Object target, String propertyKey) {
    return getOwnPropertyDescriptor(Js.<JsObject>uncheckedCast(target), propertyKey);
  }

  public static native JsObject getPrototypeOf(JsObject target);

  @JsOverlay
  public static final JsObject getPrototypeOf(Object target) {
    return getPrototypeOf(Js.<JsObject>uncheckedCast(target));
  }

  public static native boolean has(JsObject target, String propertyKey);

  @JsOverlay
  public static final boolean has(Object target, String propertyKey) {
    return has(Js.<JsObject>uncheckedCast(target), propertyKey);
  }

  public static native boolean isExtensible(JsObject target);

  @JsOverlay
  public static final boolean isExtensible(Object target) {
    return isExtensible(Js.<JsObject>uncheckedCast(target));
  }

  public static native Object[] ownKeys(JsObject target);

  @JsOverlay
  public static final Object[] ownKeys(Object target) {
    return ownKeys(Js.<JsObject>uncheckedCast(target));
  }

  public static native boolean preventExtensions(JsObject target);

  @JsOverlay
  public static final boolean preventExtensions(Object target) {
    return preventExtensions(Js.<JsObject>uncheckedCast(target));
  }

  public static native boolean set(
      JsObject target, String propertyKey, Object value, JsObject receiver);

  public static native boolean set(JsObject target, String propertyKey, Object value);

  @JsOverlay
  public static final boolean set(
      Object target, String propertyKey, Object value, Object receiver) {
    return set(
        Js.<JsObject>uncheckedCast(target),
        propertyKey,
        value,
        Js.<JsObject>uncheckedCast(receiver));
  }

  @JsOverlay
  public static final boolean set(Object target, String propertyKey, Object value) {
    return set(Js.<JsObject>uncheckedCast(target), propertyKey, value);
  }

  public static native boolean setPrototypeOf(JsObject target, JsObject proto);

  @JsOverlay
  public static final boolean setPrototypeOf(Object target, Object proto) {
    return setPrototypeOf(Js.<JsObject>uncheckedCast(target), Js.<JsObject>uncheckedCast(proto));
  }
}
