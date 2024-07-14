import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';

import Shirt from './Shirt';
import CameraRig from './CameraRig';
import Backdrop from './Backdrop';
import CanvasLoader from './CanvasLoader';

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <Suspense fallback={<CanvasLoader />}>
        <CameraRig>
          <Backdrop />
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Suspense>
    </Canvas>
  );
};

export default CanvasModel;
