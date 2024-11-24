// Reexport the native module. On web, it will be resolved to NativeStartupTraceModule.web.ts
// and on native platforms to NativeStartupTraceModule.ts
export { default } from './NativeStartupTraceModule';
export * from  './NativeStartupTrace.types';
