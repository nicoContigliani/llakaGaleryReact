import * as THREE from 'three';
import { displayPaintingInfo } from './paintingInfo.js';

const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

function clickHandling(renderer, camera, paintings, markers) {
  renderer.domElement.addEventListener(
    'click',
    (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      onClick(camera, paintings, markers);
    },
    false
  );
}

function onClick(camera, paintings, markers) {
  raycaster.setFromCamera(mouse, camera);

  const allInteractables = [...paintings, ...(markers || [])];
  const intersects = raycaster.intersectObjects(allInteractables);

  if (intersects.length > 0) {
    const object = intersects[0].object;

    if (object.userData.type === 'painting' || object.userData.type === 'marker') {
      console.log('Clicked:', object.userData.info.title);
      displayPaintingInfo(object.userData.info);
    }
  }
}

export { clickHandling };
