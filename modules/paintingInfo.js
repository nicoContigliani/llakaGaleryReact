// Display painting info in the DOM
export const displayPaintingInfo = (info) => {
  const infoElement = document.getElementById('painting-info'); // Get the reference

  // Set the html content inside info element
  infoElement.innerHTML = `
    <div class="painting-info-header">
      <h3>${info.title}</h3>
      <button class="close-info" onclick="document.getElementById('painting-info').classList.remove('show')">×</button>
    </div>
    <div class="painting-info-content">
      <p><strong>Artista:</strong> ${info.artist}</p>
      <p><strong>Año:</strong> ${info.year}</p>
      <p class="description">${info.description}</p>
    </div>
  `;
  infoElement.classList.add('show'); // Add the 'show' class
};

// Hide painting info in the DOM
export const hidePaintingInfo = () => {
  const infoElement = document.getElementById('painting-info'); // Get the reference
  infoElement.classList.remove('show'); // Remove the 'show' class
};

