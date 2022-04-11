global.setTimeout = function (callback, delay) {
  const delayedEvent = script.createEvent('DelayedCallbackEvent')
  delayedEvent.bind(callback)
  delayedEvent.reset(delay / 1000)
}
