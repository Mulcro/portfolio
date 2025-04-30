import React, {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture
} from '@react-three/drei'

import CanvasLoader from '../Loader'

const Ball = ({imgUrl}) => {
  const [decal] = useTexture([imgUrl])
  return (
    <Float speed={1.74} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0, 0, 0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]}/>
        <meshStandardMaterial color="#01B3CC" roughness={0.7} metalness={0.3} floatShading polygonOffset polygonOffsetFactor={-5} flatShading/>
        <Decal
          map={decal}
          scale={[0.6, 0.6, 0.6]}
          rotation={[2*Math.PI, 0, 6.25]}
          flatShading
          position={[0, 0, 1]}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) => {
  return (
    <Canvas
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}/>
        <Ball imgUrl={icon}/>
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

export default BallCanvas