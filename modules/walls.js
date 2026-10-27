import * as THREE from "three";

export function createWalls(scene, textureLoader) {
  let wallGroup = new THREE.Group();
  scene.add(wallGroup);

  // Glass material for elegant walls
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.25,
    roughness: 0.05,
    metalness: 0,
    transmission: 0.9,
    thickness: 0.5,
    envMapIntensity: 1,
    side: THREE.DoubleSide,
  });

  // Frame material for structural elements
  const frameMaterial = new THREE.MeshStandardMaterial({
    color: 0x1a1a1a,
    metalness: 0.8,
    roughness: 0.3,
  });

  // Main gallery structure - create multiple rooms
  // Outer walls
  // Front glass wall with frame
  const frontFrame = new THREE.Mesh(new THREE.BoxGeometry(100, 20, 0.3), frameMaterial);
  frontFrame.position.z = -30;
  frontFrame.position.y = 7;
  wallGroup.add(frontFrame);

  const frontGlass = new THREE.Mesh(new THREE.PlaneGeometry(99.4, 19.4), glassMaterial);
  frontGlass.position.z = -30;
  frontGlass.position.y = 7;
  wallGroup.add(frontGlass);

  // Back wall
  const backFrame = new THREE.Mesh(new THREE.BoxGeometry(100, 20, 0.3), frameMaterial);
  backFrame.position.z = 30;
  backFrame.position.y = 7;
  wallGroup.add(backFrame);

  const backGlass = new THREE.Mesh(new THREE.PlaneGeometry(99.4, 19.4), glassMaterial);
  backGlass.position.z = 30;
  backGlass.position.y = 7;
  backGlass.rotation.y = Math.PI;
  wallGroup.add(backGlass);

  // Left wall
  const leftFrame = new THREE.Mesh(new THREE.BoxGeometry(0.3, 20, 60), frameMaterial);
  leftFrame.position.x = -50;
  leftFrame.position.y = 7;
  wallGroup.add(leftFrame);

  const leftGlass = new THREE.Mesh(new THREE.PlaneGeometry(59.4, 19.4), glassMaterial);
  leftGlass.position.x = -50;
  leftGlass.position.y = 7;
  leftGlass.rotation.y = Math.PI / 2;
  wallGroup.add(leftGlass);

  // Right wall
  const rightFrame = new THREE.Mesh(new THREE.BoxGeometry(0.3, 20, 60), frameMaterial);
  rightFrame.position.x = 50;
  rightFrame.position.y = 7;
  wallGroup.add(rightFrame);

  const rightGlass = new THREE.Mesh(new THREE.PlaneGeometry(59.4, 19.4), glassMaterial);
  rightGlass.position.x = 50;
  rightGlass.position.y = 7;
  rightGlass.rotation.y = -Math.PI / 2;
  wallGroup.add(rightGlass);

  // Create internal room dividers for multiple galleries
  // Room divider 1
  const divider1Frame = new THREE.Mesh(new THREE.BoxGeometry(0.3, 15, 40), frameMaterial);
  divider1Frame.position.x = 0;
  divider1Frame.position.y = 5;
  divider1Frame.position.z = 0;
  wallGroup.add(divider1Frame);

  const divider1Glass = new THREE.Mesh(new THREE.PlaneGeometry(39.4, 14.4), glassMaterial);
  divider1Glass.position.x = 0;
  divider1Glass.position.y = 5;
  divider1Glass.position.z = 0;
  divider1Glass.rotation.y = Math.PI / 2;
  wallGroup.add(divider1Glass);

  // Room divider 2
  const divider2Frame = new THREE.Mesh(new THREE.BoxGeometry(40, 15, 0.3), frameMaterial);
  divider2Frame.position.x = -25;
  divider2Frame.position.y = 5;
  divider2Frame.position.z = -10;
  wallGroup.add(divider2Frame);

  const divider2Glass = new THREE.Mesh(new THREE.PlaneGeometry(39.4, 14.4), glassMaterial);
  divider2Glass.position.x = -25;
  divider2Glass.position.y = 5;
  divider2Glass.position.z = -10;
  wallGroup.add(divider2Glass);

  return wallGroup;
}
