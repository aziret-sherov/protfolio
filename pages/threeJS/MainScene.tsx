import React, {useEffect, useRef} from "react";
import * as THREE from "three";
import GltfModel from "../helpers/GltModel";
import { Canvas } from '@react-three/fiber';

const MainScene = () => {
    const sceneRef = useRef<HTMLDivElement | null>(null);
    const modelPath = 'models/pack_leader_highwire_fortnite.glb';

    useEffect(() => {
        if (!sceneRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        const renderer = new THREE.WebGLRenderer();
        sceneRef.current.appendChild(renderer.domElement);

        // Create a cube
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Position the camera
        camera.position.z = 5;

        // Handle window resize
        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(newWidth, newHeight);
        };

        // Initial call to handleResize
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        // Start the animation
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            sceneRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    return (<>
        <Canvas>
            <ambientLight/>
            <pointLight position={[10, 10, 10]}/>
            <GltfModel url={modelPath}/>
        </Canvas>
        <div ref={sceneRef}></div>
    </>);
};

export default MainScene;
