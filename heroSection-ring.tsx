import { ArrowRight } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, Sparkles, useFBX } from "@react-three/drei";
import { useRef, Suspense, useEffect } from "react";
import * as THREE from "three";

// Import the FBX model
const diamondRing3dModel = "/models/diamond-ring.fbx";

// Gold material for ring band
const goldMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#ffdb63'),  // gold color
  metalness: 1,
  roughness: 0.15,
  envMapIntensity: 1.5,
});

// Diamond material - visible with sparkle and refraction
const diamondBaseMaterial = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color('#a2d2ff'), // light blue tint for diamond
  metalness: 0.1,
  roughness: 0.05,
  transmission: 0.6,
  thickness: 2.5,
  ior: 2.417,
  clearcoat: 1,
  clearcoatRoughness: 0,
  reflectivity: 2,
  envMapIntensity: 8,
  dispersion: 1.5,
});

const JewelryPlatform3D = () => {
  const groupRef = useRef<THREE.Group>(null);
  const fbx = useFBX(diamondRing3dModel);

  // Apply materials to the model
  useEffect(() => {
    fbx.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const name = child.name.toLowerCase();
        
        // Apply diamond material to gem/stone parts
        if (name.includes('diamond') || name.includes('gem') || name.includes('stone') || name.includes('brillant')) {
          child.material = diamondBaseMaterial;
        }
        // Apply gold to everything else (ring band, settings, etc.)
        else {
          child.material = goldMaterial;
        }
        
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [fbx]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <Float rotationIntensity={0.1} floatIntensity={0.3} speed={1}>
      <group ref={groupRef} rotation={[0, 0, 0]}>
        <primitive object={fbx} scale={0.12} rotation={[-Math.PI / 2, 0, 0]} />
      </group>

      {/* Diamond sparkles - white and light blue */}
      <Sparkles count={50} scale={4} size={2} speed={0.3} opacity={0.6} color="#ffffff" />
      <Sparkles count={40} scale={3} size={1.2} speed={0.2} opacity={0.4} color="#b3d9ff" />
    </Float>
  );
};

// Preload the model for better performance
useFBX.preload(diamondRing3dModel);

const HeroSection = () => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Premium Background Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-[10%] w-[600px] h-[600px] bg-[#00468B]/10 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-[100px]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Content - CSS animations instead of Framer Motion */}
          <div className="lg:col-span-6 pt-10 text-center lg:text-left mb-12 sm:mb-16 lg:mb-0 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8 animate-fade-in-up delay-100">
              The Complete 360° Solution for <span className="text-[#00468B] relative inline-block">
                Jewellery Businesses
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light animate-fade-in-up delay-200">
              From custom orders to ready e-commerce - Jewelmounts connects retailers and manufacturers on one intelligent platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
              <button onClick={() => window.location.href = 'https://www.jewelmounts.com/'} className="flex cursor-pointer items-center gap-2 bg-[#00468B] text-white px-8 sm:px-12 lg:px-20 py-3 sm:py-4 rounded-xl text-base font-semibold hover:bg-[#003360] transition-colors duration-300 group/btn w-full sm:w-auto justify-center">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Content - 3D Hub View */}
          <div className="lg:col-span-6 relative h-[400px] sm:h-[500px] lg:h-[650px] w-full flex items-center justify-center animate-fade-in-scale delay-300">
            {/* Render 3D Scene with Suspense for lazy loading */}
            <div className="absolute inset-0 z-10 cursor-move">
              <Suspense fallback={<div className="w-full h-full bg-slate-50 animate-pulse rounded-3xl" />}>
                <Canvas 
                  camera={{ position: [0, 0, 5.5], fov: 45 }} 
                  dpr={[1, 1.5]}
                  performance={{ min: 0.5 }}
                >
                  <ambientLight intensity={0.6} />
                  <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={2} color="#ffffff" />
                  <spotLight position={[-5, -10, 5]} angle={0.3} penumbra={1} intensity={0.8} color="#a1d6ff" />
                  
                  <Environment preset="city" />
                  
                  <OrbitControls 
                    enableZoom={false} 
                    enablePan={false} 
                    autoRotate 
                    autoRotateSpeed={0.5} 
                    enableDamping={true}
                    dampingFactor={0.05}
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI}
                    minDistance={3}
                    maxDistance={8}
                  />
                  
                  <JewelryPlatform3D />
                </Canvas>
              </Suspense>
            </div>
            
            {/* User Interaction Prompt */}
            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 z-20 text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase animate-pulse pointer-events-none">
              Drag to Rotate Ring
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;