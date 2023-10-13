
package com.google.javascript.jscomp;

import com.google.javascript.rhino.Node;
import com.google.javascript.rhino.jstype.JSType;
import javax.annotation.Generated;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_TypeMismatch extends TypeMismatch {

  private final JSType found;
  private final JSType required;
  private final Node location;

  AutoValue_TypeMismatch(
      JSType found,
      JSType required,
      Node location) {
    if (found == null) {
      throw new NullPointerException("Null found");
    }
    this.found = found;
    if (required == null) {
      throw new NullPointerException("Null required");
    }
    this.required = required;
    if (location == null) {
      throw new NullPointerException("Null location");
    }
    this.location = location;
  }

  @Override
  public JSType getFound() {
    return found;
  }

  @Override
  public JSType getRequired() {
    return required;
  }

  @Override
  Node getLocation() {
    return location;
  }

  @Override
  public String toString() {
    return "TypeMismatch{"
        + "found=" + found + ", "
        + "required=" + required + ", "
        + "location=" + location
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof TypeMismatch) {
      TypeMismatch that = (TypeMismatch) o;
      return (this.found.equals(that.getFound()))
           && (this.required.equals(that.getRequired()))
           && (this.location.equals(that.getLocation()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.found.hashCode();
    h *= 1000003;
    h ^= this.required.hashCode();
    h *= 1000003;
    h ^= this.location.hashCode();
    return h;
  }

}
