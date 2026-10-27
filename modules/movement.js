import * as THREE from 'three';

export const keysPressed = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
  w: false,
  a: false,
  s: false,
  d: false,
  W: false,
  A: false,
  S: false,
  D: false,
};

export const updateMovement = (delta, controls, camera, walls) => {
  const moveSpeed = 5 * delta;

  const previousPosition = camera.position.clone();

  if (keysPressed.ArrowRight || keysPressed.d || keysPressed.D) {
    controls.moveRight(moveSpeed);
  }
  if (keysPressed.ArrowLeft || keysPressed.a || keysPressed.A) {
    controls.moveRight(-moveSpeed);
  }
  if (keysPressed.ArrowUp || keysPressed.w || keysPressed.W) {
    controls.moveForward(moveSpeed);
  }
  if (keysPressed.ArrowDown || keysPressed.s || keysPressed.S) {
    controls.moveForward(-moveSpeed);
  }

  if (checkCollision(camera, walls)) {
    camera.position.copy(previousPosition);
  }
};

export const checkCollision = (camera, walls) => {
  const playerBoundingBox = new THREE.Box3();
  const cameraWorldPosition = new THREE.Vector3();
  camera.getWorldPosition(cameraWorldPosition);
  playerBoundingBox.setFromCenterAndSize(
    cameraWorldPosition,
    new THREE.Vector3(1, 1, 1)
  );

  for (let i = 0; i < walls.children.length; i++) {
    const wall = walls.children[i];
    if (wall.BoundingBox && playerBoundingBox.intersectsBox(wall.BoundingBox)) {
      return true;
    }
  }

  return false;
};
