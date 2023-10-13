
package com.google.javascript.jscomp;

import com.google.common.collect.ImmutableList;
import javax.annotation.Generated;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_DependencyOptions extends DependencyOptions {

  private final DependencyOptions.DependencyMode mode;
  private final ImmutableList<ModuleIdentifier> entryPoints;

  AutoValue_DependencyOptions(
      DependencyOptions.DependencyMode mode,
      ImmutableList<ModuleIdentifier> entryPoints) {
    if (mode == null) {
      throw new NullPointerException("Null mode");
    }
    this.mode = mode;
    if (entryPoints == null) {
      throw new NullPointerException("Null entryPoints");
    }
    this.entryPoints = entryPoints;
  }

  @Override
  public DependencyOptions.DependencyMode getMode() {
    return mode;
  }

  @Override
  public ImmutableList<ModuleIdentifier> getEntryPoints() {
    return entryPoints;
  }

  @Override
  public String toString() {
    return "DependencyOptions{"
        + "mode=" + mode + ", "
        + "entryPoints=" + entryPoints
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof DependencyOptions) {
      DependencyOptions that = (DependencyOptions) o;
      return (this.mode.equals(that.getMode()))
           && (this.entryPoints.equals(that.getEntryPoints()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.mode.hashCode();
    h *= 1000003;
    h ^= this.entryPoints.hashCode();
    return h;
  }

}
