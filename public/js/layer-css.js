function overlay(targetSelector, options) {
  // Options by default are Black with 0.5 opacity...
  // Options = { color, opacity }
  $(targetSelector).addClass('layer-base').append($('<div class="overlay-apply">'));
  if (options) {
    if (options.color) {
      $(`${targetSelector}.layer-base .overlay-apply`).css('background-color', options.color);
    }
    if (options.opacity) {
      $(`${targetSelector}.layer-base .overlay-apply`).css('opacity', options.opacity);
    }
  }
}

// Example of overlay(...)
// Create container, height 100x100, example target name of .overlay-example
// overlay('.overlay-example'); ... Will apply a overlay of black @ 50%
// overlay('.overlay-example', { color: 'white', opacity: '0.3' }); ... Will apply a overlay of white @ 30%

function gradientL(targetSelector, options) {
  // Default options... gradient goes from left to right transitioning from white to transparent
  // If options are present, all three values must be valid
  // Options = { direction, from, to }... Direction can be "to right", "to bottom", "90deg", etc.
  $(targetSelector).addClass('layer-base').append($('<div class="gradientL-apply">'));
  if (options && options.direction && options.from && options.to) {
    $(`${targetSelector}.layer-base .gradientL-apply`).css('background-image', `linear-gradient(${options.direction}, ${options.from}, ${options.to})`);  
  }
}

// Example of gradientL(...);
// Create container, height 100x100, example target name of .gradient-example
// gradientL('.gradient-example')... Applies default
// gradientL('.gradient-example', { direction: 'to left', from: 'red', to: 'pink'});

function gradientR(targetSelector, options) {
  // Default options, gradient goes from transparent to white (in to out) starting from center of container in a circle
  // Options = { shape, position, from, to}... e.g. (shape: 'square', position: '65% 30%', from: 'transparent', to: 'red')
  $(targetSelector).addClass('layer-base').append($('<div class="gradientR-apply">'));
  if (options && options.shape && options.position && options.from && options.to) {
    $(`${targetSelector}.layer-base .gradientR-apply`).css('background-image', `radial-gradient(${options.shape} at ${options.position}, ${options.from}, ${options.to})`);
    console.log( `radial-gradient(${options.shape} at ${options.position}, ${options.from}, ${options.to})`);
  }
}

function shadow(targetSelector, options) {
  // Default options... Shadow bottom right at 5px range with black opacity 0.5
  // If options are present, all values must be valid
  // Positive values for 1 & 2 arguments are bottom and right... negative numbers will go in opposite direction
  // Options = { bottom, right, range, color }... For color, use rgba if you want to apply opacity
  $(targetSelector).addClass('layer-base').append($('<div class="shadow-apply">'));
  if (options) {
    $(`${targetSelector}.layer-base .shadow-apply`).css('box-shadow', `${options.inset ? "inset" : ""} ${options.right || 0}px ${options.bottom || 0}px ${options.blur || 0}px ${options.spread || 0}px ${options.color || "#FFF"}`);
  }
}