window.addEventListener("load", () => {
  if (!window.RufflePlayer) {
    console.error("Ruffle no se cargó correctamente.");
    return;
  }

  const ruffle = window.RufflePlayer.newest();
  const container = document.getElementById("game-container");
  const player = ruffle.createPlayer();

  player.config = {
    autoplay: "on",
    unmuteOverlay: "hidden",
    splashScreen: false
  };

  container.appendChild(player);
  player.load("assets/doom-1.swf");
});




