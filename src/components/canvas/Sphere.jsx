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

const Sphere = ({imgUrl, objColor, func}) => {
  const [decal] = useTexture([imgUrl])
  return (
    <Float speed={1.74} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0, 0, 0.5]}/>
      <mesh 
        scale={2}
        onClick={() => {
          func()
        }}  
      >
        <sphereGeometry args={[1, 32, 32]}/>
        <meshStandardMaterial color='indigo'/>
        <Decal
          map={decal}
          scale={[1, 1, 1]}
          rotation={[2*Math.PI, 0, 6.25]}
          position={[0, 0, 1]}
        />
      </mesh>
    </Float>
  )
}

const SphereCanvas = ({icon,color,handleRedirect}) => {
  return (
    <Canvas
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}/>
        <Sphere imgUrl={icon} func={handleRedirect} objColor={color}/>
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

export default SphereCanvas