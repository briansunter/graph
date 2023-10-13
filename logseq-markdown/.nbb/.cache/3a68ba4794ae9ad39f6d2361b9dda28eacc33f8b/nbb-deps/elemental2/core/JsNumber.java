package elemental2.core;

import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, name = "Number", namespace = JsPackage.GLOBAL)
public class JsNumber {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ToLocaleStringLocalesUnionType {
    @JsOverlay
    static JsNumber.ToLocaleStringLocalesUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default String[] asStringArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }

    @JsOverlay
    default boolean isStringArray() {
      return (Object) this instanceof Object[];
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ToStringRadixUnionType {
    @JsOverlay
    static JsNumber.ToStringRadixUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default int asInt() {
      return Js.asInt(this);
    }

    @JsOverlay
    default JsNumber asJsNumber() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isInt() {
      return (Object) this instanceof Double;
    }

    @JsOverlay
    default boolean isJsNumber() {
      return (Object) this instanceof JsNumber;
    }
  }

  @JsOverlay public static final double EPSILON = Number__Constants.EPSILON;
  @JsOverlay public static final double MAX_SAFE_INTEGER = Number__Constants.MAX_SAFE_INTEGER;
  @JsOverlay public static final double MAX_VALUE = Number__Constants.MAX_VALUE;
  @JsOverlay public static final double MIN_SAFE_INTEGER = Number__Constants.MIN_SAFE_INTEGER;
  @JsOverlay public static final double MIN_VALUE = Number__Constants.MIN_VALUE;
  @JsOverlay public static final double NEGATIVE_INFINITY = Number__Constants.NEGATIVE_INFINITY;
  @JsOverlay public static final double NaN = Number__Constants.NaN;
  @JsOverlay public static final double POSITIVE_INFINITY = Number__Constants.POSITIVE_INFINITY;

  public static native boolean isFinite(double value);

  public static native boolean isInteger(double value);

  public static native boolean isNaN(double value);

  public static native boolean isSafeInteger(double value);

  public static native double parseFloat(String string);

  public static native int parseInt(String string, int radix);

  public JsNumber() {}

  public JsNumber(Object value) {}

  public native String toExponential();

  public native String toExponential(double fractionDigits);

  public native String toFixed();

  public native String toFixed(Object digits);

  public native String toLocaleString();

  @JsOverlay
  public final String toLocaleString(String locales, JsObject options) {
    return toLocaleString(
        Js.<JsNumber.ToLocaleStringLocalesUnionType>uncheckedCast(locales), options);
  }

  @JsOverlay
  public final String toLocaleString(String[] locales, JsObject options) {
    return toLocaleString(
        Js.<JsNumber.ToLocaleStringLocalesUnionType>uncheckedCast(locales), options);
  }

  @JsOverlay
  public final String toLocaleString(String locales, Object options) {
    return toLocaleString(locales, Js.<JsObject>uncheckedCast(options));
  }

  @JsOverlay
  public final String toLocaleString(String[] locales, Object options) {
    return toLocaleString(locales, Js.<JsObject>uncheckedCast(options));
  }

  @JsOverlay
  public final String toLocaleString(String locales) {
    return toLocaleString(Js.<JsNumber.ToLocaleStringLocalesUnionType>uncheckedCast(locales));
  }

  @JsOverlay
  public final String toLocaleString(String[] locales) {
    return toLocaleString(Js.<JsNumber.ToLocaleStringLocalesUnionType>uncheckedCast(locales));
  }

  public native String toLocaleString(
      JsNumber.ToLocaleStringLocalesUnionType locales, JsObject options);

  @JsOverlay
  public final String toLocaleString(
      JsNumber.ToLocaleStringLocalesUnionType locales, Object options) {
    return toLocaleString(locales, Js.<JsObject>uncheckedCast(options));
  }

  public native String toLocaleString(JsNumber.ToLocaleStringLocalesUnionType locales);

  public native String toPrecision();

  public native String toPrecision(double precision);

  @JsOverlay
  public final String toString(JsNumber radix) {
    return toString(Js.<JsNumber.ToStringRadixUnionType>uncheckedCast(radix));
  }

  public native String toString(JsNumber.ToStringRadixUnionType radix);

  @JsOverlay
  public final String toString(int radix) {
    return toString(Js.<JsNumber.ToStringRadixUnionType>uncheckedCast(radix));
  }

  @JsMethod(name = "toString")
  public native String toString_();

  public native double valueOf();
}
