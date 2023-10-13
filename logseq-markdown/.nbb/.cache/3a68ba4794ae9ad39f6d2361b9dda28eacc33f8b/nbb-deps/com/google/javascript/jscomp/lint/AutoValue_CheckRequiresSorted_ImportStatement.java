
package com.google.javascript.jscomp.lint;

import com.google.common.collect.ImmutableList;
import com.google.javascript.rhino.Node;
import javax.annotation.Generated;
import javax.annotation.Nullable;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_CheckRequiresSorted_ImportStatement extends CheckRequiresSorted.ImportStatement {

  private final ImmutableList<Node> nodes;
  private final CheckRequiresSorted.ImportPrimitive primitive;
  private final String namespace;
  private final String alias;
  private final ImmutableList<CheckRequiresSorted.DestructuringBinding> destructures;

  AutoValue_CheckRequiresSorted_ImportStatement(
      ImmutableList<Node> nodes,
      CheckRequiresSorted.ImportPrimitive primitive,
      String namespace,
      @Nullable String alias,
      @Nullable ImmutableList<CheckRequiresSorted.DestructuringBinding> destructures) {
    if (nodes == null) {
      throw new NullPointerException("Null nodes");
    }
    this.nodes = nodes;
    if (primitive == null) {
      throw new NullPointerException("Null primitive");
    }
    this.primitive = primitive;
    if (namespace == null) {
      throw new NullPointerException("Null namespace");
    }
    this.namespace = namespace;
    this.alias = alias;
    this.destructures = destructures;
  }

  @Override
  ImmutableList<Node> nodes() {
    return nodes;
  }

  @Override
  CheckRequiresSorted.ImportPrimitive primitive() {
    return primitive;
  }

  @Override
  String namespace() {
    return namespace;
  }

  @Nullable
  @Override
  String alias() {
    return alias;
  }

  @Nullable
  @Override
  ImmutableList<CheckRequiresSorted.DestructuringBinding> destructures() {
    return destructures;
  }

  @Override
  public String toString() {
    return "ImportStatement{"
        + "nodes=" + nodes + ", "
        + "primitive=" + primitive + ", "
        + "namespace=" + namespace + ", "
        + "alias=" + alias + ", "
        + "destructures=" + destructures
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof CheckRequiresSorted.ImportStatement) {
      CheckRequiresSorted.ImportStatement that = (CheckRequiresSorted.ImportStatement) o;
      return (this.nodes.equals(that.nodes()))
           && (this.primitive.equals(that.primitive()))
           && (this.namespace.equals(that.namespace()))
           && ((this.alias == null) ? (that.alias() == null) : this.alias.equals(that.alias()))
           && ((this.destructures == null) ? (that.destructures() == null) : this.destructures.equals(that.destructures()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.nodes.hashCode();
    h *= 1000003;
    h ^= this.primitive.hashCode();
    h *= 1000003;
    h ^= this.namespace.hashCode();
    h *= 1000003;
    h ^= (alias == null) ? 0 : this.alias.hashCode();
    h *= 1000003;
    h ^= (destructures == null) ? 0 : this.destructures.hashCode();
    return h;
  }

}
