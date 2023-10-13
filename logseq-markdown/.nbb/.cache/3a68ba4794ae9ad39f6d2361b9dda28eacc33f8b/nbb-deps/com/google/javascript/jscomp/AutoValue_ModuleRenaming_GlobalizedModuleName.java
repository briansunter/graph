
package com.google.javascript.jscomp;

import com.google.javascript.rhino.QualifiedName;
import com.google.javascript.rhino.jstype.JSType;
import javax.annotation.Generated;
import javax.annotation.Nullable;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_ModuleRenaming_GlobalizedModuleName extends ModuleRenaming.GlobalizedModuleName {

  private final QualifiedName aliasName;
  private final JSType rootNameType;

  AutoValue_ModuleRenaming_GlobalizedModuleName(
      QualifiedName aliasName,
      @Nullable JSType rootNameType) {
    if (aliasName == null) {
      throw new NullPointerException("Null aliasName");
    }
    this.aliasName = aliasName;
    this.rootNameType = rootNameType;
  }

  @Override
  QualifiedName aliasName() {
    return aliasName;
  }

  @Nullable
  @Override
  JSType rootNameType() {
    return rootNameType;
  }

  @Override
  public String toString() {
    return "GlobalizedModuleName{"
        + "aliasName=" + aliasName + ", "
        + "rootNameType=" + rootNameType
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof ModuleRenaming.GlobalizedModuleName) {
      ModuleRenaming.GlobalizedModuleName that = (ModuleRenaming.GlobalizedModuleName) o;
      return (this.aliasName.equals(that.aliasName()))
           && ((this.rootNameType == null) ? (that.rootNameType() == null) : this.rootNameType.equals(that.rootNameType()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.aliasName.hashCode();
    h *= 1000003;
    h ^= (rootNameType == null) ? 0 : this.rootNameType.hashCode();
    return h;
  }

}
