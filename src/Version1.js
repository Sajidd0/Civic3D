/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/version1.gltf')
  return (
    <group {...props} dispose={null} scale={2} >
      <group position={[4.08, 5.9, -1.01]} rotation={[1.89, 0.88, -2.05]}>
        <pointLight intensity={2} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[1.2, 0.3, 0.04]} rotation={[-0.72, 0.23, -1.82]} scale={0.09}>
        <spotLight intensity={2} angle={Math.PI / 2} penumbra={0.64} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[-1.24, 0.3, -0.04]} rotation={[0.25, -0.06, 1.62]} scale={0.09}>
        <spotLight intensity={2} angle={1.39} penumbra={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group position={[0, 0.08, 1.41]}>
        <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.003']} material-color={props.customcolor.bodycolor}/>
        <mesh geometry={nodes.Plane_2.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Plane_3.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Plane_4.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Plane_5.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Plane_6.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Plane_7.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Plane_8.geometry} material={materials['Material.015']} />
      </group>
      <mesh geometry={nodes.Plane004.geometry} material={materials['Material.010']} position={[0, 0.08, 1.41]} />
      <mesh geometry={nodes.Plane005.geometry} material={materials['Material.010']} position={[0, 0.08, 1.41]} />
      <mesh geometry={nodes.Plane006.geometry} material={materials['Material.010']} position={[0, 0.08, 1.41]} />
      <mesh geometry={nodes.Plane007.geometry} material={materials['Material.010']} position={[0, 0.08, 1.41]} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.003']} position={[0, -0.02, 0]} scale={[1.84, -0.05, 1.84]} material-color={props.customcolor.bodycolor} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.001']} position={[0, 0.06, 0]} scale={[1.6, -0.05, 1.6]} />
      <mesh geometry={nodes.stage_light.geometry} material={materials.stage_light_tx} position={[1.38, 0.12, 0.23]} rotation={[Math.PI / 2, 0, 1.48]} scale={0.03} />
      <mesh geometry={nodes.stage_light001.geometry} material={materials['stage_light_tx.001']} position={[-1.39, 0.12, -0.24]} rotation={[Math.PI / 2, 0, -1.54]} scale={0.03} />
    </group>
  )
}

useGLTF.preload('/version1.gltf')
