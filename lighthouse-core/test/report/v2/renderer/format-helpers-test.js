/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

const assert = require('assert');
const Util2X = require('../../../../report/v2/renderer/util.js');

/* eslint-env mocha */

describe('util helpers', () => {
  it('formats a number', () => {
    assert.strictEqual(Util2X.formatNumber(10), '10');
    assert.strictEqual(Util2X.formatNumber(100.01), '100');
    assert.strictEqual(Util2X.formatNumber(13000.456), '13,000.5');
  });

  it('formats a date', () => {
    const timestamp = Util2X.formatDateTime('2017-04-28T23:07:51.189Z');
    assert.ok(
      timestamp.includes('Apr 27, 2017') ||
      timestamp.includes('Apr 28, 2017') ||
      timestamp.includes('Apr 29, 2017')
    );
  });

  it('calculates a score ratings', () => {
    assert.equal(Util2X.calculateRating(0), 'fail');
    assert.equal(Util2X.calculateRating(10), 'fail');
    assert.equal(Util2X.calculateRating(45), 'average');
    assert.equal(Util2X.calculateRating(55), 'average');
    assert.equal(Util2X.calculateRating(75), 'pass');
    assert.equal(Util2X.calculateRating(80), 'pass');
    assert.equal(Util2X.calculateRating(100), 'pass');
  });
});