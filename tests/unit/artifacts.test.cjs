const test = require('node:test');
const assert = require('node:assert/strict');


test('artifact path prefixes kind', () => {
  const { artifactPath } = require('../../utils/artifacts');
  assert.equal(artifactPath('videos', 'login.mp4'), 'videos/login.mp4');
});

test('network snapshot tracks entry count', () => {
  const { buildNetworkSnapshot } = require('../../utils/networkMonitor');
  assert.equal(buildNetworkSnapshot([{ url: '/health' }]).total, 1);
});
