function shouldRetry(status, retries = 1) {
  return status === 'flaky' && retries > 0;
}

module.exports = { shouldRetry };
