import React, { Suspense, useState } from 'react';
import Model from './Version1'
import "./App.css"
import { Canvas } from '@react-three/fiber'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
//import {OrbitControls,useGLTF} from '@react-three/drei'
import { OrbitControls} from '@react-three/drei';
import video from "./Videos/video1.mp4"
import Navbar from './navbar';
import Footer from "./footer";
import Cardview from "./cardview"
const App=()=> {
  const[color1,setcolor]=useState("#880808")
  return (
  <>
   <div className='Background mt-0'>
    <div className='row'>
      <div className="video-background col-sm-12">
        <video  className="video" loop autoPlay>
            <source src={video} type="video/mp4" />
         </video>
    </div>
    <div style={{marginTop:-1050}}>
      <Navbar/>
    </div>
    </div>
    
   <div className="animation">
    <div style={{height:600}}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight/>
          <spotLight intensity={0.9} 
                                     angle={0.1} 
                                     penumbra={1} 
                                     position={[10,15,10]}
                                     castShadow />
          <Model customcolor={{bodycolor:color1}}/>
          <OrbitControls enablePan={true}
                                         enableZoom={false}
                                         enableRotate={true}/>
        </Suspense>
      </Canvas>
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-sm-4'>
          <button className='colorbtn' style={{backgroundColor:"#880808"}} value={"#880808"} onClick={(e)=>setcolor(e.target.value)}/>
          <button className='colorbtn' style={{backgroundColor:"#00008B"}} value={"#00008B"} onClick={(e)=>setcolor(e.target.value)}/> 
          <button className='colorbtn' style={{backgroundColor:"white"}} value={"white"}onClick={(e)=>setcolor(e.target.value)}/> 
          <button className='colorbtn' style={{backgroundColor:"black"}} value={"black"}onClick={(e)=>setcolor(e.target.value)}/>  

        </div>
      </div>
   </div>
    
      <div className='animation1'>
        <Cardview/>
      </div>
      <Footer/>
    </div>
    
    
  </>
  );
};

export default App;