package elemental2.core;

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Int16Array extends TypedArray {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorLengthUnionType {
    @JsOverlay
    static Int16Array.ConstructorLengthUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ArrayBuffer asArrayBuffer() {
      return Js.cast(this);
    }

    @JsOverlay
    default ArrayBufferView asArrayBufferView() {
      return Js.cast(this);
    }

    @JsOverlay
    default int asInt() {
      return Js.asInt(this);
    }

    @JsOverlay
    default int[] asIntArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default SharedArrayBuffer asSharedArrayBuffer() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isArrayBuffer() {
      return (Object) this instanceof ArrayBuffer;
    }

    @JsOverlay
    default boolean isArrayBufferView() {
      return (Object) this instanceof ArrayBufferView;
    }

    @JsOverlay
    default boolean isInt() {
      return (Object) this instanceof Double;
    }

    @JsOverlay
    default boolean isIntArray() {
      return (Object) this instanceof Object[];
    }

    @JsOverlay
    default boolean isSharedArrayBuffer() {
      return (Object) this instanceof SharedArrayBuffer;
    }
  }

  @JsFunction
  public interface FromMapFn {
    double onInvoke(double p0);
  }

  @JsOverlay public static final double BYTES_PER_ELEMENT = Int16Array__Constants.BYTES_PER_ELEMENT;

  public static native <S> Int16Array from(double[] source, Int16Array.FromMapFn mapFn, S this_);

  public static native Int16Array from(double[] source, Int16Array.FromMapFn mapFn);

  public static native Int16Array from(double[] source);

  public static native Int16Array of(double... var_args);

  public Int16Array(ArrayBuffer length, int byteOffset, int length0) {}

  public Int16Array(ArrayBuffer length, int byteOffset) {}

  public Int16Array(ArrayBuffer length) {}

  public Int16Array(ArrayBufferView length, int byteOffset, int length0) {}

  public Int16Array(ArrayBufferView length, int byteOffset) {}

  public Int16Array(ArrayBufferView length) {}

  public Int16Array(Int16Array.ConstructorLengthUnionType length, int byteOffset, int length0) {}

  public Int16Array(Int16Array.ConstructorLengthUnionType length, int byteOffset) {}

  public Int16Array(Int16Array.ConstructorLengthUnionType length) {}

  public Int16Array(SharedArrayBuffer length, int byteOffset, int length0) {}

  public Int16Array(SharedArrayBuffer length, int byteOffset) {}

  public Int16Array(SharedArrayBuffer length) {}

  public Int16Array(int length, int byteOffset, int length0) {}

  public Int16Array(int[] length, int byteOffset, int length0) {}

  public Int16Array(int length, int byteOffset) {}

  public Int16Array(int[] length, int byteOffset) {}

  public Int16Array(int length) {}

  public Int16Array(int[] length) {}
}
