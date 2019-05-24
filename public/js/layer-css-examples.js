$(document).ready(() => {
  overlay('.custom-overlay-1', { color: "red", opacity: 0.3 });
  overlay('.custom-overlay-2', { color: "green", opacity: 0.6 });

  gradientL('.custom-gradient-1', { direction: "to right", from: "red", to: "transparent" });
  gradientL('.custom-gradient-2', { direction: "45deg", from: "transparent", to: "blue" });

  shadow('.custom-shadow-1', { right: "-10", bottom: "10", blur: "3", spread: "5", color: "rgba(255, 0, 0, 0.3)"});
  shadow('.custom-shadow-2', { right: "10", bottom: "10", blur: null, spread: "2", color: "rgba(255, 200, 0, 0.6)"});
})