import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoBlurSnapshotViewProps } from './ExpoBlurSnapshot.types';

const NativeView: React.ComponentType<ExpoBlurSnapshotViewProps> =
  requireNativeView('ExpoBlurSnapshot');

export default function ExpoBlurSnapshotView(props: ExpoBlurSnapshotViewProps) {
  return <NativeView {...props} />;
}
