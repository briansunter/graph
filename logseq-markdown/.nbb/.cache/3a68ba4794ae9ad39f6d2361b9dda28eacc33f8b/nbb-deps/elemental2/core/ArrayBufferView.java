package elemental2.core;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ArrayBufferView {
  public ArrayBuffer buffer;
  public int byteLength;
  public int byteOffset;
}
