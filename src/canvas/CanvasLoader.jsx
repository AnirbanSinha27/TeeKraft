import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <p
        style={{
          fontSize: 14,
          color: '#000',
          fontWeight: 800,
          marginTop: 350,
          marginLeft: window.innerWidth < 640 ? 180 : 900,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
