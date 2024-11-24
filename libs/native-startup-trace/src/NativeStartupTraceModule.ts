import {requireNativeModule} from 'expo';
import {NativeStartupTraceModule} from "./NativeStartupTrace.types";

// This call loads the native module object from the JSI.
export default requireNativeModule<NativeStartupTraceModule>('NativeStartupTrace');
