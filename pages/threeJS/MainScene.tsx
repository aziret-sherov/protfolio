import React, {useEffect, useRef} from "react";
import * as THREE from "three";
import GltfModel from "../helpers/GltModel";
import { Canvas } from '@react-three/fiber';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

const MainScene = () => {
    const sceneRef = useRef<HTMLDivElement | null>(null);
    const modelPath = '/models/SM2.glb';

    useEffect(() => {
        if (!sceneRef.current) return;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffa500);
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        const renderer = new THREE.WebGLRenderer();
        sceneRef.current.appendChild(renderer.domElement);

        const loader = new GLTFLoader();
        loader.load(modelPath, (gltf) => {
            const model = gltf.scene;
            scene.add(model);

            const onMouseDown = (event: any) => {
                let startX = event.clientX;
                let startY = event.clientY;

                const onMouseMove = (event: any) => {
                    const deltaX = event.clientX - startX;
                    const deltaY = event.clientY - startY;

                    model.rotation.x += deltaY * 0.01;
                    model.rotation.y += deltaX * 0.01;

                    startX = event.clientX;
                    startY = event.clientY;
                };

                const onMouseUp = () => {
                    document.removeEventListener('mousemove', onMouseMove);
                    document.removeEventListener('mouseup', onMouseUp);
                };

                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
            };

            sceneRef.current?.addEventListener('mousedown', onMouseDown);

            const animate = () => {
                requestAnimationFrame(animate);
                renderer.render(scene, camera);
            };

            animate();
        });

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

        return () => {
            window.removeEventListener("resize", handleResize);
            sceneRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={sceneRef}></div>;
};

export default MainScene;
