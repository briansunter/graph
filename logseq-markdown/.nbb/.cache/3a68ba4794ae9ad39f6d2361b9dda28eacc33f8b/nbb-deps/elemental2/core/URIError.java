package elemental2.core;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class URIError extends JsError {
  public URIError() {}

  public URIError(Object message, Object file, Object line) {}

  public URIError(Object message, Object file) {}

  public URIError(Object message) {}
}
