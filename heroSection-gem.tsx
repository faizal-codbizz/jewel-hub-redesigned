import { ArrowRight } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, Sparkles, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";


const JewelryPlatform3D = () => {
  const gemRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (gemRef.current) {
      gemRef.current.rotation.y += delta * 0.1;
    }
  });

  // Diamond cut - simplified geometry
  const diamondGeometry = useMemo(() => {
    const profile = [
      new THREE.Vector2(0, -1.05),
      new THREE.Vector2(0.05, -0.95),
      new THREE.Vector2(0.35, -0.55),
      new THREE.Vector2(0.68, -0.03),
      new THREE.Vector2(0.7, 0),
      new THREE.Vector2(0.7, 0.025),
      new THREE.Vector2(0.62, 0.12),
      new THREE.Vector2(0.42, 0.27),
      new THREE.Vector2(0.37, 0.3),
      new THREE.Vector2(0, 0.3),
    ];
    const lathe = new THREE.LatheGeometry(profile, 6);
    const faceted = lathe.toNonIndexed();
    faceted.computeVertexNormals();
    return faceted;
  }, []);

  return (
    <Float rotationIntensity={0.1} floatIntensity={0.4} speed={1}>
      <mesh ref={gemRef} geometry={diamondGeometry} scale={1.6}>
        <MeshTransmissionMaterial 
          backside={true}
          samples={6}
          resolution={512}
          transmission={1} 
          thickness={2.5}
          chromaticAberration={2}
          anisotropy={0.1}
          distortionScale={0.1}
          temporalDistortion={0.05}
          clearcoat={1}
          clearcoatRoughness={0}
          roughness={0}
          ior={2.417}
          color="#ffffff"
          attenuationColor="#f0f0f0"
          attenuationDistance={2}
        />
      </mesh>

      {/* Reduced sparkles for performance */}
      <Sparkles count={50} scale={4} size={2} speed={0.3} opacity={0.6} color="#E0115F" />
      <Sparkles count={40} scale={3} size={1.2} speed={0.2} opacity={0.4} color="#50C878" />
    </Float>
  );
};

const HeroSection = () => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Premium Background Glows */}
      <div className="absolute hidden lg:block inset-0 z-0 overflow-hidden pointer-events-none">
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
                    autoRotateSpeed={0.4} 
                    maxPolarAngle={Math.PI / 1.5} 
                    minPolarAngle={Math.PI / 4} 
                    enableDamping={true}
                    dampingFactor={0.05}
                  />
                  
                  <JewelryPlatform3D />
                </Canvas>
              </Suspense>
            </div>
            
            {/* User Interaction Prompt */}
            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 z-20 text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase animate-pulse pointer-events-none">
              Drag to Rotate Gem
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;