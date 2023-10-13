package elemental2.core;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class TypeError extends JsError {
  public TypeError() {}

  public TypeError(Object message, Object file, Object line) {}

  public TypeError(Object message, Object file) {}

  public TypeError(Object message) {}
}
