package elemental2.core;

import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Generator<VALUE> implements JsIteratorIterable<VALUE> {
  public native JsIIterableResult<VALUE> next();

  public native JsIIterableResult<VALUE> next(Object value);

  @JsMethod(name = "return")
  public native JsIIterableResult<VALUE> return_(VALUE value);

  @JsMethod(name = "throw")
  public native JsIIterableResult<VALUE> throw_(Object exception);
}
