import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, Sparkles, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";


const JewelryPlatform3D = () => {
  const gemRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (gemRef.current) {
      gemRef.current.rotation.y = t * 0.1;
      gemRef.current.position.y = Math.sin(t * 1.1) * 0.025;
    }
  });

  // Diamond cut
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
    const lathe = new THREE.LatheGeometry(profile, 8);
    const faceted = lathe.toNonIndexed();
    faceted.computeVertexNormals();
    return faceted;
  }, []);

  return (
    <Float rotationIntensity={0.15} floatIntensity={0.6} speed={1.2}>
      <group position={[0, 0, 0]}>
        
        <mesh ref={gemRef} geometry={diamondGeometry} scale={1.6}>
          <MeshTransmissionMaterial 
            backside={true}
            samples={16}
            resolution={1024}
            transmission={1} 
            thickness={3}
            chromaticAberration={3}
            anisotropy={0.2}
            distortionScale={0.15}
            temporalDistortion={0.08}
            clearcoat={1}
            clearcoatRoughness={0}
            roughness={0}
            ior={2.417}
            color="#ffffff"
            attenuationColor="#f0f0f0"
            attenuationDistance={2}
          />
        </mesh>

      </group>

      {/* Diamond sparkles */}
      <Sparkles count={100} scale={4} size={2} speed={0.4} opacity={0.7} color="#E0115F" />
      <Sparkles count={100} scale={3} size={1.2} speed={0.25} opacity={0.5} color="#50C878" />
      <Sparkles count={60} scale={5} size={2.5} speed={0.15} opacity={0.35} color="#0F52BA" />
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
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 pt-10 text-center lg:text-left mb-12 sm:mb-16 lg:mb-0"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8 will-change-transform"
            >
              The Complete 360° Solution for <span className="text-[#00468B] relative inline-block">
                Jewellery Businesses
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light will-change-transform"
            >
              From custom orders to ready e-commerce - Jewelmounts connects retailers and manufacturers on one intelligent platform.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start will-change-transform"
            >
              <button onClick={() => window.location.href = 'https://www.jewelmounts.com/'} className="flex cursor-pointer items-center gap-2 bg-[#00468B] text-white px-8 sm:px-12 lg:px-20 py-3 sm:py-4 rounded-xl text-base font-semibold hover:bg-[#003360] transition-colors duration-300 group/btn w-full sm:w-auto justify-center">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Hub View */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100, damping: 20 }}
            className="lg:col-span-6 relative h-[400px] sm:h-[500px] lg:h-[650px] w-full flex items-center justify-center will-change-transform"
          >

            {/* Render 3D Scene */}
            <div className="absolute inset-0 z-10 cursor-move">
              <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
                {/* Advanced Lighting setup for hyper-realism */}
                <ambientLight intensity={0.6} />
                <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={2.5} color="#ffffff" castShadow />
                <spotLight position={[-5, -10, 5]} angle={0.3} penumbra={1} intensity={1} color="#a1d6ff" />
                <pointLight position={[0, 0, 0]} intensity={0.5} color="#ffffff" />
                
                <Environment preset="city" />
                
                <OrbitControls 
                  enableZoom={false} 
                  enablePan={false} 
                  autoRotate 
                  autoRotateSpeed={0.5} 
                  maxPolarAngle={Math.PI / 1.5} 
                  minPolarAngle={Math.PI / 4} 
                  enableDamping={true}
                  dampingFactor={0.03}
                />
                
                <JewelryPlatform3D />
                
                {/* <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={15} blur={3} far={4} color="#00468B" /> */}
              </Canvas>
            </div>
            
            {/* User Interaction Prompt */}
            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 z-20 text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase animate-pulse pointer-events-none">
              Drag to Rotate Gem
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;