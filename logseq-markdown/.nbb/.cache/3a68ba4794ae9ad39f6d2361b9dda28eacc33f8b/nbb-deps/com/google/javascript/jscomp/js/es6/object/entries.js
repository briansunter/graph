/*
 * Copyright 2017 The Closure Compiler Authors.
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

'require util/owns';
'require util/polyfill';

$jscomp.polyfill('Object.entries', function(orig) {
  if (orig) return orig;

  /**
   * Returns an array of [key, value] arrays, one for each entry
   * in the given object.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
   *
   * @param {!Object<KEY, VALUE>} obj
   * @return {!Array<!Array<KEY|VALUE>>}
   * @template KEY, VALUE
   */
  var entries = function(obj) {
    var result = [];
    for (var key in obj) {
      if ($jscomp.owns(obj, key)) {
        result.push([key, obj[key]]);
      }
    }
    return result;
  };

  return entries;
}, 'es8', 'es3');
