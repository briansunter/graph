
package com.google.javascript.refactoring;

import javax.annotation.Generated;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_CodeReplacement extends CodeReplacement {

  private final int startPosition;
  private final int length;
  private final String newContent;
  private final String sortKey;

  AutoValue_CodeReplacement(
      int startPosition,
      int length,
      String newContent,
      String sortKey) {
    this.startPosition = startPosition;
    this.length = length;
    if (newContent == null) {
      throw new NullPointerException("Null newContent");
    }
    this.newContent = newContent;
    if (sortKey == null) {
      throw new NullPointerException("Null sortKey");
    }
    this.sortKey = sortKey;
  }

  @Override
  public int getStartPosition() {
    return startPosition;
  }

  @Override
  public int getLength() {
    return length;
  }

  @Override
  public String getNewContent() {
    return newContent;
  }

  @Override
  public String getSortKey() {
    return sortKey;
  }

  @Override
  public String toString() {
    return "CodeReplacement{"
        + "startPosition=" + startPosition + ", "
        + "length=" + length + ", "
        + "newContent=" + newContent + ", "
        + "sortKey=" + sortKey
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof CodeReplacement) {
      CodeReplacement that = (CodeReplacement) o;
      return (this.startPosition == that.getStartPosition())
           && (this.length == that.getLength())
           && (this.newContent.equals(that.getNewContent()))
           && (this.sortKey.equals(that.getSortKey()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.startPosition;
    h *= 1000003;
    h ^= this.length;
    h *= 1000003;
    h ^= this.newContent.hashCode();
    h *= 1000003;
    h ^= this.sortKey.hashCode();
    return h;
  }

}
