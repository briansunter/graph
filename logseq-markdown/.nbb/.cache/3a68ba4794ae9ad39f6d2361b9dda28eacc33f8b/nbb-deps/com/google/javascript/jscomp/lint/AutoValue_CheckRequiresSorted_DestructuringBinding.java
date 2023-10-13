
package com.google.javascript.jscomp.lint;

import javax.annotation.Generated;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_CheckRequiresSorted_DestructuringBinding extends CheckRequiresSorted.DestructuringBinding {

  private final String exportedName;
  private final String localName;

  AutoValue_CheckRequiresSorted_DestructuringBinding(
      String exportedName,
      String localName) {
    if (exportedName == null) {
      throw new NullPointerException("Null exportedName");
    }
    this.exportedName = exportedName;
    if (localName == null) {
      throw new NullPointerException("Null localName");
    }
    this.localName = localName;
  }

  @Override
  String exportedName() {
    return exportedName;
  }

  @Override
  String localName() {
    return localName;
  }

  @Override
  public String toString() {
    return "DestructuringBinding{"
        + "exportedName=" + exportedName + ", "
        + "localName=" + localName
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof CheckRequiresSorted.DestructuringBinding) {
      CheckRequiresSorted.DestructuringBinding that = (CheckRequiresSorted.DestructuringBinding) o;
      return (this.exportedName.equals(that.exportedName()))
           && (this.localName.equals(that.localName()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.exportedName.hashCode();
    h *= 1000003;
    h ^= this.localName.hashCode();
    return h;
  }

}
