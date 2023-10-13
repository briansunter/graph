package elemental2.core;

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Uint32Array extends TypedArray {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorLengthUnionType {
    @JsOverlay
    static Uint32Array.ConstructorLengthUnionType of(Object o) {
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
  public static final double BYTES_PER_ELEMENT = Uint32Array__Constants.BYTES_PER_ELEMENT;

  public static native <S> Uint32Array from(double[] source, Uint32Array.FromMapFn mapFn, S this_);

  public static native Uint32Array from(double[] source, Uint32Array.FromMapFn mapFn);

  public static native Uint32Array from(double[] source);

  public static native Uint32Array of(double... var_args);

  public Uint32Array(ArrayBuffer length, int byteOffset, int length0) {}

  public Uint32Array(ArrayBuffer length, int byteOffset) {}

  public Uint32Array(ArrayBuffer length) {}

  public Uint32Array(ArrayBufferView length, int byteOffset, int length0) {}

  public Uint32Array(ArrayBufferView length, int byteOffset) {}

  public Uint32Array(ArrayBufferView length) {}

  public Uint32Array(Uint32Array.ConstructorLengthUnionType length, int byteOffset, int length0) {}

  public Uint32Array(Uint32Array.ConstructorLengthUnionType length, int byteOffset) {}

  public Uint32Array(Uint32Array.ConstructorLengthUnionType length) {}

  public Uint32Array(SharedArrayBuffer length, int byteOffset, int length0) {}

  public Uint32Array(SharedArrayBuffer length, int byteOffset) {}

  public Uint32Array(SharedArrayBuffer length) {}

  public Uint32Array(int length, int byteOffset, int length0) {}

  public Uint32Array(int[] length, int byteOffset, int length0) {}

  public Uint32Array(int length, int byteOffset) {}

  public Uint32Array(int[] length, int byteOffset) {}

  public Uint32Array(int length) {}

  public Uint32Array(int[] length) {}
}
