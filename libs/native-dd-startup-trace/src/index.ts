import RNDatadogStartUpTraceModule from './RNDatadogStartUpTraceModule'

const onAppLoaded = () => RNDatadogStartUpTraceModule.onAppLoaded()

export * from './RNDatadogStartUpTraceModule.types'
export { onAppLoaded }
