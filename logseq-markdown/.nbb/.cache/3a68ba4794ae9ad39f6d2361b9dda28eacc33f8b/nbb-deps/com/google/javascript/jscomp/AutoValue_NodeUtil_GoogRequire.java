
package com.google.javascript.jscomp;

import javax.annotation.Generated;
import javax.annotation.Nullable;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_NodeUtil_GoogRequire extends NodeUtil.GoogRequire {

  private final String namespace;
  private final String property;

  AutoValue_NodeUtil_GoogRequire(
      String namespace,
      @Nullable String property) {
    if (namespace == null) {
      throw new NullPointerException("Null namespace");
    }
    this.namespace = namespace;
    this.property = property;
  }

  @Override
  String namespace() {
    return namespace;
  }

  @Nullable
  @Override
  String property() {
    return property;
  }

  @Override
  public String toString() {
    return "GoogRequire{"
        + "namespace=" + namespace + ", "
        + "property=" + property
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof NodeUtil.GoogRequire) {
      NodeUtil.GoogRequire that = (NodeUtil.GoogRequire) o;
      return (this.namespace.equals(that.namespace()))
           && ((this.property == null) ? (that.property() == null) : this.property.equals(that.property()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.namespace.hashCode();
    h *= 1000003;
    h ^= (property == null) ? 0 : this.property.hashCode();
    return h;
  }

}
