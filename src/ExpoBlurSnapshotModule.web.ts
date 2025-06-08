import { registerWebModule, NativeModule } from 'expo';

import { ExpoBlurSnapshotModuleEvents } from './ExpoBlurSnapshot.types';

class ExpoBlurSnapshotModule extends NativeModule<ExpoBlurSnapshotModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoBlurSnapshotModule, 'ExpoBlurSnapshotModule');
