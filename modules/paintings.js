import * as THREE from 'three';

import { paintingData } from './paintingData.js';

export function createPaintings(scene, textureLoader) {
  let paintings = [];
  let markers = [];

  paintingData.forEach((data) => {
    const painting = new THREE.Mesh( 
      new THREE.PlaneGeometry(data.width, data.height),
      new THREE.MeshLambertMaterial({ map: textureLoader.load(data.imgSrc) })
    );

    painting.position.set(data.position.x, data.position.y, data.position.z); 
    painting.rotation.y = data.rotationY; 

    painting.userData = {
      type: 'painting', 
      info: data.info, 
      url: data.info.link
    };

    painting.castShadow = true; 
    painting.receiveShadow = true; 

    paintings.push(painting);
    scene.add(painting);

    // Create elegant interactive marker
    const markerGeometry = new THREE.CircleGeometry(0.16, 32);
    const markerMaterial = new THREE.MeshBasicMaterial({
      color: 0xf5d16e,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide
    });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    
    // Position marker below the painting
    marker.position.set(data.position.x, data.position.y - 1.6, data.position.z);
    marker.rotation.y = data.rotationY;
    
    marker.userData = {
      type: 'marker',
      info: data.info
    };
    
    markers.push(marker);
    scene.add(marker);
  });

  return { paintings, markers }; 
}
