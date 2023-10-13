package elemental2.core;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ReferenceError extends JsError {
  public ReferenceError() {}

  public ReferenceError(Object message, Object file, Object line) {}

  public ReferenceError(Object message, Object file) {}

  public ReferenceError(Object message) {}
}
