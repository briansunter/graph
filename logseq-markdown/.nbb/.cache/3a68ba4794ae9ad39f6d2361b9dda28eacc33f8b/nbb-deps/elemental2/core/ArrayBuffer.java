package elemental2.core;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ArrayBuffer implements Transferable {
  public static native boolean isView(Object arg);

  public int byteLength;

  public ArrayBuffer(int length) {}

  public native ArrayBuffer slice(int begin, int end);

  public native ArrayBuffer slice(int begin);
}
