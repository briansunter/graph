
package com.google.javascript.jscomp.modules;

import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableMultiset;
import com.google.javascript.jscomp.deps.ModuleLoader;
import com.google.javascript.rhino.Node;
import javax.annotation.Generated;
import javax.annotation.Nullable;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_ModuleMetadataMap_ModuleMetadata extends ModuleMetadataMap.ModuleMetadata {

  private final ModuleMetadataMap.ModuleType moduleType;
  private final Node rootNode;
  private final boolean usesClosure;
  private final boolean isTestOnly;
  private final ImmutableMultiset<String> googNamespaces;
  private final ImmutableMultiset<String> requiredGoogNamespaces;
  private final ImmutableMultiset<String> requiredTypes;
  private final ImmutableMultiset<String> es6ImportSpecifiers;
  private final ImmutableList<ModuleMetadataMap.ModuleMetadata> nestedModules;
  private final ModuleLoader.ModulePath path;

  private AutoValue_ModuleMetadataMap_ModuleMetadata(
      ModuleMetadataMap.ModuleType moduleType,
      @Nullable Node rootNode,
      boolean usesClosure,
      boolean isTestOnly,
      ImmutableMultiset<String> googNamespaces,
      ImmutableMultiset<String> requiredGoogNamespaces,
      ImmutableMultiset<String> requiredTypes,
      ImmutableMultiset<String> es6ImportSpecifiers,
      ImmutableList<ModuleMetadataMap.ModuleMetadata> nestedModules,
      @Nullable ModuleLoader.ModulePath path) {
    this.moduleType = moduleType;
    this.rootNode = rootNode;
    this.usesClosure = usesClosure;
    this.isTestOnly = isTestOnly;
    this.googNamespaces = googNamespaces;
    this.requiredGoogNamespaces = requiredGoogNamespaces;
    this.requiredTypes = requiredTypes;
    this.es6ImportSpecifiers = es6ImportSpecifiers;
    this.nestedModules = nestedModules;
    this.path = path;
  }

  @Override
  public ModuleMetadataMap.ModuleType moduleType() {
    return moduleType;
  }

  @Nullable
  @Override
  public Node rootNode() {
    return rootNode;
  }

  @Override
  public boolean usesClosure() {
    return usesClosure;
  }

  @Override
  public boolean isTestOnly() {
    return isTestOnly;
  }

  @Override
  public ImmutableMultiset<String> googNamespaces() {
    return googNamespaces;
  }

  @Override
  public ImmutableMultiset<String> requiredGoogNamespaces() {
    return requiredGoogNamespaces;
  }

  @Override
  public ImmutableMultiset<String> requiredTypes() {
    return requiredTypes;
  }

  @Override
  public ImmutableMultiset<String> es6ImportSpecifiers() {
    return es6ImportSpecifiers;
  }

  @Override
  public ImmutableList<ModuleMetadataMap.ModuleMetadata> nestedModules() {
    return nestedModules;
  }

  @Nullable
  @Override
  public ModuleLoader.ModulePath path() {
    return path;
  }

  @Override
  public String toString() {
    return "ModuleMetadata{"
        + "moduleType=" + moduleType + ", "
        + "rootNode=" + rootNode + ", "
        + "usesClosure=" + usesClosure + ", "
        + "isTestOnly=" + isTestOnly + ", "
        + "googNamespaces=" + googNamespaces + ", "
        + "requiredGoogNamespaces=" + requiredGoogNamespaces + ", "
        + "requiredTypes=" + requiredTypes + ", "
        + "es6ImportSpecifiers=" + es6ImportSpecifiers + ", "
        + "nestedModules=" + nestedModules + ", "
        + "path=" + path
        + "}";
  }

  static final class Builder extends ModuleMetadataMap.ModuleMetadata.Builder {
    private ModuleMetadataMap.ModuleType moduleType;
    private Node rootNode;
    private Boolean usesClosure;
    private Boolean isTestOnly;
    private ImmutableMultiset.Builder<String> googNamespacesBuilder$;
    private ImmutableMultiset<String> googNamespaces;
    private ImmutableMultiset.Builder<String> requiredGoogNamespacesBuilder$;
    private ImmutableMultiset<String> requiredGoogNamespaces;
    private ImmutableMultiset.Builder<String> requiredTypesBuilder$;
    private ImmutableMultiset<String> requiredTypes;
    private ImmutableMultiset.Builder<String> es6ImportSpecifiersBuilder$;
    private ImmutableMultiset<String> es6ImportSpecifiers;
    private ImmutableList.Builder<ModuleMetadataMap.ModuleMetadata> nestedModulesBuilder$;
    private ImmutableList<ModuleMetadataMap.ModuleMetadata> nestedModules;
    private ModuleLoader.ModulePath path;
    Builder() {
    }
    @Override
    public ModuleMetadataMap.ModuleMetadata.Builder moduleType(ModuleMetadataMap.ModuleType moduleType) {
      if (moduleType == null) {
        throw new NullPointerException("Null moduleType");
      }
      this.moduleType = moduleType;
      return this;
    }
    @Override
    public ModuleMetadataMap.ModuleType moduleType() {
      if (moduleType == null) {
        throw new IllegalStateException("Property \"moduleType\" has not been set");
      }
      return moduleType;
    }
    @Override
    public ModuleMetadataMap.ModuleMetadata.Builder rootNode(@Nullable Node rootNode) {
      this.rootNode = rootNode;
      return this;
    }
    @Override
    public ModuleMetadataMap.ModuleMetadata.Builder usesClosure(boolean usesClosure) {
      this.usesClosure = usesClosure;
      return this;
    }
    @Override
    public ModuleMetadataMap.ModuleMetadata.Builder isTestOnly(boolean isTestOnly) {
      this.isTestOnly = isTestOnly;
      return this;
    }
    @Override
    public ImmutableMultiset.Builder<String> googNamespacesBuilder() {
      if (googNamespacesBuilder$ == null) {
        googNamespacesBuilder$ = ImmutableMultiset.builder();
      }
      return googNamespacesBuilder$;
    }
    @Override
    public ImmutableMultiset.Builder<String> requiredGoogNamespacesBuilder() {
      if (requiredGoogNamespacesBuilder$ == null) {
        requiredGoogNamespacesBuilder$ = ImmutableMultiset.builder();
      }
      return requiredGoogNamespacesBuilder$;
    }
    @Override
    public ImmutableMultiset.Builder<String> requiredTypesBuilder() {
      if (requiredTypesBuilder$ == null) {
        requiredTypesBuilder$ = ImmutableMultiset.builder();
      }
      return requiredTypesBuilder$;
    }
    @Override
    public ImmutableMultiset.Builder<String> es6ImportSpecifiersBuilder() {
      if (es6ImportSpecifiersBuilder$ == null) {
        es6ImportSpecifiersBuilder$ = ImmutableMultiset.builder();
      }
      return es6ImportSpecifiersBuilder$;
    }
    @Override
    public ImmutableList.Builder<ModuleMetadataMap.ModuleMetadata> nestedModulesBuilder() {
      if (nestedModulesBuilder$ == null) {
        nestedModulesBuilder$ = ImmutableList.builder();
      }
      return nestedModulesBuilder$;
    }
    @Override
    public ModuleMetadataMap.ModuleMetadata.Builder path(@Nullable ModuleLoader.ModulePath path) {
      this.path = path;
      return this;
    }
    @Override
    public ModuleMetadataMap.ModuleMetadata build() {
      if (googNamespacesBuilder$ != null) {
        this.googNamespaces = googNamespacesBuilder$.build();
      } else if (this.googNamespaces == null) {
        this.googNamespaces = ImmutableMultiset.of();
      }
      if (requiredGoogNamespacesBuilder$ != null) {
        this.requiredGoogNamespaces = requiredGoogNamespacesBuilder$.build();
      } else if (this.requiredGoogNamespaces == null) {
        this.requiredGoogNamespaces = ImmutableMultiset.of();
      }
      if (requiredTypesBuilder$ != null) {
        this.requiredTypes = requiredTypesBuilder$.build();
      } else if (this.requiredTypes == null) {
        this.requiredTypes = ImmutableMultiset.of();
      }
      if (es6ImportSpecifiersBuilder$ != null) {
        this.es6ImportSpecifiers = es6ImportSpecifiersBuilder$.build();
      } else if (this.es6ImportSpecifiers == null) {
        this.es6ImportSpecifiers = ImmutableMultiset.of();
      }
      if (nestedModulesBuilder$ != null) {
        this.nestedModules = nestedModulesBuilder$.build();
      } else if (this.nestedModules == null) {
        this.nestedModules = ImmutableList.of();
      }
      String missing = "";
      if (this.moduleType == null) {
        missing += " moduleType";
      }
      if (this.usesClosure == null) {
        missing += " usesClosure";
      }
      if (this.isTestOnly == null) {
        missing += " isTestOnly";
      }
      if (!missing.isEmpty()) {
        throw new IllegalStateException("Missing required properties:" + missing);
      }
      return new AutoValue_ModuleMetadataMap_ModuleMetadata(
          this.moduleType,
          this.rootNode,
          this.usesClosure,
          this.isTestOnly,
          this.googNamespaces,
          this.requiredGoogNamespaces,
          this.requiredTypes,
          this.es6ImportSpecifiers,
          this.nestedModules,
          this.path);
    }
  }

}
