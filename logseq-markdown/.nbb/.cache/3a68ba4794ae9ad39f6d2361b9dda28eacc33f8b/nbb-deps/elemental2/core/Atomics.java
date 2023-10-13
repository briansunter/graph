package elemental2.core;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Atomics {
  public static native double add(TypedArray typedArray, int index, double value);

  public static native double and(TypedArray typedArray, int index, double value);

  public static native double compareExchange(
      TypedArray typedArray, int index, double expectedValue, double replacementValue);

  public static native double exchange(TypedArray typedArray, int index, double value);

  public static native boolean isLockFree(int size);

  public static native double load(TypedArray typedArray, int index);

  public static native double or(TypedArray typedArray, int index, double value);

  public static native double store(TypedArray typedArray, int index, double value);

  public static native double sub(TypedArray typedArray, int index, double value);

  public static native JsString wait(
      Int32Array typedArray, int index, double value, double timeout);

  public static native JsString wait(Int32Array typedArray, int index, double value);

  public static native double wake(Int32Array typedArray, int index, double count);

  public static native double xor(TypedArray typedArray, int index, double value);
}
