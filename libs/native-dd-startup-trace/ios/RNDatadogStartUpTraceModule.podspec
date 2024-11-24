Pod::Spec.new do |s|
  s.name           = 'RNDatadogStartUpTraceModule'
  s.version        = '0.1.0'
  s.summary        = 'Trace startup time of the app with Datadog'
  s.author         = 'PHDT'
  s.homepage       = 'https://docs.expo.dev/modules/'
  s.platforms      = { :ios => '13.4', :tvos => '13.4' }
  s.source         = { git: '' }
  s.static_framework = true

  s.dependency 'ExpoModulesCore'
  # s.dependency 'DatadogSDKReactNative'

  # Swift/Objective-C compatibility
  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
    'SWIFT_COMPILATION_MODE' => 'wholemodule'
  }

  s.source_files = "**/*.{h,m,mm,swift,hpp,cpp}"
end
