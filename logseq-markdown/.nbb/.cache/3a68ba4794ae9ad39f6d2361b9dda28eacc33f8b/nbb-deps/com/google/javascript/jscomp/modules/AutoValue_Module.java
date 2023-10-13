
package com.google.javascript.jscomp.modules;

import com.google.common.collect.ImmutableMap;
import com.google.javascript.jscomp.deps.ModuleLoader;
import javax.annotation.Generated;
import javax.annotation.Nullable;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_Module extends Module {

  private final ModuleMetadataMap.ModuleMetadata metadata;
  private final ModuleLoader.ModulePath path;
  private final ImmutableMap<String, Binding> namespace;
  private final ImmutableMap<String, Binding> boundNames;
  private final ImmutableMap<String, Export> localNameToLocalExport;
  private final String closureNamespace;
  private final UnresolvedModule unresolvedModule;

  private AutoValue_Module(
      ModuleMetadataMap.ModuleMetadata metadata,
      @Nullable ModuleLoader.ModulePath path,
      ImmutableMap<String, Binding> namespace,
      ImmutableMap<String, Binding> boundNames,
      ImmutableMap<String, Export> localNameToLocalExport,
      @Nullable String closureNamespace,
      UnresolvedModule unresolvedModule) {
    this.metadata = metadata;
    this.path = path;
    this.namespace = namespace;
    this.boundNames = boundNames;
    this.localNameToLocalExport = localNameToLocalExport;
    this.closureNamespace = closureNamespace;
    this.unresolvedModule = unresolvedModule;
  }

  @Override
  public ModuleMetadataMap.ModuleMetadata metadata() {
    return metadata;
  }

  @Nullable
  @Override
  public ModuleLoader.ModulePath path() {
    return path;
  }

  @Override
  public ImmutableMap<String, Binding> namespace() {
    return namespace;
  }

  @Override
  public ImmutableMap<String, Binding> boundNames() {
    return boundNames;
  }

  @Override
  public ImmutableMap<String, Export> localNameToLocalExport() {
    return localNameToLocalExport;
  }

  @Nullable
  @Override
  public String closureNamespace() {
    return closureNamespace;
  }

  @Override
  UnresolvedModule unresolvedModule() {
    return unresolvedModule;
  }

  @Override
  public String toString() {
    return "Module{"
        + "metadata=" + metadata + ", "
        + "path=" + path + ", "
        + "namespace=" + namespace + ", "
        + "boundNames=" + boundNames + ", "
        + "localNameToLocalExport=" + localNameToLocalExport + ", "
        + "closureNamespace=" + closureNamespace + ", "
        + "unresolvedModule=" + unresolvedModule
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof Module) {
      Module that = (Module) o;
      return (this.metadata.equals(that.metadata()))
           && ((this.path == null) ? (that.path() == null) : this.path.equals(that.path()))
           && (this.namespace.equals(that.namespace()))
           && (this.boundNames.equals(that.boundNames()))
           && (this.localNameToLocalExport.equals(that.localNameToLocalExport()))
           && ((this.closureNamespace == null) ? (that.closureNamespace() == null) : this.closureNamespace.equals(that.closureNamespace()))
           && (this.unresolvedModule.equals(that.unresolvedModule()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.metadata.hashCode();
    h *= 1000003;
    h ^= (path == null) ? 0 : this.path.hashCode();
    h *= 1000003;
    h ^= this.namespace.hashCode();
    h *= 1000003;
    h ^= this.boundNames.hashCode();
    h *= 1000003;
    h ^= this.localNameToLocalExport.hashCode();
    h *= 1000003;
    h ^= (closureNamespace == null) ? 0 : this.closureNamespace.hashCode();
    h *= 1000003;
    h ^= this.unresolvedModule.hashCode();
    return h;
  }

  @Override
  public Module.Builder toBuilder() {
    return new Builder(this);
  }

  static final class Builder extends Module.Builder {
    private ModuleMetadataMap.ModuleMetadata metadata;
    private ModuleLoader.ModulePath path;
    private ImmutableMap<String, Binding> namespace;
    private ImmutableMap<String, Binding> boundNames;
    private ImmutableMap<String, Export> localNameToLocalExport;
    private String closureNamespace;
    private UnresolvedModule unresolvedModule;
    Builder() {
    }
    private Builder(Module source) {
      this.metadata = source.metadata();
      this.path = source.path();
      this.namespace = source.namespace();
      this.boundNames = source.boundNames();
      this.localNameToLocalExport = source.localNameToLocalExport();
      this.closureNamespace = source.closureNamespace();
      this.unresolvedModule = source.unresolvedModule();
    }
    @Override
    public Module.Builder metadata(ModuleMetadataMap.ModuleMetadata metadata) {
      if (metadata == null) {
        throw new NullPointerException("Null metadata");
      }
      this.metadata = metadata;
      return this;
    }
    @Override
    public Module.Builder path(@Nullable ModuleLoader.ModulePath path) {
      this.path = path;
      return this;
    }
    @Override
    public Module.Builder namespace(ImmutableMap<String, Binding> namespace) {
      if (namespace == null) {
        throw new NullPointerException("Null namespace");
      }
      this.namespace = namespace;
      return this;
    }
    @Override
    public Module.Builder boundNames(ImmutableMap<String, Binding> boundNames) {
      if (boundNames == null) {
        throw new NullPointerException("Null boundNames");
      }
      this.boundNames = boundNames;
      return this;
    }
    @Override
    public Module.Builder localNameToLocalExport(ImmutableMap<String, Export> localNameToLocalExport) {
      if (localNameToLocalExport == null) {
        throw new NullPointerException("Null localNameToLocalExport");
      }
      this.localNameToLocalExport = localNameToLocalExport;
      return this;
    }
    @Override
    public Module.Builder closureNamespace(@Nullable String closureNamespace) {
      this.closureNamespace = closureNamespace;
      return this;
    }
    @Override
    public Module.Builder unresolvedModule(UnresolvedModule unresolvedModule) {
      if (unresolvedModule == null) {
        throw new NullPointerException("Null unresolvedModule");
      }
      this.unresolvedModule = unresolvedModule;
      return this;
    }
    @Override
    public Module build() {
      String missing = "";
      if (this.metadata == null) {
        missing += " metadata";
      }
      if (this.namespace == null) {
        missing += " namespace";
      }
      if (this.boundNames == null) {
        missing += " boundNames";
      }
      if (this.localNameToLocalExport == null) {
        missing += " localNameToLocalExport";
      }
      if (this.unresolvedModule == null) {
        missing += " unresolvedModule";
      }
      if (!missing.isEmpty()) {
        throw new IllegalStateException("Missing required properties:" + missing);
      }
      return new AutoValue_Module(
          this.metadata,
          this.path,
          this.namespace,
          this.boundNames,
          this.localNameToLocalExport,
          this.closureNamespace,
          this.unresolvedModule);
    }
  }

}
