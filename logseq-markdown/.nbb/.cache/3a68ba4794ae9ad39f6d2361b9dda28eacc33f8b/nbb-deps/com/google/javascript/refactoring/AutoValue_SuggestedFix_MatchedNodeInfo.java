
package com.google.javascript.refactoring;

import javax.annotation.Generated;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_SuggestedFix_MatchedNodeInfo extends SuggestedFix.MatchedNodeInfo {

  private final String sourceFilename;
  private final int lineno;
  private final int charno;
  private final boolean inClosurizedFile;

  AutoValue_SuggestedFix_MatchedNodeInfo(
      String sourceFilename,
      int lineno,
      int charno,
      boolean inClosurizedFile) {
    if (sourceFilename == null) {
      throw new NullPointerException("Null sourceFilename");
    }
    this.sourceFilename = sourceFilename;
    this.lineno = lineno;
    this.charno = charno;
    this.inClosurizedFile = inClosurizedFile;
  }

  @Override
  public String getSourceFilename() {
    return sourceFilename;
  }

  @Override
  public int getLineno() {
    return lineno;
  }

  @Override
  public int getCharno() {
    return charno;
  }

  @Override
  public boolean isInClosurizedFile() {
    return inClosurizedFile;
  }

  @Override
  public String toString() {
    return "MatchedNodeInfo{"
        + "sourceFilename=" + sourceFilename + ", "
        + "lineno=" + lineno + ", "
        + "charno=" + charno + ", "
        + "inClosurizedFile=" + inClosurizedFile
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof SuggestedFix.MatchedNodeInfo) {
      SuggestedFix.MatchedNodeInfo that = (SuggestedFix.MatchedNodeInfo) o;
      return (this.sourceFilename.equals(that.getSourceFilename()))
           && (this.lineno == that.getLineno())
           && (this.charno == that.getCharno())
           && (this.inClosurizedFile == that.isInClosurizedFile());
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.sourceFilename.hashCode();
    h *= 1000003;
    h ^= this.lineno;
    h *= 1000003;
    h ^= this.charno;
    h *= 1000003;
    h ^= this.inClosurizedFile ? 1231 : 1237;
    return h;
  }

}
