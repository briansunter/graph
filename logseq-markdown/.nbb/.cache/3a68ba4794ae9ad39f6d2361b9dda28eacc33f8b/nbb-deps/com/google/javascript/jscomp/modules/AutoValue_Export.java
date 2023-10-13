
package com.google.javascript.jscomp.modules;

import com.google.javascript.jscomp.deps.ModuleLoader;
import com.google.javascript.rhino.Node;
import javax.annotation.Generated;
import javax.annotation.Nullable;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_Export extends Export {

  private final String exportName;
  private final String moduleRequest;
  private final String importName;
  private final String localName;
  private final ModuleLoader.ModulePath modulePath;
  private final Node exportNode;
  private final Node nameNode;
  private final ModuleMetadataMap.ModuleMetadata moduleMetadata;
  private final String closureNamespace;
  private final boolean mutated;

  private AutoValue_Export(
      @Nullable String exportName,
      @Nullable String moduleRequest,
      @Nullable String importName,
      @Nullable String localName,
      @Nullable ModuleLoader.ModulePath modulePath,
      @Nullable Node exportNode,
      @Nullable Node nameNode,
      ModuleMetadataMap.ModuleMetadata moduleMetadata,
      @Nullable String closureNamespace,
      boolean mutated) {
    this.exportName = exportName;
    this.moduleRequest = moduleRequest;
    this.importName = importName;
    this.localName = localName;
    this.modulePath = modulePath;
    this.exportNode = exportNode;
    this.nameNode = nameNode;
    this.moduleMetadata = moduleMetadata;
    this.closureNamespace = closureNamespace;
    this.mutated = mutated;
  }

  @Nullable
  @Override
  public String exportName() {
    return exportName;
  }

  @Nullable
  @Override
  public String moduleRequest() {
    return moduleRequest;
  }

  @Nullable
  @Override
  public String importName() {
    return importName;
  }

  @Nullable
  @Override
  public String localName() {
    return localName;
  }

  @Nullable
  @Override
  public ModuleLoader.ModulePath modulePath() {
    return modulePath;
  }

  @Nullable
  @Override
  public Node exportNode() {
    return exportNode;
  }

  @Nullable
  @Override
  public Node nameNode() {
    return nameNode;
  }

  @Override
  public ModuleMetadataMap.ModuleMetadata moduleMetadata() {
    return moduleMetadata;
  }

  @Nullable
  @Override
  public String closureNamespace() {
    return closureNamespace;
  }

  @Override
  public boolean mutated() {
    return mutated;
  }

  @Override
  public String toString() {
    return "Export{"
        + "exportName=" + exportName + ", "
        + "moduleRequest=" + moduleRequest + ", "
        + "importName=" + importName + ", "
        + "localName=" + localName + ", "
        + "modulePath=" + modulePath + ", "
        + "exportNode=" + exportNode + ", "
        + "nameNode=" + nameNode + ", "
        + "moduleMetadata=" + moduleMetadata + ", "
        + "closureNamespace=" + closureNamespace + ", "
        + "mutated=" + mutated
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof Export) {
      Export that = (Export) o;
      return ((this.exportName == null) ? (that.exportName() == null) : this.exportName.equals(that.exportName()))
           && ((this.moduleRequest == null) ? (that.moduleRequest() == null) : this.moduleRequest.equals(that.moduleRequest()))
           && ((this.importName == null) ? (that.importName() == null) : this.importName.equals(that.importName()))
           && ((this.localName == null) ? (that.localName() == null) : this.localName.equals(that.localName()))
           && ((this.modulePath == null) ? (that.modulePath() == null) : this.modulePath.equals(that.modulePath()))
           && ((this.exportNode == null) ? (that.exportNode() == null) : this.exportNode.equals(that.exportNode()))
           && ((this.nameNode == null) ? (that.nameNode() == null) : this.nameNode.equals(that.nameNode()))
           && (this.moduleMetadata.equals(that.moduleMetadata()))
           && ((this.closureNamespace == null) ? (that.closureNamespace() == null) : this.closureNamespace.equals(that.closureNamespace()))
           && (this.mutated == that.mutated());
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= (exportName == null) ? 0 : this.exportName.hashCode();
    h *= 1000003;
    h ^= (moduleRequest == null) ? 0 : this.moduleRequest.hashCode();
    h *= 1000003;
    h ^= (importName == null) ? 0 : this.importName.hashCode();
    h *= 1000003;
    h ^= (localName == null) ? 0 : this.localName.hashCode();
    h *= 1000003;
    h ^= (modulePath == null) ? 0 : this.modulePath.hashCode();
    h *= 1000003;
    h ^= (exportNode == null) ? 0 : this.exportNode.hashCode();
    h *= 1000003;
    h ^= (nameNode == null) ? 0 : this.nameNode.hashCode();
    h *= 1000003;
    h ^= this.moduleMetadata.hashCode();
    h *= 1000003;
    h ^= (closureNamespace == null) ? 0 : this.closureNamespace.hashCode();
    h *= 1000003;
    h ^= this.mutated ? 1231 : 1237;
    return h;
  }

  @Override
  Export.Builder toBuilder() {
    return new Builder(this);
  }

  static final class Builder extends Export.Builder {
    private String exportName;
    private String moduleRequest;
    private String importName;
    private String localName;
    private ModuleLoader.ModulePath modulePath;
    private Node exportNode;
    private Node nameNode;
    private ModuleMetadataMap.ModuleMetadata moduleMetadata;
    private String closureNamespace;
    private Boolean mutated;
    Builder() {
    }
    private Builder(Export source) {
      this.exportName = source.exportName();
      this.moduleRequest = source.moduleRequest();
      this.importName = source.importName();
      this.localName = source.localName();
      this.modulePath = source.modulePath();
      this.exportNode = source.exportNode();
      this.nameNode = source.nameNode();
      this.moduleMetadata = source.moduleMetadata();
      this.closureNamespace = source.closureNamespace();
      this.mutated = source.mutated();
    }
    @Override
    Export.Builder exportName(@Nullable String exportName) {
      this.exportName = exportName;
      return this;
    }
    @Override
    Export.Builder moduleRequest(@Nullable String moduleRequest) {
      this.moduleRequest = moduleRequest;
      return this;
    }
    @Override
    Export.Builder importName(@Nullable String importName) {
      this.importName = importName;
      return this;
    }
    @Override
    Export.Builder localName(@Nullable String localName) {
      this.localName = localName;
      return this;
    }
    @Override
    Export.Builder modulePath(@Nullable ModuleLoader.ModulePath modulePath) {
      this.modulePath = modulePath;
      return this;
    }
    @Override
    Export.Builder exportNode(@Nullable Node exportNode) {
      this.exportNode = exportNode;
      return this;
    }
    @Override
    Export.Builder nameNode(@Nullable Node nameNode) {
      this.nameNode = nameNode;
      return this;
    }
    @Override
    Export.Builder moduleMetadata(ModuleMetadataMap.ModuleMetadata moduleMetadata) {
      if (moduleMetadata == null) {
        throw new NullPointerException("Null moduleMetadata");
      }
      this.moduleMetadata = moduleMetadata;
      return this;
    }
    @Override
    Export.Builder closureNamespace(@Nullable String closureNamespace) {
      this.closureNamespace = closureNamespace;
      return this;
    }
    @Override
    Export.Builder mutated(boolean mutated) {
      this.mutated = mutated;
      return this;
    }
    @Override
    Export autoBuild() {
      String missing = "";
      if (this.moduleMetadata == null) {
        missing += " moduleMetadata";
      }
      if (this.mutated == null) {
        missing += " mutated";
      }
      if (!missing.isEmpty()) {
        throw new IllegalStateException("Missing required properties:" + missing);
      }
      return new AutoValue_Export(
          this.exportName,
          this.moduleRequest,
          this.importName,
          this.localName,
          this.modulePath,
          this.exportNode,
          this.nameNode,
          this.moduleMetadata,
          this.closureNamespace,
          this.mutated);
    }
  }

}
