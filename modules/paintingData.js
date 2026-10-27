export const paintingData = [
  // Sala Principal - Frente
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 1}.jpg`,
    width: 4.5,
    height: 3,
    position: { x: -18 + 12 * i, y: 4, z: -29.7 },
    rotationY: 0,
    info: {
      title: `Obra ${i + 1}`,
      artist: 'Colección Contemporánea',
      description: `Pieza seleccionada para la sala principal. Explora los detalles y contexto de esta obra maestra en la galería principal.`,
      year: `202${i + 1}`,
      link: 'https://github.com/theringsofsaturn',
    },
  })),
  // Sala Principal - Trasera
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 5}.jpg`,
    width: 4.5,
    height: 3,
    position: { x: -18 + 12 * i, y: 4, z: 29.7 },
    rotationY: Math.PI,
    info: {
      title: `Obra ${i + 5}`,
      artist: 'Colección Contemporánea',
      description: `Expuesta en la galería trasera, esta obra destaca por su composición única y paleta cromática distintiva.`,
      year: `202${i + 1}`,
      link: 'https://github.com/theringsofsaturn',
    },
  })),
  // Sala 2 - Lateral Izquierdo
  ...Array.from({ length: 3 }, (_, i) => ({
    imgSrc: `artworks/${i + 9}.jpg`,
    width: 4,
    height: 2.8,
    position: { x: -49.7, y: 4, z: -15 + 15 * i },
    rotationY: Math.PI / 2,
    info: {
      title: `Galería 2 - ${i + 9}`,
      artist: 'Artistas Emergentes',
      description: `Parte de la exposición de artistas emergentes. Cada pieza representa una perspectiva única y experimental.`,
      year: `202${(i % 3) + 2}`,
      link: 'https://github.com/theringsofsaturn',
    },
  })),
  // Sala 2 - Otro lado
  ...Array.from({ length: 3 }, (_, i) => ({
    imgSrc: `artworks/${i + 12}.jpg`,
    width: 4,
    height: 2.8,
    position: { x: -0.3, y: 4, z: -15 + 15 * i },
    rotationY: Math.PI / 2,
    info: {
      title: `Sala Intermedia - ${i + 12}`,
      artist: 'Colección Mixta',
      description: `Sala intermedia conectando las diferentes galerías. Obras seleccionadas para crear un diálogo entre estilos.`,
      year: `202${(i % 2) + 3}`,
      link: 'https://github.com/theringsofsaturn',
    },
  })),
  // Sala 3 - Derecha
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 15}.jpg`,
    width: 4.5,
    height: 3,
    position: { x: 49.7, y: 4, z: -18 + 12 * i },
    rotationY: -Math.PI / 2,
    info: {
      title: `Galería 3 - ${i + 15}`,
      artist: 'Colección Clásica Contemporánea',
      description: `La tercera galería presenta una selección curada de obras contemporáneas con enfoque en la narrativa visual.`,
      year: `202${i + 2}`,
      link: 'https://github.com/theringsofsaturn',
    },
  })),
  // Más obras en divisores
  ...Array.from({ length: 2 }, (_, i) => ({
    imgSrc: `artworks/${i + 19}.jpg`,
    width: 3.5,
    height: 2.5,
    position: { x: -25, y: 4, z: -9.7 },
    rotationY: 0,
    info: {
      title: `Pasillo - ${i + 19}`,
      artist: 'Instalación Temporal',
      description: `Obras exhibidas en espacios de transición, creando una experiencia fluida entre salas.`,
      year: `2024`,
      link: 'https://github.com/theringsofsaturn',
    },
  })),
];
