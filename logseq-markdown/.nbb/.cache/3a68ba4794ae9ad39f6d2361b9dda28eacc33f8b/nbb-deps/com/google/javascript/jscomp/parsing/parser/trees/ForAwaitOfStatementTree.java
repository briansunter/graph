/*
 * Copyright 2011 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.google.javascript.jscomp.parsing.parser.trees;

import com.google.javascript.jscomp.parsing.parser.util.SourceRange;

/**
 * Represents a for-await-of statement, which was added in ES2018
 */
public class ForAwaitOfStatementTree extends ParseTree {

  public final ParseTree initializer;
  public final ParseTree collection;
  public final ParseTree body;

  public ForAwaitOfStatementTree(
      SourceRange location, ParseTree initializer, ParseTree collection, ParseTree body) {
    super(ParseTreeType.FOR_AWAIT_OF_STATEMENT, location);
    this.initializer = initializer;
    this.collection = collection;
    this.body = body;
  }
}
