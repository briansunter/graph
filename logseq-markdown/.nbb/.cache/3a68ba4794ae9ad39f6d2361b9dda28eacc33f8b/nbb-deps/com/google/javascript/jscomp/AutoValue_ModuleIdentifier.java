
package com.google.javascript.jscomp;

import javax.annotation.Generated;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_ModuleIdentifier extends ModuleIdentifier {

  private final String name;
  private final String closureNamespace;
  private final String moduleName;

  AutoValue_ModuleIdentifier(
      String name,
      String closureNamespace,
      String moduleName) {
    if (name == null) {
      throw new NullPointerException("Null name");
    }
    this.name = name;
    if (closureNamespace == null) {
      throw new NullPointerException("Null closureNamespace");
    }
    this.closureNamespace = closureNamespace;
    if (moduleName == null) {
      throw new NullPointerException("Null moduleName");
    }
    this.moduleName = moduleName;
  }

  @Override
  public String getName() {
    return name;
  }

  @Override
  public String getClosureNamespace() {
    return closureNamespace;
  }

  @Override
  public String getModuleName() {
    return moduleName;
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof ModuleIdentifier) {
      ModuleIdentifier that = (ModuleIdentifier) o;
      return (this.name.equals(that.getName()))
           && (this.closureNamespace.equals(that.getClosureNamespace()))
           && (this.moduleName.equals(that.getModuleName()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.name.hashCode();
    h *= 1000003;
    h ^= this.closureNamespace.hashCode();
    h *= 1000003;
    h ^= this.moduleName.hashCode();
    return h;
  }

}
