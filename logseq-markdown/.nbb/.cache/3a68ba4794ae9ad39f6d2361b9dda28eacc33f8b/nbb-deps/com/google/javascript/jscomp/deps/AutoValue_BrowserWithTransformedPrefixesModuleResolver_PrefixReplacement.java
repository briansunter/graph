
package com.google.javascript.jscomp.deps;

import javax.annotation.Generated;

@Generated("com.google.auto.value.processor.AutoValueProcessor")
 final class AutoValue_BrowserWithTransformedPrefixesModuleResolver_PrefixReplacement extends BrowserWithTransformedPrefixesModuleResolver.PrefixReplacement {

  private final String prefix;
  private final String replacement;

  AutoValue_BrowserWithTransformedPrefixesModuleResolver_PrefixReplacement(
      String prefix,
      String replacement) {
    if (prefix == null) {
      throw new NullPointerException("Null prefix");
    }
    this.prefix = prefix;
    if (replacement == null) {
      throw new NullPointerException("Null replacement");
    }
    this.replacement = replacement;
  }

  @Override
  String prefix() {
    return prefix;
  }

  @Override
  String replacement() {
    return replacement;
  }

  @Override
  public String toString() {
    return "PrefixReplacement{"
        + "prefix=" + prefix + ", "
        + "replacement=" + replacement
        + "}";
  }

  @Override
  public boolean equals(Object o) {
    if (o == this) {
      return true;
    }
    if (o instanceof BrowserWithTransformedPrefixesModuleResolver.PrefixReplacement) {
      BrowserWithTransformedPrefixesModuleResolver.PrefixReplacement that = (BrowserWithTransformedPrefixesModuleResolver.PrefixReplacement) o;
      return (this.prefix.equals(that.prefix()))
           && (this.replacement.equals(that.replacement()));
    }
    return false;
  }

  @Override
  public int hashCode() {
    int h = 1;
    h *= 1000003;
    h ^= this.prefix.hashCode();
    h *= 1000003;
    h ^= this.replacement.hashCode();
    return h;
  }

}
