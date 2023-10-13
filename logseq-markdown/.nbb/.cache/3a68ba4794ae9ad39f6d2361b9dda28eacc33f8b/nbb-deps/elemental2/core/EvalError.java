package elemental2.core;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class EvalError extends JsError {
  public EvalError() {}

  public EvalError(Object message, Object file, Object line) {}

  public EvalError(Object message, Object file) {}

  public EvalError(Object message) {}
}
