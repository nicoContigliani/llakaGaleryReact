import { keysPressed } from "./movement.js";
import { showMenu, hideMenu } from "./menu.js";
import { startAudio, stopAudio } from "./audioGuide.js";

let lockPointer = true;
let showMenuOnUnlock = false;

export const setupEventListeners = (controls, camera, scene) => {
  document.addEventListener(
    "keydown",
    (event) => onKeyDown(event, controls),
    false
  );
  document.addEventListener(
    "keyup",
    (event) => onKeyUp(event, controls),
    false
  );

  controls.addEventListener("unlock", () => {
    if (showMenuOnUnlock) {
      showMenu();
    }
    showMenuOnUnlock = false;
  });

  document.getElementById("start_audio")?.addEventListener("click", startAudio);
  document.getElementById("stop_audio")?.addEventListener("click", stopAudio);

  // Clic en el canvas bloquea el puntero para girar con el ratón (estilo CS)
  const canvas = document.querySelector("canvas");
  canvas?.addEventListener("mousedown", function () {
    const menu = document.getElementById("menu");
    const modal = document.getElementById("project-info-modal");
    const about = document.getElementById("about-overlay");
    if (
      !controls.isLocked &&
      !menu?.classList.contains("show") &&
      !modal?.classList.contains("show") &&
      !about?.classList.contains("show")
    ) {
      controls.lock();
    }
  });
};

function togglePointerLock(controls) {
  if (lockPointer) {
    controls.lock();
  } else {
    showMenuOnUnlock = false;
    controls.unlock();
  }
  lockPointer = !lockPointer;
}

function onKeyDown(event, controls) {
  if (event.key in keysPressed) {
    keysPressed[event.key] = true;
  }

  if (event.key === "Escape") {
    showMenu();
    showMenuOnUnlock = true;
    controls.unlock();
    lockPointer = false;
  }

  if (event.key === "p") {
    controls.unlock();
    lockPointer = false;
  }

  if (event.key === "Enter" || event.key === "Return") {
    hideMenu();
    controls.lock();
    lockPointer = true;
  }

  if (event.key === " ") {
    togglePointerLock(controls);
  }

  if (event.key === "g") {
    startAudio();
  }

  if (event.key === "p") {
    stopAudio();
  }

  if (event.key === "m") {
    showMenu();
    showMenuOnUnlock = true;
    controls.unlock();
    lockPointer = false;
  }

  if (event.key === "r") {
    location.reload();
  }
}

function onKeyUp(event, controls) {
  if (event.key in keysPressed) {
    keysPressed[event.key] = false;
  }
}

document.getElementById("about_button")?.addEventListener("click", function () {
  document.getElementById("about-overlay")?.classList.add("show");
});

document.getElementById("close-about")?.addEventListener("click", function () {
  document.getElementById("about-overlay")?.classList.remove("show");
});

document.getElementById("gallery-info-btn")?.addEventListener("click", function () {
  document.getElementById("project-info-modal")?.classList.add("show");
});

document.getElementById("close-project-info")?.addEventListener("click", function () {
  document.getElementById("project-info-modal")?.classList.remove("show");
});

document.getElementById("project-info-modal")?.addEventListener("click", function (e) {
  if (e.target.id === "project-info-modal") {
    document.getElementById("project-info-modal").classList.remove("show");
  }
});

document.getElementById("menu-toggle")?.addEventListener("click", function () {
  const menu = document.getElementById("menu");
  menu?.classList.toggle("show");
});

document.getElementById("menu-close")?.addEventListener("click", function () {
  document.getElementById("menu")?.classList.remove("show");
});

document.getElementById("menu-close-menu")?.addEventListener("click", function () {
  document.getElementById("menu")?.classList.remove("show");
});

document.getElementById("menu-controls")?.addEventListener("click", function () {
  const sub = document.getElementById("menu-controls-sub");
  const isOpen = sub?.classList.toggle("open");
  this.setAttribute("aria-expanded", String(isOpen === true));
});

document.getElementById("sidebar-close")?.addEventListener("click", function () {
  document.getElementById("sidebar")?.classList.remove("show");
});

// Cerrar sidebar derecho (información)
document.getElementById("sidebar-close")?.addEventListener("click", function () {
  document.getElementById("sidebar")?.classList.remove("show");
});
