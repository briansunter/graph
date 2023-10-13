package elemental2.core;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class SyntaxError extends JsError {
  public SyntaxError() {}

  public SyntaxError(Object message, Object file, Object line) {}

  public SyntaxError(Object message, Object file) {}

  public SyntaxError(Object message) {}
}
