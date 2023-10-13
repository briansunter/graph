package elemental2.core;

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Uint8ClampedArray extends TypedArray {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorLengthUnionType {
    @JsOverlay
    static Uint8ClampedArray.ConstructorLengthUnionType of(Object o) {
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

  @JsOverlay
  public static final double BYTES_PER_ELEMENT = Uint8ClampedArray__Constants.BYTES_PER_ELEMENT;

  public static native <S> Uint8ClampedArray from(
      double[] source, Uint8ClampedArray.FromMapFn mapFn, S this_);

  public static native Uint8ClampedArray from(double[] source, Uint8ClampedArray.FromMapFn mapFn);

  public static native Uint8ClampedArray from(double[] source);

  public static native Uint8ClampedArray of(double... var_args);

  public Uint8ClampedArray(ArrayBuffer length, int byteOffset, int length0) {}

  public Uint8ClampedArray(ArrayBuffer length, int byteOffset) {}

  public Uint8ClampedArray(ArrayBuffer length) {}

  public Uint8ClampedArray(ArrayBufferView length, int byteOffset, int length0) {}

  public Uint8ClampedArray(ArrayBufferView length, int byteOffset) {}

  public Uint8ClampedArray(ArrayBufferView length) {}

  public Uint8ClampedArray(
      Uint8ClampedArray.ConstructorLengthUnionType length, int byteOffset, int length0) {}

  public Uint8ClampedArray(Uint8ClampedArray.ConstructorLengthUnionType length, int byteOffset) {}

  public Uint8ClampedArray(Uint8ClampedArray.ConstructorLengthUnionType length) {}

  public Uint8ClampedArray(SharedArrayBuffer length, int byteOffset, int length0) {}

  public Uint8ClampedArray(SharedArrayBuffer length, int byteOffset) {}

  public Uint8ClampedArray(SharedArrayBuffer length) {}

  public Uint8ClampedArray(int length, int byteOffset, int length0) {}

  public Uint8ClampedArray(int[] length, int byteOffset, int length0) {}

  public Uint8ClampedArray(int length, int byteOffset) {}

  public Uint8ClampedArray(int[] length, int byteOffset) {}

  public Uint8ClampedArray(int length) {}

  public Uint8ClampedArray(int[] length) {}
}
