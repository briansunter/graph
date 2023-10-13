/*
 * Copyright 2010 The Closure Compiler Authors.
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

package com.google.javascript.jscomp;

import static com.google.common.base.Preconditions.checkArgument;

import com.google.common.base.Function;
import com.google.javascript.jscomp.graph.LatticeElement;
import java.util.Iterator;
import java.util.List;

/**
 * Defines a way join a list of LatticeElements.
 */
interface JoinOp<L extends LatticeElement> extends Function<List<L>, L> {

  /**
   * An implementation of {@code JoinOp} that makes it easy to join to
   * lattice elements at a time.
   */
  abstract static class BinaryJoinOp<L extends LatticeElement>
      implements JoinOp<L> {
    @Override
    public L apply(List<L> values) {
      checkArgument(!values.isEmpty());
      int size = values.size();
      if (size == 1) {
        return values.get(0);
      } else if (size == 2) {
        return apply(values.get(0), values.get(1));
      } else if (size <= 16) {
        // Do a Tree merge which request the least number of merges
        int mid = computeMidPoint(size);
        return apply(
            apply(values.subList(0, mid)),
            apply(values.subList(mid, size)));
      } else {
        // If the merge set is getting out of hand, avoid tree merges as it is
        // more memory intense. Instead, stick with linear merges that requires
        // more merges but less memory. This avoids GC trashing.
        Iterator<L> iter = values.iterator();
        L result = iter.next(); // Never null, we have 16+ values.
        while (iter.hasNext()) {
          result = apply(result, iter.next());
        }
        return result;
      }
    }

    /**
     * Creates a new lattice that will be the join of two input lattices.
     *
     * @return The join of {@code latticeA} and {@code latticeB}.
     */
    abstract L apply(L latticeA, L latticeB);

    /**
     * Finds the midpoint of a list. The function will favor two lists of
     * even length instead of two lists of the same odd length. The list
     * must be at least length two.
     *
     * @param size Size of the list.
     */
    static int computeMidPoint(int size) {
      int midpoint = size >>> 1;
      if (size > 4) {
        /* Any list longer than 4 should prefer an even split point
         * over the true midpoint, so that [0,6] splits at 2, not 3. */
        midpoint &= -2; // (0xfffffffe) clears low bit so midpoint is even
      }
      return midpoint;
    }
  }
}
