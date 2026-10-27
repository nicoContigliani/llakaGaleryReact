import * as THREE from "three";

export const setupFloor = (scene) => {
  const textureLoader = new THREE.TextureLoader();

  const colorTexture = textureLoader.load("img/white-texture.jpg");
  const normalTexture = textureLoader.load("leather_white_4k.gltf/textures/leather_white_nor_gl_4k.jpg");
  const roughnessTexture = textureLoader.load("leather_white_4k.gltf/textures/leather_white_rough_4k.jpg");

  colorTexture.wrapS = colorTexture.wrapT = THREE.RepeatWrapping;
  normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;
  roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;

  colorTexture.repeat.set(8, 8);
  normalTexture.repeat.set(8, 8);
  roughnessTexture.repeat.set(8, 8);

  const planeGeometry = new THREE.PlaneGeometry(100, 100);
  const planeMaterial = new THREE.MeshPhysicalMaterial({
    map: colorTexture,
    normalMap: normalTexture,
    roughnessMap: roughnessTexture,
    color: 0xf8f9fa,
    roughness: 0.08,
    metalness: 0.02,
    reflectivity: 0.6,
    clearcoat: 0.8,
    clearcoatRoughness: 0.08,
    side: THREE.DoubleSide,
  });

  const floorPlane = new THREE.Mesh(planeGeometry, planeMaterial);
  floorPlane.receiveShadow = true;
  floorPlane.rotation.x = Math.PI / 2;
  floorPlane.position.y = -Math.PI;

  scene.add(floorPlane);
  return floorPlane;
};
