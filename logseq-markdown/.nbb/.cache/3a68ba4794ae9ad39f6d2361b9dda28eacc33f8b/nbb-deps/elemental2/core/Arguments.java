package elemental2.core;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.JsArrayLike;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Arguments<T> implements JsArrayLike<T> {
  public Function callee;
  public Function caller;
  public int length;
}
