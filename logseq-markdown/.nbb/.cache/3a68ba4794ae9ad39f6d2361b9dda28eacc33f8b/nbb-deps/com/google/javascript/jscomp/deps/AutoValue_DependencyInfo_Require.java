
package com.google.javascript.jscomp.deps;

import javax.annotation.Generated;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_DependencyInfo_Require extends DependencyInfo.Require {

  private final String symbol;
  private final String rawText;
  private final DependencyInfo.Require.Type type;

  private AutoValue_DependencyInfo_Require(
      String symbol,
      String rawText,
      DependencyInfo.Require.Type type) {
    this.symbol = symbol;
    this.rawText = rawText;
    this.type = type;
  }

  @Override
  public String getSymbol() {
    return symbol;
  }

  @Override
  public String getRawText() {
    return rawText;
  }

  @Override
  public DependencyInfo.Require.Type getType() {
    return type;
  }

  @Override
  public String toString() {
    return "Require{"
        + "symbol=" + symbol + ", "
        + "rawText=" + rawText + ", "
        + "type=" + type
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof DependencyInfo.Require) {
      DependencyInfo.Require that = (DependencyInfo.Require) o;
      return (this.symbol.equals(that.getSymbol()))
           && (this.rawText.equals(that.getRawText()))
           && (this.type.equals(that.getType()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.symbol.hashCode();
    h *= 1000003;
    h ^= this.rawText.hashCode();
    h *= 1000003;
    h ^= this.type.hashCode();
    return h;
  }

  @Override
  protected DependencyInfo.Require.Builder toBuilder() {
    return new Builder(this);
  }

  static final class Builder extends DependencyInfo.Require.Builder {
    private String symbol;
    private String rawText;
    private DependencyInfo.Require.Type type;
    Builder() {
    }
    private Builder(DependencyInfo.Require source) {
      this.symbol = source.getSymbol();
      this.rawText = source.getRawText();
      this.type = source.getType();
    }
    @Override
    public DependencyInfo.Require.Builder setSymbol(String symbol) {
      if (symbol == null) {
        throw new NullPointerException("Null symbol");
      }
      this.symbol = symbol;
      return this;
    }
    @Override
    public DependencyInfo.Require.Builder setRawText(String rawText) {
      if (rawText == null) {
        throw new NullPointerException("Null rawText");
      }
      this.rawText = rawText;
      return this;
    }
    @Override
    public DependencyInfo.Require.Builder setType(DependencyInfo.Require.Type type) {
      if (type == null) {
        throw new NullPointerException("Null type");
      }
      this.type = type;
      return this;
    }
    @Override
    public DependencyInfo.Require build() {
      String missing = "";
      if (this.symbol == null) {
        missing += " symbol";
      }
      if (this.rawText == null) {
        missing += " rawText";
      }
      if (this.type == null) {
        missing += " type";
      }
      if (!missing.isEmpty()) {
        throw new IllegalStateException("Missing required properties:" + missing);
      }
      return new AutoValue_DependencyInfo_Require(
          this.symbol,
          this.rawText,
          this.type);
    }
  }

}
