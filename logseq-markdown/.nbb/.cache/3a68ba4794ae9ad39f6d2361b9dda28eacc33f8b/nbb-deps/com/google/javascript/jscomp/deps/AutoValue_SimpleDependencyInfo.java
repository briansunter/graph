
package com.google.javascript.jscomp.deps;

import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableMap;
import java.util.Arrays;
import java.util.Collection;
import java.util.Map;
import javax.annotation.Generated;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_SimpleDependencyInfo extends SimpleDependencyInfo {

  private final String name;
  private final String pathRelativeToClosureBase;
  private final ImmutableList<String> provides;
  private final ImmutableList<DependencyInfo.Require> requires;
  private final ImmutableList<String> typeRequires;
  private final ImmutableMap<String, String> loadFlags;
  private final boolean hasExternsAnnotation;
  private final boolean hasNoCompileAnnotation;

  private AutoValue_SimpleDependencyInfo(
      String name,
      String pathRelativeToClosureBase,
      ImmutableList<String> provides,
      ImmutableList<DependencyInfo.Require> requires,
      ImmutableList<String> typeRequires,
      ImmutableMap<String, String> loadFlags,
      boolean hasExternsAnnotation,
      boolean hasNoCompileAnnotation) {
    this.name = name;
    this.pathRelativeToClosureBase = pathRelativeToClosureBase;
    this.provides = provides;
    this.requires = requires;
    this.typeRequires = typeRequires;
    this.loadFlags = loadFlags;
    this.hasExternsAnnotation = hasExternsAnnotation;
    this.hasNoCompileAnnotation = hasNoCompileAnnotation;
  }

  @Override
  public String getName() {
    return name;
  }

  @Override
  public String getPathRelativeToClosureBase() {
    return pathRelativeToClosureBase;
  }

  @Override
  public ImmutableList<String> getProvides() {
    return provides;
  }

  @Override
  public ImmutableList<DependencyInfo.Require> getRequires() {
    return requires;
  }

  @Override
  public ImmutableList<String> getTypeRequires() {
    return typeRequires;
  }

  @Override
  public ImmutableMap<String, String> getLoadFlags() {
    return loadFlags;
  }

  @Override
  public boolean getHasExternsAnnotation() {
    return hasExternsAnnotation;
  }

  @Override
  public boolean getHasNoCompileAnnotation() {
    return hasNoCompileAnnotation;
  }

  @Override
  public String toString() {
    return "SimpleDependencyInfo{"
        + "name=" + name + ", "
        + "pathRelativeToClosureBase=" + pathRelativeToClosureBase + ", "
        + "provides=" + provides + ", "
        + "requires=" + requires + ", "
        + "typeRequires=" + typeRequires + ", "
        + "loadFlags=" + loadFlags + ", "
        + "hasExternsAnnotation=" + hasExternsAnnotation + ", "
        + "hasNoCompileAnnotation=" + hasNoCompileAnnotation
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof SimpleDependencyInfo) {
      SimpleDependencyInfo that = (SimpleDependencyInfo) o;
      return (this.name.equals(that.getName()))
           && (this.pathRelativeToClosureBase.equals(that.getPathRelativeToClosureBase()))
           && (this.provides.equals(that.getProvides()))
           && (this.requires.equals(that.getRequires()))
           && (this.typeRequires.equals(that.getTypeRequires()))
           && (this.loadFlags.equals(that.getLoadFlags()))
           && (this.hasExternsAnnotation == that.getHasExternsAnnotation())
           && (this.hasNoCompileAnnotation == that.getHasNoCompileAnnotation());
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.name.hashCode();
    h *= 1000003;
    h ^= this.pathRelativeToClosureBase.hashCode();
    h *= 1000003;
    h ^= this.provides.hashCode();
    h *= 1000003;
    h ^= this.requires.hashCode();
    h *= 1000003;
    h ^= this.typeRequires.hashCode();
    h *= 1000003;
    h ^= this.loadFlags.hashCode();
    h *= 1000003;
    h ^= this.hasExternsAnnotation ? 1231 : 1237;
    h *= 1000003;
    h ^= this.hasNoCompileAnnotation ? 1231 : 1237;
    return h;
  }

  static final class Builder extends SimpleDependencyInfo.Builder {
    private String name;
    private String pathRelativeToClosureBase;
    private ImmutableList<String> provides;
    private ImmutableList<DependencyInfo.Require> requires;
    private ImmutableList<String> typeRequires;
    private ImmutableMap<String, String> loadFlags;
    private Boolean hasExternsAnnotation;
    private Boolean hasNoCompileAnnotation;
    Builder() {
    }
    @Override
    SimpleDependencyInfo.Builder setName(String name) {
      if (name == null) {
        throw new NullPointerException("Null name");
      }
      this.name = name;
      return this;
    }
    @Override
    SimpleDependencyInfo.Builder setPathRelativeToClosureBase(String pathRelativeToClosureBase) {
      if (pathRelativeToClosureBase == null) {
        throw new NullPointerException("Null pathRelativeToClosureBase");
      }
      this.pathRelativeToClosureBase = pathRelativeToClosureBase;
      return this;
    }
    @Override
    public SimpleDependencyInfo.Builder setProvides(Collection<String> provides) {
      if (provides == null) {
        throw new NullPointerException("Null provides");
      }
      this.provides = ImmutableList.copyOf(provides);
      return this;
    }
    @Override
    public SimpleDependencyInfo.Builder setProvides(String... provides) {
      if (provides == null) {
        throw new NullPointerException("Null provides");
      }
      this.provides = ImmutableList.copyOf(provides);
      return this;
    }
    @Override
    public SimpleDependencyInfo.Builder setRequires(Collection<DependencyInfo.Require> requires) {
      if (requires == null) {
        throw new NullPointerException("Null requires");
      }
      this.requires = ImmutableList.copyOf(requires);
      return this;
    }
    @Override
    public SimpleDependencyInfo.Builder setRequires(DependencyInfo.Require... requires) {
      if (requires == null) {
        throw new NullPointerException("Null requires");
      }
      this.requires = ImmutableList.copyOf(requires);
      return this;
    }
    @Override
    public SimpleDependencyInfo.Builder setTypeRequires(Collection<String> typeRequires) {
      if (typeRequires == null) {
        throw new NullPointerException("Null typeRequires");
      }
      this.typeRequires = ImmutableList.copyOf(typeRequires);
      return this;
    }
    @Override
    public SimpleDependencyInfo.Builder setTypeRequires(String... typeRequires) {
      if (typeRequires == null) {
        throw new NullPointerException("Null typeRequires");
      }
      this.typeRequires = ImmutableList.copyOf(typeRequires);
      return this;
    }
    @Override
    public SimpleDependencyInfo.Builder setLoadFlags(Map<String, String> loadFlags) {
      if (loadFlags == null) {
        throw new NullPointerException("Null loadFlags");
      }
      this.loadFlags = ImmutableMap.copyOf(loadFlags);
      return this;
    }
    @Override
    public SimpleDependencyInfo.Builder setHasExternsAnnotation(boolean hasExternsAnnotation) {
      this.hasExternsAnnotation = hasExternsAnnotation;
      return this;
    }
    @Override
    public SimpleDependencyInfo.Builder setHasNoCompileAnnotation(boolean hasNoCompileAnnotation) {
      this.hasNoCompileAnnotation = hasNoCompileAnnotation;
      return this;
    }
    @Override
    public SimpleDependencyInfo build() {
      String missing = "";
      if (this.name == null) {
        missing += " name";
      }
      if (this.pathRelativeToClosureBase == null) {
        missing += " pathRelativeToClosureBase";
      }
      if (this.provides == null) {
        missing += " provides";
      }
      if (this.requires == null) {
        missing += " requires";
      }
      if (this.typeRequires == null) {
        missing += " typeRequires";
      }
      if (this.loadFlags == null) {
        missing += " loadFlags";
      }
      if (this.hasExternsAnnotation == null) {
        missing += " hasExternsAnnotation";
      }
      if (this.hasNoCompileAnnotation == null) {
        missing += " hasNoCompileAnnotation";
      }
      if (!missing.isEmpty()) {
        throw new IllegalStateException("Missing required properties:" + missing);
      }
      return new AutoValue_SimpleDependencyInfo(
          this.name,
          this.pathRelativeToClosureBase,
          this.provides,
          this.requires,
          this.typeRequires,
          this.loadFlags,
          this.hasExternsAnnotation,
          this.hasNoCompileAnnotation);
    }
  }

}
