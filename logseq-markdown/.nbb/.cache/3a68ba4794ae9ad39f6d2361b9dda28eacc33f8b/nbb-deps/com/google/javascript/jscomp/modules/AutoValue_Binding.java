
package com.google.javascript.jscomp.modules;

import com.google.javascript.rhino.Node;
import javax.annotation.Generated;
import javax.annotation.Nullable;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_Binding extends Binding {

  private final ModuleMetadataMap.ModuleMetadata metadata;
  private final Node sourceNode;
  private final Export originatingExport;
  private final boolean isModuleNamespace;
  private final String closureNamespace;
  private final Binding.CreatedBy createdBy;

  AutoValue_Binding(
      ModuleMetadataMap.ModuleMetadata metadata,
      @Nullable Node sourceNode,
      @Nullable Export originatingExport,
      boolean isModuleNamespace,
      @Nullable String closureNamespace,
      Binding.CreatedBy createdBy) {
    if (metadata == null) {
      throw new NullPointerException("Null metadata");
    }
    this.metadata = metadata;
    this.sourceNode = sourceNode;
    this.originatingExport = originatingExport;
    this.isModuleNamespace = isModuleNamespace;
    this.closureNamespace = closureNamespace;
    if (createdBy == null) {
      throw new NullPointerException("Null createdBy");
    }
    this.createdBy = createdBy;
  }

  @Override
  public ModuleMetadataMap.ModuleMetadata metadata() {
    return metadata;
  }

  @Nullable
  @Override
  public Node sourceNode() {
    return sourceNode;
  }

  @Nullable
  @Override
  public Export originatingExport() {
    return originatingExport;
  }

  @Override
  public boolean isModuleNamespace() {
    return isModuleNamespace;
  }

  @Nullable
  @Override
  public String closureNamespace() {
    return closureNamespace;
  }

  @Override
  public Binding.CreatedBy createdBy() {
    return createdBy;
  }

  @Override
  public String toString() {
    return "Binding{"
        + "metadata=" + metadata + ", "
        + "sourceNode=" + sourceNode + ", "
        + "originatingExport=" + originatingExport + ", "
        + "isModuleNamespace=" + isModuleNamespace + ", "
        + "closureNamespace=" + closureNamespace + ", "
        + "createdBy=" + createdBy
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof Binding) {
      Binding that = (Binding) o;
      return (this.metadata.equals(that.metadata()))
           && ((this.sourceNode == null) ? (that.sourceNode() == null) : this.sourceNode.equals(that.sourceNode()))
           && ((this.originatingExport == null) ? (that.originatingExport() == null) : this.originatingExport.equals(that.originatingExport()))
           && (this.isModuleNamespace == that.isModuleNamespace())
           && ((this.closureNamespace == null) ? (that.closureNamespace() == null) : this.closureNamespace.equals(that.closureNamespace()))
           && (this.createdBy.equals(that.createdBy()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.metadata.hashCode();
    h *= 1000003;
    h ^= (sourceNode == null) ? 0 : this.sourceNode.hashCode();
    h *= 1000003;
    h ^= (originatingExport == null) ? 0 : this.originatingExport.hashCode();
    h *= 1000003;
    h ^= this.isModuleNamespace ? 1231 : 1237;
    h *= 1000003;
    h ^= (closureNamespace == null) ? 0 : this.closureNamespace.hashCode();
    h *= 1000003;
    h ^= this.createdBy.hashCode();
    return h;
  }

}
