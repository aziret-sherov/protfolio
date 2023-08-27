import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

interface GltfModelProps {
    url: string;
}

const GltfModel: React.FC<GltfModelProps> = ({ url }) => {
    const gltf = useLoader(GLTFLoader, url);

    return <primitive object={gltf.scene} />;
};

export default GltfModel;
