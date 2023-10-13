
package com.google.javascript.jscomp.modules;

import javax.annotation.Generated;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_ClosureRequireProcessor_Require extends ClosureRequireProcessor.Require {

  private final String localName;
  private final Import importRecord;
  private final Binding.CreatedBy createdBy;

  AutoValue_ClosureRequireProcessor_Require(
      String localName,
      Import importRecord,
      Binding.CreatedBy createdBy) {
    if (localName == null) {
      throw new NullPointerException("Null localName");
    }
    this.localName = localName;
    if (importRecord == null) {
      throw new NullPointerException("Null importRecord");
    }
    this.importRecord = importRecord;
    if (createdBy == null) {
      throw new NullPointerException("Null createdBy");
    }
    this.createdBy = createdBy;
  }

  @Override
  String localName() {
    return localName;
  }

  @Override
  Import importRecord() {
    return importRecord;
  }

  @Override
  Binding.CreatedBy createdBy() {
    return createdBy;
  }

  @Override
  public String toString() {
    return "Require{"
        + "localName=" + localName + ", "
        + "importRecord=" + importRecord + ", "
        + "createdBy=" + createdBy
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof ClosureRequireProcessor.Require) {
      ClosureRequireProcessor.Require that = (ClosureRequireProcessor.Require) o;
      return (this.localName.equals(that.localName()))
           && (this.importRecord.equals(that.importRecord()))
           && (this.createdBy.equals(that.createdBy()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.localName.hashCode();
    h *= 1000003;
    h ^= this.importRecord.hashCode();
    h *= 1000003;
    h ^= this.createdBy.hashCode();
    return h;
  }

}
