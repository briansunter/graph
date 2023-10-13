package elemental2.core;

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class JSONType {
  @JsFunction
  public interface ParseReviverFn {
    Object onInvoke(String p0, Object p1);
  }

  @JsFunction
  public interface StringifyReplacerFn {
    Object onInvoke(String p0, Object p1);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface StringifyReplacerUnionType {
    @JsOverlay
    static JSONType.StringifyReplacerUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default String[] asStringArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default JSONType.StringifyReplacerFn asStringifyReplacerFn() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isStringArray() {
      return (Object) this instanceof Object[];
    }

    @JsOverlay
    default boolean isStringifyReplacerFn() {
      return (Object) this instanceof JSONType.StringifyReplacerFn;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface StringifySpaceUnionType {
    @JsOverlay
    static JSONType.StringifySpaceUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default int asInt() {
      return Js.asInt(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isInt() {
      return (Object) this instanceof Double;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  public native Object parse(String jsonStr, JSONType.ParseReviverFn reviver);

  public native Object parse(String jsonStr);

  @JsOverlay
  public final String stringify(Object jsonObj, String[] replacer, String space) {
    return stringify(
        jsonObj,
        Js.<JSONType.StringifyReplacerUnionType>uncheckedCast(replacer),
        Js.<JSONType.StringifySpaceUnionType>uncheckedCast(space));
  }

  @JsOverlay
  public final String stringify(
      Object jsonObj, String[] replacer, JSONType.StringifySpaceUnionType space) {
    return stringify(
        jsonObj, Js.<JSONType.StringifyReplacerUnionType>uncheckedCast(replacer), space);
  }

  @JsOverlay
  public final String stringify(Object jsonObj, String[] replacer, int space) {
    return stringify(
        jsonObj,
        Js.<JSONType.StringifyReplacerUnionType>uncheckedCast(replacer),
        Js.<JSONType.StringifySpaceUnionType>uncheckedCast(space));
  }

  @JsOverlay
  public final String stringify(Object jsonObj, String[] replacer) {
    return stringify(jsonObj, Js.<JSONType.StringifyReplacerUnionType>uncheckedCast(replacer));
  }

  @JsOverlay
  public final String stringify(
      Object jsonObj, JSONType.StringifyReplacerFn replacer, String space) {
    return stringify(
        jsonObj,
        Js.<JSONType.StringifyReplacerUnionType>uncheckedCast(replacer),
        Js.<JSONType.StringifySpaceUnionType>uncheckedCast(space));
  }

  @JsOverlay
  public final String stringify(
      Object jsonObj,
      JSONType.StringifyReplacerFn replacer,
      JSONType.StringifySpaceUnionType space) {
    return stringify(
        jsonObj, Js.<JSONType.StringifyReplacerUnionType>uncheckedCast(replacer), space);
  }

  @JsOverlay
  public final String stringify(Object jsonObj, JSONType.StringifyReplacerFn replacer, int space) {
    return stringify(
        jsonObj,
        Js.<JSONType.StringifyReplacerUnionType>uncheckedCast(replacer),
        Js.<JSONType.StringifySpaceUnionType>uncheckedCast(space));
  }

  @JsOverlay
  public final String stringify(Object jsonObj, JSONType.StringifyReplacerFn replacer) {
    return stringify(jsonObj, Js.<JSONType.StringifyReplacerUnionType>uncheckedCast(replacer));
  }

  @JsOverlay
  public final String stringify(
      Object jsonObj, JSONType.StringifyReplacerUnionType replacer, String space) {
    return stringify(jsonObj, replacer, Js.<JSONType.StringifySpaceUnionType>uncheckedCast(space));
  }

  public native String stringify(
      Object jsonObj,
      JSONType.StringifyReplacerUnionType replacer,
      JSONType.StringifySpaceUnionType space);

  @JsOverlay
  public final String stringify(
      Object jsonObj, JSONType.StringifyReplacerUnionType replacer, int space) {
    return stringify(jsonObj, replacer, Js.<JSONType.StringifySpaceUnionType>uncheckedCast(space));
  }

  public native String stringify(Object jsonObj, JSONType.StringifyReplacerUnionType replacer);

  public native String stringify(Object jsonObj);
}
