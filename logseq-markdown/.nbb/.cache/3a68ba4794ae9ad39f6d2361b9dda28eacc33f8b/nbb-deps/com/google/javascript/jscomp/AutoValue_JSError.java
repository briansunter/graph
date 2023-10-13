
package com.google.javascript.jscomp;

import com.google.javascript.rhino.Node;
import javax.annotation.Generated;
import javax.annotation.Nullable;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_JSError extends JSError {

  private final DiagnosticType type;
  private final String description;
  private final String sourceName;
  private final int lineno;
  private final int charno;
  private final Node node;
  private final CheckLevel defaultLevel;

  AutoValue_JSError(
      DiagnosticType type,
      String description,
      @Nullable String sourceName,
      int lineno,
      int charno,
      @Nullable Node node,
      CheckLevel defaultLevel) {
    if (type == null) {
      throw new NullPointerException("Null type");
    }
    this.type = type;
    if (description == null) {
      throw new NullPointerException("Null description");
    }
    this.description = description;
    this.sourceName = sourceName;
    this.lineno = lineno;
    this.charno = charno;
    this.node = node;
    if (defaultLevel == null) {
      throw new NullPointerException("Null defaultLevel");
    }
    this.defaultLevel = defaultLevel;
  }

  @Override
  public DiagnosticType getType() {
    return type;
  }

  @Override
  public String getDescription() {
    return description;
  }

  @Nullable
  @Override
  public String getSourceName() {
    return sourceName;
  }

  @Override
  public int getLineno() {
    return lineno;
  }

  @Override
  public int getCharno() {
    return charno;
  }

  @Nullable
  @Override
  public Node getNode() {
    return node;
  }

  @Override
  public CheckLevel getDefaultLevel() {
    return defaultLevel;
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof JSError) {
      JSError that = (JSError) o;
      return (this.type.equals(that.getType()))
           && (this.description.equals(that.getDescription()))
           && ((this.sourceName == null) ? (that.getSourceName() == null) : this.sourceName.equals(that.getSourceName()))
           && (this.lineno == that.getLineno())
           && (this.charno == that.getCharno())
           && ((this.node == null) ? (that.getNode() == null) : this.node.equals(that.getNode()))
           && (this.defaultLevel.equals(that.getDefaultLevel()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.type.hashCode();
    h *= 1000003;
    h ^= this.description.hashCode();
    h *= 1000003;
    h ^= (sourceName == null) ? 0 : this.sourceName.hashCode();
    h *= 1000003;
    h ^= this.lineno;
    h *= 1000003;
    h ^= this.charno;
    h *= 1000003;
    h ^= (node == null) ? 0 : this.node.hashCode();
    h *= 1000003;
    h ^= this.defaultLevel.hashCode();
    return h;
  }

}
