import * as React from 'react';

import { ExpoBlurSnapshotViewProps } from './ExpoBlurSnapshot.types';

export default function ExpoBlurSnapshotView(props: ExpoBlurSnapshotViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
