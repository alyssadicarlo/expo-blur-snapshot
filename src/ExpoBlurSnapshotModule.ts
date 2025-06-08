import { NativeModule, requireNativeModule } from 'expo';

declare class ExpoBlurSnapshotModule extends NativeModule {
  getTheme(): string;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoBlurSnapshotModule>('ExpoBlurSnapshot');
