
package com.google.javascript.jscomp;

import com.google.javascript.jscomp.parsing.parser.FeatureSet;
import java.util.function.Function;
import javax.annotation.Generated;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_PassFactory extends PassFactory {

  private final String name;
  private final boolean runInFixedPointLoop;
  private final FeatureSet featureSet;
  private final Function<AbstractCompiler, ? extends CompilerPass> internalFactory;
  private final boolean hotSwapable;

  private AutoValue_PassFactory(
      String name,
      boolean runInFixedPointLoop,
      FeatureSet featureSet,
      Function<AbstractCompiler, ? extends CompilerPass> internalFactory,
      boolean hotSwapable) {
    this.name = name;
    this.runInFixedPointLoop = runInFixedPointLoop;
    this.featureSet = featureSet;
    this.internalFactory = internalFactory;
    this.hotSwapable = hotSwapable;
  }

  @Override
  public String getName() {
    return name;
  }

  @Override
  public boolean isRunInFixedPointLoop() {
    return runInFixedPointLoop;
  }

  @Override
  public FeatureSet getFeatureSet() {
    return featureSet;
  }

  @Override
  Function<AbstractCompiler, ? extends CompilerPass> getInternalFactory() {
    return internalFactory;
  }

  @Override
  boolean isHotSwapable() {
    return hotSwapable;
  }

  @Override
  public String toString() {
    return "PassFactory{"
        + "name=" + name + ", "
        + "runInFixedPointLoop=" + runInFixedPointLoop + ", "
        + "featureSet=" + featureSet + ", "
        + "internalFactory=" + internalFactory + ", "
        + "hotSwapable=" + hotSwapable
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof PassFactory) {
      PassFactory that = (PassFactory) o;
      return (this.name.equals(that.getName()))
           && (this.runInFixedPointLoop == that.isRunInFixedPointLoop())
           && (this.featureSet.equals(that.getFeatureSet()))
           && (this.internalFactory.equals(that.getInternalFactory()))
           && (this.hotSwapable == that.isHotSwapable());
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.name.hashCode();
    h *= 1000003;
    h ^= this.runInFixedPointLoop ? 1231 : 1237;
    h *= 1000003;
    h ^= this.featureSet.hashCode();
    h *= 1000003;
    h ^= this.internalFactory.hashCode();
    h *= 1000003;
    h ^= this.hotSwapable ? 1231 : 1237;
    return h;
  }

  @Override
  public PassFactory.Builder toBuilder() {
    return new Builder(this);
  }

  static final class Builder extends PassFactory.Builder {
    private String name;
    private Boolean runInFixedPointLoop;
    private FeatureSet featureSet;
    private Function<AbstractCompiler, ? extends CompilerPass> internalFactory;
    private Boolean hotSwapable;
    Builder() {
    }
    private Builder(PassFactory source) {
      this.name = source.getName();
      this.runInFixedPointLoop = source.isRunInFixedPointLoop();
      this.featureSet = source.getFeatureSet();
      this.internalFactory = source.getInternalFactory();
      this.hotSwapable = source.isHotSwapable();
    }
    @Override
    public PassFactory.Builder setName(String name) {
      if (name == null) {
        throw new NullPointerException("Null name");
      }
      this.name = name;
      return this;
    }
    @Override
    public PassFactory.Builder setRunInFixedPointLoop(boolean runInFixedPointLoop) {
      this.runInFixedPointLoop = runInFixedPointLoop;
      return this;
    }
    @Override
    public PassFactory.Builder setFeatureSet(FeatureSet featureSet) {
      if (featureSet == null) {
        throw new NullPointerException("Null featureSet");
      }
      this.featureSet = featureSet;
      return this;
    }
    @Override
    public PassFactory.Builder setInternalFactory(Function<AbstractCompiler, ? extends CompilerPass> internalFactory) {
      if (internalFactory == null) {
        throw new NullPointerException("Null internalFactory");
      }
      this.internalFactory = internalFactory;
      return this;
    }
    @Override
    PassFactory.Builder setHotSwapable(boolean hotSwapable) {
      this.hotSwapable = hotSwapable;
      return this;
    }
    @Override
    PassFactory autoBuild() {
      String missing = "";
      if (this.name == null) {
        missing += " name";
      }
      if (this.runInFixedPointLoop == null) {
        missing += " runInFixedPointLoop";
      }
      if (this.featureSet == null) {
        missing += " featureSet";
      }
      if (this.internalFactory == null) {
        missing += " internalFactory";
      }
      if (this.hotSwapable == null) {
        missing += " hotSwapable";
      }
      if (!missing.isEmpty()) {
        throw new IllegalStateException("Missing required properties:" + missing);
      }
      return new AutoValue_PassFactory(
          this.name,
          this.runInFixedPointLoop,
          this.featureSet,
          this.internalFactory,
          this.hotSwapable);
    }
  }

}
