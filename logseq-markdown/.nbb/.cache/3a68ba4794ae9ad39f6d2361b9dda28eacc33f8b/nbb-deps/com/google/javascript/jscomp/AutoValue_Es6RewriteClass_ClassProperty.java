
package com.google.javascript.jscomp;

import com.google.javascript.rhino.JSDocInfo;
import javax.annotation.Generated;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_Es6RewriteClass_ClassProperty extends Es6RewriteClass.ClassProperty {

  private final String propertyKey;
  private final Es6RewriteClass.ClassProperty.PropertyKind kind;
  private final JSDocInfo jsDocInfo;

  private AutoValue_Es6RewriteClass_ClassProperty(
      String propertyKey,
      Es6RewriteClass.ClassProperty.PropertyKind kind,
      JSDocInfo jsDocInfo) {
    this.propertyKey = propertyKey;
    this.kind = kind;
    this.jsDocInfo = jsDocInfo;
  }

  @Override
  String propertyKey() {
    return propertyKey;
  }

  @Override
  Es6RewriteClass.ClassProperty.PropertyKind kind() {
    return kind;
  }

  @Override
  JSDocInfo jsDocInfo() {
    return jsDocInfo;
  }

  @Override
  public String toString() {
    return "ClassProperty{"
        + "propertyKey=" + propertyKey + ", "
        + "kind=" + kind + ", "
        + "jsDocInfo=" + jsDocInfo
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof Es6RewriteClass.ClassProperty) {
      Es6RewriteClass.ClassProperty that = (Es6RewriteClass.ClassProperty) o;
      return (this.propertyKey.equals(that.propertyKey()))
           && (this.kind.equals(that.kind()))
           && (this.jsDocInfo.equals(that.jsDocInfo()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.propertyKey.hashCode();
    h *= 1000003;
    h ^= this.kind.hashCode();
    h *= 1000003;
    h ^= this.jsDocInfo.hashCode();
    return h;
  }

  static final class Builder extends Es6RewriteClass.ClassProperty.Builder {
    private String propertyKey;
    private Es6RewriteClass.ClassProperty.PropertyKind kind;
    private JSDocInfo jsDocInfo;
    Builder() {
    }
    @Override
    Es6RewriteClass.ClassProperty.Builder propertyKey(String propertyKey) {
      if (propertyKey == null) {
        throw new NullPointerException("Null propertyKey");
      }
      this.propertyKey = propertyKey;
      return this;
    }
    @Override
    Es6RewriteClass.ClassProperty.Builder kind(Es6RewriteClass.ClassProperty.PropertyKind kind) {
      if (kind == null) {
        throw new NullPointerException("Null kind");
      }
      this.kind = kind;
      return this;
    }
    @Override
    Es6RewriteClass.ClassProperty.Builder jsDocInfo(JSDocInfo jsDocInfo) {
      if (jsDocInfo == null) {
        throw new NullPointerException("Null jsDocInfo");
      }
      this.jsDocInfo = jsDocInfo;
      return this;
    }
    @Override
    Es6RewriteClass.ClassProperty build() {
      String missing = "";
      if (this.propertyKey == null) {
        missing += " propertyKey";
      }
      if (this.kind == null) {
        missing += " kind";
      }
      if (this.jsDocInfo == null) {
        missing += " jsDocInfo";
      }
      if (!missing.isEmpty()) {
        throw new IllegalStateException("Missing required properties:" + missing);
      }
      return new AutoValue_Es6RewriteClass_ClassProperty(
          this.propertyKey,
          this.kind,
          this.jsDocInfo);
    }
  }

}
