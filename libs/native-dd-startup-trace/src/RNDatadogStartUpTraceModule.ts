/* eslint-disable import/no-default-export */
import { requireNativeModule } from 'expo-modules-core'

import type { RNDatadogStartUpTraceModuleInterface } from './RNDatadogStartUpTraceModule.types'

// It loads the native module object from the JSI or falls back to
// the bridge module (from NativeModulesProxy) if the remote debugger is on.
export default requireNativeModule<RNDatadogStartUpTraceModuleInterface>(
  'RNDatadogStartUpTraceModule'
)
