
package com.google.javascript.jscomp.modules;

import javax.annotation.Generated;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_ExportTrace extends ExportTrace {

  private final UnresolvedModule module;
  private final String exportName;

  AutoValue_ExportTrace(
      UnresolvedModule module,
      String exportName) {
    if (module == null) {
      throw new NullPointerException("Null module");
    }
    this.module = module;
    if (exportName == null) {
      throw new NullPointerException("Null exportName");
    }
    this.exportName = exportName;
  }

  @Override
  UnresolvedModule module() {
    return module;
  }

  @Override
  String exportName() {
    return exportName;
  }

  @Override
  public String toString() {
    return "ExportTrace{"
        + "module=" + module + ", "
        + "exportName=" + exportName
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof ExportTrace) {
      ExportTrace that = (ExportTrace) o;
      return (this.module.equals(that.module()))
           && (this.exportName.equals(that.exportName()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.module.hashCode();
    h *= 1000003;
    h ^= this.exportName.hashCode();
    return h;
  }

}
