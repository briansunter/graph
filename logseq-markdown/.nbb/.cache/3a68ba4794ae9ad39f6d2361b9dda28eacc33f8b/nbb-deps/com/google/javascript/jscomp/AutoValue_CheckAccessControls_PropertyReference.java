
package com.google.javascript.jscomp;

import com.google.javascript.rhino.Node;
import com.google.javascript.rhino.jstype.ObjectType;
import java.util.function.Supplier;
import javax.annotation.Generated;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_CheckAccessControls_PropertyReference extends CheckAccessControls.PropertyReference {

  private final Node sourceNode;
  private final String name;
  private final ObjectType receiverType;
  private final boolean mutation;
  private final boolean declaration;
  private final boolean override;
  private final Supplier<String> readableTypeName;

  private AutoValue_CheckAccessControls_PropertyReference(
      Node sourceNode,
      String name,
      ObjectType receiverType,
      boolean mutation,
      boolean declaration,
      boolean override,
      Supplier<String> readableTypeName) {
    this.sourceNode = sourceNode;
    this.name = name;
    this.receiverType = receiverType;
    this.mutation = mutation;
    this.declaration = declaration;
    this.override = override;
    this.readableTypeName = readableTypeName;
  }

  @Override
  public Node getSourceNode() {
    return sourceNode;
  }

  @Override
  public String getName() {
    return name;
  }

  @Override
  public ObjectType getReceiverType() {
    return receiverType;
  }

  @Override
  public boolean isMutation() {
    return mutation;
  }

  @Override
  public boolean isDeclaration() {
    return declaration;
  }

  @Override
  public boolean isOverride() {
    return override;
  }

  @Override
  public Supplier<String> getReadableTypeName() {
    return readableTypeName;
  }

  @Override
  public String toString() {
    return "PropertyReference{"
        + "sourceNode=" + sourceNode + ", "
        + "name=" + name + ", "
        + "receiverType=" + receiverType + ", "
        + "mutation=" + mutation + ", "
        + "declaration=" + declaration + ", "
        + "override=" + override + ", "
        + "readableTypeName=" + readableTypeName
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof CheckAccessControls.PropertyReference) {
      CheckAccessControls.PropertyReference that = (CheckAccessControls.PropertyReference) o;
      return (this.sourceNode.equals(that.getSourceNode()))
           && (this.name.equals(that.getName()))
           && (this.receiverType.equals(that.getReceiverType()))
           && (this.mutation == that.isMutation())
           && (this.declaration == that.isDeclaration())
           && (this.override == that.isOverride())
           && (this.readableTypeName.equals(that.getReadableTypeName()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.sourceNode.hashCode();
    h *= 1000003;
    h ^= this.name.hashCode();
    h *= 1000003;
    h ^= this.receiverType.hashCode();
    h *= 1000003;
    h ^= this.mutation ? 1231 : 1237;
    h *= 1000003;
    h ^= this.declaration ? 1231 : 1237;
    h *= 1000003;
    h ^= this.override ? 1231 : 1237;
    h *= 1000003;
    h ^= this.readableTypeName.hashCode();
    return h;
  }

  static final class Builder implements CheckAccessControls.PropertyReference.Builder {
    private Node sourceNode;
    private String name;
    private ObjectType receiverType;
    private Boolean mutation;
    private Boolean declaration;
    private Boolean override;
    private Supplier<String> readableTypeName;
    Builder() {
    }
    @Override
    public CheckAccessControls.PropertyReference.Builder setSourceNode(Node sourceNode) {
      if (sourceNode == null) {
        throw new NullPointerException("Null sourceNode");
      }
      this.sourceNode = sourceNode;
      return this;
    }
    @Override
    public CheckAccessControls.PropertyReference.Builder setName(String name) {
      if (name == null) {
        throw new NullPointerException("Null name");
      }
      this.name = name;
      return this;
    }
    @Override
    public CheckAccessControls.PropertyReference.Builder setReceiverType(ObjectType receiverType) {
      if (receiverType == null) {
        throw new NullPointerException("Null receiverType");
      }
      this.receiverType = receiverType;
      return this;
    }
    @Override
    public CheckAccessControls.PropertyReference.Builder setMutation(boolean mutation) {
      this.mutation = mutation;
      return this;
    }
    @Override
    public CheckAccessControls.PropertyReference.Builder setDeclaration(boolean declaration) {
      this.declaration = declaration;
      return this;
    }
    @Override
    public CheckAccessControls.PropertyReference.Builder setOverride(boolean override) {
      this.override = override;
      return this;
    }
    @Override
    public CheckAccessControls.PropertyReference.Builder setReadableTypeName(Supplier<String> readableTypeName) {
      if (readableTypeName == null) {
        throw new NullPointerException("Null readableTypeName");
      }
      this.readableTypeName = readableTypeName;
      return this;
    }
    @Override
    public CheckAccessControls.PropertyReference build() {
      String missing = "";
      if (this.sourceNode == null) {
        missing += " sourceNode";
      }
      if (this.name == null) {
        missing += " name";
      }
      if (this.receiverType == null) {
        missing += " receiverType";
      }
      if (this.mutation == null) {
        missing += " mutation";
      }
      if (this.declaration == null) {
        missing += " declaration";
      }
      if (this.override == null) {
        missing += " override";
      }
      if (this.readableTypeName == null) {
        missing += " readableTypeName";
      }
      if (!missing.isEmpty()) {
        throw new IllegalStateException("Missing required properties:" + missing);
      }
      return new AutoValue_CheckAccessControls_PropertyReference(
          this.sourceNode,
          this.name,
          this.receiverType,
          this.mutation,
          this.declaration,
          this.override,
          this.readableTypeName);
    }
  }

}
