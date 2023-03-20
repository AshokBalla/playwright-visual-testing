function buildNetworkSnapshot(entries = []) {
  return { total: entries.length, entries };
}

module.exports = { buildNetworkSnapshot };
