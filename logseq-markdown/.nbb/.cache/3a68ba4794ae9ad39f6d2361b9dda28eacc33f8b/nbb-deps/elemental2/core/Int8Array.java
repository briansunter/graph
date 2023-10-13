package elemental2.core;

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Int8Array extends TypedArray {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorLengthUnionType {
    @JsOverlay
    static Int8Array.ConstructorLengthUnionType of(Object o) {
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

  @JsOverlay public static final double BYTES_PER_ELEMENT = Int8Array__Constants.BYTES_PER_ELEMENT;

  public static native <S> Int8Array from(double[] source, Int8Array.FromMapFn mapFn, S this_);

  public static native Int8Array from(double[] source, Int8Array.FromMapFn mapFn);

  public static native Int8Array from(double[] source);

  public static native Int8Array of(double... var_args);

  public Int8Array(ArrayBuffer length, int byteOffset, int length0) {}

  public Int8Array(ArrayBuffer length, int byteOffset) {}

  public Int8Array(ArrayBuffer length) {}

  public Int8Array(ArrayBufferView length, int byteOffset, int length0) {}

  public Int8Array(ArrayBufferView length, int byteOffset) {}

  public Int8Array(ArrayBufferView length) {}

  public Int8Array(Int8Array.ConstructorLengthUnionType length, int byteOffset, int length0) {}

  public Int8Array(Int8Array.ConstructorLengthUnionType length, int byteOffset) {}

  public Int8Array(Int8Array.ConstructorLengthUnionType length) {}

  public Int8Array(SharedArrayBuffer length, int byteOffset, int length0) {}

  public Int8Array(SharedArrayBuffer length, int byteOffset) {}

  public Int8Array(SharedArrayBuffer length) {}

  public Int8Array(int length, int byteOffset, int length0) {}

  public Int8Array(int[] length, int byteOffset, int length0) {}

  public Int8Array(int length, int byteOffset) {}

  public Int8Array(int[] length, int byteOffset) {}

  public Int8Array(int length) {}

  public Int8Array(int[] length) {}
}
