package elemental2.core;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class DataView extends ArrayBufferView {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorBufferUnionType {
    @JsOverlay
    static DataView.ConstructorBufferUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ArrayBuffer asArrayBuffer() {
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
    default boolean isSharedArrayBuffer() {
      return (Object) this instanceof SharedArrayBuffer;
    }
  }

  public DataView(ArrayBuffer buffer, int byteOffset, int byteLength) {}

  public DataView(ArrayBuffer buffer, int byteOffset) {}

  public DataView(ArrayBuffer buffer) {}

  public DataView(DataView.ConstructorBufferUnionType buffer, int byteOffset, int byteLength) {}

  public DataView(DataView.ConstructorBufferUnionType buffer, int byteOffset) {}

  public DataView(DataView.ConstructorBufferUnionType buffer) {}

  public DataView(SharedArrayBuffer buffer, int byteOffset, int byteLength) {}

  public DataView(SharedArrayBuffer buffer, int byteOffset) {}

  public DataView(SharedArrayBuffer buffer) {}

  public native double getFloat32(int byteOffset, boolean littleEndian);

  public native double getFloat32(int byteOffset);

  public native double getFloat64(int byteOffset, boolean littleEndian);

  public native double getFloat64(int byteOffset);

  public native int getInt16(int byteOffset, boolean littleEndian);

  public native int getInt16(int byteOffset);

  public native int getInt32(int byteOffset, boolean littleEndian);

  public native int getInt32(int byteOffset);

  public native int getInt8(int byteOffset);

  public native int getUint16(int byteOffset, boolean littleEndian);

  public native int getUint16(int byteOffset);

  public native int getUint32(int byteOffset, boolean littleEndian);

  public native int getUint32(int byteOffset);

  public native int getUint8(int byteOffset);

  public native void setFloat32(int byteOffset, double value, boolean littleEndian);

  public native void setFloat32(int byteOffset, double value);

  public native void setFloat64(int byteOffset, double value, boolean littleEndian);

  public native void setFloat64(int byteOffset, double value);

  public native void setInt16(int byteOffset, double value, boolean littleEndian);

  public native void setInt16(int byteOffset, double value);

  public native void setInt32(int byteOffset, double value, boolean littleEndian);

  public native void setInt32(int byteOffset, double value);

  public native void setInt8(int byteOffset, double value);

  public native void setUint16(int byteOffset, double value, boolean littleEndian);

  public native void setUint16(int byteOffset, double value);

  public native void setUint32(int byteOffset, double value, boolean littleEndian);

  public native void setUint32(int byteOffset, double value);

  public native void setUint8(int byteOffset, double value);
}
