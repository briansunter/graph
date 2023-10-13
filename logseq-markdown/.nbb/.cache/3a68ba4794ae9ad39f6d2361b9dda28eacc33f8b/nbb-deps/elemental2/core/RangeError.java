package elemental2.core;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class RangeError extends JsError {
  public RangeError() {}

  public RangeError(Object message, Object file, Object line) {}

  public RangeError(Object message, Object file) {}

  public RangeError(Object message) {}
}
