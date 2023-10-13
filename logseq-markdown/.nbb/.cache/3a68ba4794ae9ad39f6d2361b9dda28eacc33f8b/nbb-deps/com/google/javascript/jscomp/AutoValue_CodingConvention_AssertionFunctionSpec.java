
package com.google.javascript.jscomp;

import com.google.javascript.rhino.ClosurePrimitive;
import javax.annotation.Generated;
import javax.annotation.Nullable;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_CodingConvention_AssertionFunctionSpec extends CodingConvention.AssertionFunctionSpec {

  private final String functionName;
  private final ClosurePrimitive closurePrimitive;
  private final CodingConvention.AssertionFunctionSpec.AssertionKind assertionKind;
  private final int paramIndex;

  private AutoValue_CodingConvention_AssertionFunctionSpec(
      @Nullable String functionName,
      @Nullable ClosurePrimitive closurePrimitive,
      CodingConvention.AssertionFunctionSpec.AssertionKind assertionKind,
      int paramIndex) {
    this.functionName = functionName;
    this.closurePrimitive = closurePrimitive;
    this.assertionKind = assertionKind;
    this.paramIndex = paramIndex;
  }

  @Nullable
  @Override
  String getFunctionName() {
    return functionName;
  }

  @Nullable
  @Override
  ClosurePrimitive getClosurePrimitive() {
    return closurePrimitive;
  }

  @Override
  CodingConvention.AssertionFunctionSpec.AssertionKind getAssertionKind() {
    return assertionKind;
  }

  @Override
  int getParamIndex() {
    return paramIndex;
  }

  @Override
  public String toString() {
    return "AssertionFunctionSpec{"
        + "functionName=" + functionName + ", "
        + "closurePrimitive=" + closurePrimitive + ", "
        + "assertionKind=" + assertionKind + ", "
        + "paramIndex=" + paramIndex
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof CodingConvention.AssertionFunctionSpec) {
      CodingConvention.AssertionFunctionSpec that = (CodingConvention.AssertionFunctionSpec) o;
      return ((this.functionName == null) ? (that.getFunctionName() == null) : this.functionName.equals(that.getFunctionName()))
           && ((this.closurePrimitive == null) ? (that.getClosurePrimitive() == null) : this.closurePrimitive.equals(that.getClosurePrimitive()))
           && (this.assertionKind.equals(that.getAssertionKind()))
           && (this.paramIndex == that.getParamIndex());
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= (functionName == null) ? 0 : this.functionName.hashCode();
    h *= 1000003;
    h ^= (closurePrimitive == null) ? 0 : this.closurePrimitive.hashCode();
    h *= 1000003;
    h ^= this.assertionKind.hashCode();
    h *= 1000003;
    h ^= this.paramIndex;
    return h;
  }

  static final class Builder extends CodingConvention.AssertionFunctionSpec.Builder {
    private String functionName;
    private ClosurePrimitive closurePrimitive;
    private CodingConvention.AssertionFunctionSpec.AssertionKind assertionKind;
    private Integer paramIndex;
    Builder() {
    }
    @Override
    public CodingConvention.AssertionFunctionSpec.Builder setFunctionName(@Nullable String functionName) {
      this.functionName = functionName;
      return this;
    }
    @Override
    CodingConvention.AssertionFunctionSpec.Builder setClosurePrimitive(@Nullable ClosurePrimitive closurePrimitive) {
      this.closurePrimitive = closurePrimitive;
      return this;
    }
    @Override
    CodingConvention.AssertionFunctionSpec.Builder setAssertionKind(CodingConvention.AssertionFunctionSpec.AssertionKind assertionKind) {
      if (assertionKind == null) {
        throw new NullPointerException("Null assertionKind");
      }
      this.assertionKind = assertionKind;
      return this;
    }
    @Override
    public CodingConvention.AssertionFunctionSpec.Builder setParamIndex(int paramIndex) {
      this.paramIndex = paramIndex;
      return this;
    }
    @Override
    CodingConvention.AssertionFunctionSpec autoBuild() {
      String missing = "";
      if (this.assertionKind == null) {
        missing += " assertionKind";
      }
      if (this.paramIndex == null) {
        missing += " paramIndex";
      }
      if (!missing.isEmpty()) {
        throw new IllegalStateException("Missing required properties:" + missing);
      }
      return new AutoValue_CodingConvention_AssertionFunctionSpec(
          this.functionName,
          this.closurePrimitive,
          this.assertionKind,
          this.paramIndex);
    }
  }

}
