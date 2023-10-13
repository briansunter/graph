package elemental2.core;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface Thenable {
  @JsOverlay
  static Thenable create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  Object getThen();

  @JsProperty
  void setThen(Object then);
}
