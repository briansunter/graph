package elemental2.core;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ITemplateArray extends JsArray<String> {
  public String[] raw;

  public ITemplateArray() {
    // This call is only here for java compilation purpose.
    super((Object) null);
  }
}
