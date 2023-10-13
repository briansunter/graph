
package com.google.javascript.jscomp;

import com.google.javascript.rhino.Node;
import java.util.Map;
import javax.annotation.Generated;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_Es6RewriteClass_ClassDeclarationMetadata extends Es6RewriteClass.ClassDeclarationMetadata {

  private final Es6RewriteClass.InsertionPoint insertionPoint;
  private final Node definePropertiesObjForPrototype;
  private final Node definePropertiesObjForClass;
  private final Map<String, Es6RewriteClass.ClassProperty> classMembersToDeclare;
  private final Node fullClassNameNode;
  private final Node classPrototypeNode;
  private final boolean anonymous;
  private final Node classNameNode;
  private final Node superClassNameNode;

  private AutoValue_Es6RewriteClass_ClassDeclarationMetadata(
      Es6RewriteClass.InsertionPoint insertionPoint,
      Node definePropertiesObjForPrototype,
      Node definePropertiesObjForClass,
      Map<String, Es6RewriteClass.ClassProperty> classMembersToDeclare,
      Node fullClassNameNode,
      Node classPrototypeNode,
      boolean anonymous,
      Node classNameNode,
      Node superClassNameNode) {
    this.insertionPoint = insertionPoint;
    this.definePropertiesObjForPrototype = definePropertiesObjForPrototype;
    this.definePropertiesObjForClass = definePropertiesObjForClass;
    this.classMembersToDeclare = classMembersToDeclare;
    this.fullClassNameNode = fullClassNameNode;
    this.classPrototypeNode = classPrototypeNode;
    this.anonymous = anonymous;
    this.classNameNode = classNameNode;
    this.superClassNameNode = superClassNameNode;
  }

  @Override
  Es6RewriteClass.InsertionPoint getInsertionPoint() {
    return insertionPoint;
  }

  @Override
  Node getDefinePropertiesObjForPrototype() {
    return definePropertiesObjForPrototype;
  }

  @Override
  Node getDefinePropertiesObjForClass() {
    return definePropertiesObjForClass;
  }

  @Override
  Map<String, Es6RewriteClass.ClassProperty> getClassMembersToDeclare() {
    return classMembersToDeclare;
  }

  @Override
  Node getFullClassNameNode() {
    return fullClassNameNode;
  }

  @Override
  Node getClassPrototypeNode() {
    return classPrototypeNode;
  }

  @Override
  boolean isAnonymous() {
    return anonymous;
  }

  @Override
  Node getClassNameNode() {
    return classNameNode;
  }

  @Override
  Node getSuperClassNameNode() {
    return superClassNameNode;
  }

  @Override
  public String toString() {
    return "ClassDeclarationMetadata{"
        + "insertionPoint=" + insertionPoint + ", "
        + "definePropertiesObjForPrototype=" + definePropertiesObjForPrototype + ", "
        + "definePropertiesObjForClass=" + definePropertiesObjForClass + ", "
        + "classMembersToDeclare=" + classMembersToDeclare + ", "
        + "fullClassNameNode=" + fullClassNameNode + ", "
        + "classPrototypeNode=" + classPrototypeNode + ", "
        + "anonymous=" + anonymous + ", "
        + "classNameNode=" + classNameNode + ", "
        + "superClassNameNode=" + superClassNameNode
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof Es6RewriteClass.ClassDeclarationMetadata) {
      Es6RewriteClass.ClassDeclarationMetadata that = (Es6RewriteClass.ClassDeclarationMetadata) o;
      return (this.insertionPoint.equals(that.getInsertionPoint()))
           && (this.definePropertiesObjForPrototype.equals(that.getDefinePropertiesObjForPrototype()))
           && (this.definePropertiesObjForClass.equals(that.getDefinePropertiesObjForClass()))
           && (this.classMembersToDeclare.equals(that.getClassMembersToDeclare()))
           && (this.fullClassNameNode.equals(that.getFullClassNameNode()))
           && (this.classPrototypeNode.equals(that.getClassPrototypeNode()))
           && (this.anonymous == that.isAnonymous())
           && (this.classNameNode.equals(that.getClassNameNode()))
           && (this.superClassNameNode.equals(that.getSuperClassNameNode()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.insertionPoint.hashCode();
    h *= 1000003;
    h ^= this.definePropertiesObjForPrototype.hashCode();
    h *= 1000003;
    h ^= this.definePropertiesObjForClass.hashCode();
    h *= 1000003;
    h ^= this.classMembersToDeclare.hashCode();
    h *= 1000003;
    h ^= this.fullClassNameNode.hashCode();
    h *= 1000003;
    h ^= this.classPrototypeNode.hashCode();
    h *= 1000003;
    h ^= this.anonymous ? 1231 : 1237;
    h *= 1000003;
    h ^= this.classNameNode.hashCode();
    h *= 1000003;
    h ^= this.superClassNameNode.hashCode();
    return h;
  }

  static final class Builder extends Es6RewriteClass.ClassDeclarationMetadata.Builder {
    private Es6RewriteClass.InsertionPoint insertionPoint;
    private Node definePropertiesObjForPrototype;
    private Node definePropertiesObjForClass;
    private Map<String, Es6RewriteClass.ClassProperty> classMembersToDeclare;
    private Node fullClassNameNode;
    private Node classPrototypeNode;
    private Boolean anonymous;
    private Node classNameNode;
    private Node superClassNameNode;
    Builder() {
    }
    @Override
    Es6RewriteClass.ClassDeclarationMetadata.Builder setInsertionPoint(Es6RewriteClass.InsertionPoint insertionPoint) {
      if (insertionPoint == null) {
        throw new NullPointerException("Null insertionPoint");
      }
      this.insertionPoint = insertionPoint;
      return this;
    }
    @Override
    Es6RewriteClass.ClassDeclarationMetadata.Builder setDefinePropertiesObjForPrototype(Node definePropertiesObjForPrototype) {
      if (definePropertiesObjForPrototype == null) {
        throw new NullPointerException("Null definePropertiesObjForPrototype");
      }
      this.definePropertiesObjForPrototype = definePropertiesObjForPrototype;
      return this;
    }
    @Override
    Es6RewriteClass.ClassDeclarationMetadata.Builder setDefinePropertiesObjForClass(Node definePropertiesObjForClass) {
      if (definePropertiesObjForClass == null) {
        throw new NullPointerException("Null definePropertiesObjForClass");
      }
      this.definePropertiesObjForClass = definePropertiesObjForClass;
      return this;
    }
    @Override
    Es6RewriteClass.ClassDeclarationMetadata.Builder setClassMembersToDeclare(Map<String, Es6RewriteClass.ClassProperty> classMembersToDeclare) {
      if (classMembersToDeclare == null) {
        throw new NullPointerException("Null classMembersToDeclare");
      }
      this.classMembersToDeclare = classMembersToDeclare;
      return this;
    }
    @Override
    Es6RewriteClass.ClassDeclarationMetadata.Builder setFullClassNameNode(Node fullClassNameNode) {
      if (fullClassNameNode == null) {
        throw new NullPointerException("Null fullClassNameNode");
      }
      this.fullClassNameNode = fullClassNameNode;
      return this;
    }
    @Override
    Node getFullClassNameNode() {
      if (fullClassNameNode == null) {
        throw new IllegalStateException("Property \"fullClassNameNode\" has not been set");
      }
      return fullClassNameNode;
    }
    @Override
    Es6RewriteClass.ClassDeclarationMetadata.Builder setClassPrototypeNode(Node classPrototypeNode) {
      if (classPrototypeNode == null) {
        throw new NullPointerException("Null classPrototypeNode");
      }
      this.classPrototypeNode = classPrototypeNode;
      return this;
    }
    @Override
    Es6RewriteClass.ClassDeclarationMetadata.Builder setAnonymous(boolean anonymous) {
      this.anonymous = anonymous;
      return this;
    }
    @Override
    Es6RewriteClass.ClassDeclarationMetadata.Builder setClassNameNode(Node classNameNode) {
      if (classNameNode == null) {
        throw new NullPointerException("Null classNameNode");
      }
      this.classNameNode = classNameNode;
      return this;
    }
    @Override
    Es6RewriteClass.ClassDeclarationMetadata.Builder setSuperClassNameNode(Node superClassNameNode) {
      if (superClassNameNode == null) {
        throw new NullPointerException("Null superClassNameNode");
      }
      this.superClassNameNode = superClassNameNode;
      return this;
    }
    @Override
    Es6RewriteClass.ClassDeclarationMetadata build() {
      String missing = "";
      if (this.insertionPoint == null) {
        missing += " insertionPoint";
      }
      if (this.definePropertiesObjForPrototype == null) {
        missing += " definePropertiesObjForPrototype";
      }
      if (this.definePropertiesObjForClass == null) {
        missing += " definePropertiesObjForClass";
      }
      if (this.classMembersToDeclare == null) {
        missing += " classMembersToDeclare";
      }
      if (this.fullClassNameNode == null) {
        missing += " fullClassNameNode";
      }
      if (this.classPrototypeNode == null) {
        missing += " classPrototypeNode";
      }
      if (this.anonymous == null) {
        missing += " anonymous";
      }
      if (this.classNameNode == null) {
        missing += " classNameNode";
      }
      if (this.superClassNameNode == null) {
        missing += " superClassNameNode";
      }
      if (!missing.isEmpty()) {
        throw new IllegalStateException("Missing required properties:" + missing);
      }
      return new AutoValue_Es6RewriteClass_ClassDeclarationMetadata(
          this.insertionPoint,
          this.definePropertiesObjForPrototype,
          this.definePropertiesObjForClass,
          this.classMembersToDeclare,
          this.fullClassNameNode,
          this.classPrototypeNode,
          this.anonymous,
          this.classNameNode,
          this.superClassNameNode);
    }
  }

}
