
package com.google.javascript.jscomp.modules;

import com.google.javascript.jscomp.deps.ModuleLoader;
import com.google.javascript.rhino.Node;
import javax.annotation.Generated;
import javax.annotation.Nullable;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_Import extends Import {

  private final String moduleRequest;
  private final String importName;
  private final String localName;
  private final ModuleLoader.ModulePath modulePath;
  private final Node importNode;
  private final Node nameNode;

  private AutoValue_Import(
      String moduleRequest,
      String importName,
      String localName,
      @Nullable ModuleLoader.ModulePath modulePath,
      Node importNode,
      Node nameNode) {
    this.moduleRequest = moduleRequest;
    this.importName = importName;
    this.localName = localName;
    this.modulePath = modulePath;
    this.importNode = importNode;
    this.nameNode = nameNode;
  }

  @Override
  public String moduleRequest() {
    return moduleRequest;
  }

  @Override
  public String importName() {
    return importName;
  }

  @Override
  public String localName() {
    return localName;
  }

  @Nullable
  @Override
  public ModuleLoader.ModulePath modulePath() {
    return modulePath;
  }

  @Override
  public Node importNode() {
    return importNode;
  }

  @Override
  public Node nameNode() {
    return nameNode;
  }

  @Override
  public String toString() {
    return "Import{"
        + "moduleRequest=" + moduleRequest + ", "
        + "importName=" + importName + ", "
        + "localName=" + localName + ", "
        + "modulePath=" + modulePath + ", "
        + "importNode=" + importNode + ", "
        + "nameNode=" + nameNode
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof Import) {
      Import that = (Import) o;
      return (this.moduleRequest.equals(that.moduleRequest()))
           && (this.importName.equals(that.importName()))
           && (this.localName.equals(that.localName()))
           && ((this.modulePath == null) ? (that.modulePath() == null) : this.modulePath.equals(that.modulePath()))
           && (this.importNode.equals(that.importNode()))
           && (this.nameNode.equals(that.nameNode()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.moduleRequest.hashCode();
    h *= 1000003;
    h ^= this.importName.hashCode();
    h *= 1000003;
    h ^= this.localName.hashCode();
    h *= 1000003;
    h ^= (modulePath == null) ? 0 : this.modulePath.hashCode();
    h *= 1000003;
    h ^= this.importNode.hashCode();
    h *= 1000003;
    h ^= this.nameNode.hashCode();
    return h;
  }

  static final class Builder extends Import.Builder {
    private String moduleRequest;
    private String importName;
    private String localName;
    private ModuleLoader.ModulePath modulePath;
    private Node importNode;
    private Node nameNode;
    Builder() {
    }
    @Override
    Import.Builder moduleRequest(String moduleRequest) {
      if (moduleRequest == null) {
        throw new NullPointerException("Null moduleRequest");
      }
      this.moduleRequest = moduleRequest;
      return this;
    }
    @Override
    Import.Builder importName(String importName) {
      if (importName == null) {
        throw new NullPointerException("Null importName");
      }
      this.importName = importName;
      return this;
    }
    @Override
    Import.Builder localName(String localName) {
      if (localName == null) {
        throw new NullPointerException("Null localName");
      }
      this.localName = localName;
      return this;
    }
    @Override
    Import.Builder modulePath(@Nullable ModuleLoader.ModulePath modulePath) {
      this.modulePath = modulePath;
      return this;
    }
    @Override
    Import.Builder importNode(Node importNode) {
      if (importNode == null) {
        throw new NullPointerException("Null importNode");
      }
      this.importNode = importNode;
      return this;
    }
    @Override
    Import.Builder nameNode(Node nameNode) {
      if (nameNode == null) {
        throw new NullPointerException("Null nameNode");
      }
      this.nameNode = nameNode;
      return this;
    }
    @Override
    Import build() {
      String missing = "";
      if (this.moduleRequest == null) {
        missing += " moduleRequest";
      }
      if (this.importName == null) {
        missing += " importName";
      }
      if (this.localName == null) {
        missing += " localName";
      }
      if (this.importNode == null) {
        missing += " importNode";
      }
      if (this.nameNode == null) {
        missing += " nameNode";
      }
      if (!missing.isEmpty()) {
        throw new IllegalStateException("Missing required properties:" + missing);
      }
      return new AutoValue_Import(
          this.moduleRequest,
          this.importName,
          this.localName,
          this.modulePath,
          this.importNode,
          this.nameNode);
    }
  }

}
