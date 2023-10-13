
package com.google.javascript.rhino.jstype;

import com.google.javascript.rhino.Node;
import javax.annotation.Generated;
import javax.annotation.Nullable;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_JSTypeRegistry_ModuleSlot extends JSTypeRegistry.ModuleSlot {

  private final boolean isLegacyModule;
  private final Node definitionNode;
  private final JSType type;

  AutoValue_JSTypeRegistry_ModuleSlot(
      boolean isLegacyModule,
      @Nullable Node definitionNode,
      @Nullable JSType type) {
    this.isLegacyModule = isLegacyModule;
    this.definitionNode = definitionNode;
    this.type = type;
  }

  @Override
  boolean isLegacyModule() {
    return isLegacyModule;
  }

  @Nullable
  @Override
  Node definitionNode() {
    return definitionNode;
  }

  @Nullable
  @Override
  JSType type() {
    return type;
  }

  @Override
  public String toString() {
    return "ModuleSlot{"
        + "isLegacyModule=" + isLegacyModule + ", "
        + "definitionNode=" + definitionNode + ", "
        + "type=" + type
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof JSTypeRegistry.ModuleSlot) {
      JSTypeRegistry.ModuleSlot that = (JSTypeRegistry.ModuleSlot) o;
      return (this.isLegacyModule == that.isLegacyModule())
           && ((this.definitionNode == null) ? (that.definitionNode() == null) : this.definitionNode.equals(that.definitionNode()))
           && ((this.type == null) ? (that.type() == null) : this.type.equals(that.type()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.isLegacyModule ? 1231 : 1237;
    h *= 1000003;
    h ^= (definitionNode == null) ? 0 : this.definitionNode.hashCode();
    h *= 1000003;
    h ^= (type == null) ? 0 : this.type.hashCode();
    return h;
  }

}
