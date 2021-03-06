/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
'use strict';

const runJest = require('../runJest');

describe('Fake promises', () => {
  it('should be possible to resolve with fake timers using immediates', () => {
    const result = runJest('fake-promises/immediate');
    expect(result.status).toBe(0);
  });

  it('should be possible to resolve with fake timers using asap', () => {
    const result = runJest('fake-promises/asap');
    expect(result.status).toBe(0);
  });
});
