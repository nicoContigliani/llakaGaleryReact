export const hideMenu = () => {
  const menu = document.getElementById('menu');
  menu?.classList.remove('show'); // Cierra el menú lateral para no obstruir la escena
};

export const showMenu = () => {
  const menu = document.getElementById('menu');
  menu?.classList.add('show'); // Abre el menú lateral
};

// Lock the pointer (controls are activated) and hide the menu when the experience starts
export const startExperience = (controls) => {
  controls.lock(); // Lock the pointer (controls are activated)
  hideMenu();
};

export const setupPlayButton = (controls) => {
  const playButton = document.getElementById('menu-explore'); // Botón EXPLORAR dentro del menú lateral
  playButton.addEventListener('click', () => startExperience(controls)); // Inicia la experiencia y cierra el menú
};
