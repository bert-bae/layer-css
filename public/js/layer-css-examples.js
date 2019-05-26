$(document).ready(() => {
  overlay('.custom-overlay-1', { color: "red", opacity: 0.3 });
  overlay('.custom-overlay-2', { color: "green", opacity: 0.6 });

  gradientL('.custom-gradient-1', { direction: "to left", from: "red", to: "transparent" });
  gradientL('.custom-gradient-2', { direction: "45deg", from: "transparent", to: "blue" });

  gradientR('.custom-gradientR-1', { shape: 'circle', position: '30% 75%', from: 'purple', to: 'transparent'});
  gradientR('.custom-gradientR-2', { shape: 'farthest-corner', position: '100% 100%', from: 'transparent', to: 'black'});

  shadow('.custom-shadow-1', { right: "-10", bottom: "10", blur: "5", spread: "5", color: "rgba(255, 0, 0, 0.3)"});
  shadow('.custom-shadow-2', { right: "10", bottom: "10", blur: null, spread: "2", color: "rgba(255, 200, 0, 0.6)"});
})