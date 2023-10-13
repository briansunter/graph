
package com.google.javascript.jscomp;

import javax.annotation.Generated;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_Es6RewriteModulesToCommonJsModules_ModuleRequest extends Es6RewriteModulesToCommonJsModules.ModuleRequest {

  private final String specifier;
  private final String varName;

  AutoValue_Es6RewriteModulesToCommonJsModules_ModuleRequest(
      String specifier,
      String varName) {
    if (specifier == null) {
      throw new NullPointerException("Null specifier");
    }
    this.specifier = specifier;
    if (varName == null) {
      throw new NullPointerException("Null varName");
    }
    this.varName = varName;
  }

  @Override
  String specifier() {
    return specifier;
  }

  @Override
  String varName() {
    return varName;
  }

  @Override
  public String toString() {
    return "ModuleRequest{"
        + "specifier=" + specifier + ", "
        + "varName=" + varName
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof Es6RewriteModulesToCommonJsModules.ModuleRequest) {
      Es6RewriteModulesToCommonJsModules.ModuleRequest that = (Es6RewriteModulesToCommonJsModules.ModuleRequest) o;
      return (this.specifier.equals(that.specifier()))
           && (this.varName.equals(that.varName()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.specifier.hashCode();
    h *= 1000003;
    h ^= this.varName.hashCode();
    return h;
  }

}
