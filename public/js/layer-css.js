function overlay(targetSelector, options) {
  // Options by default are Black with 0.5 opacity...
  // Options = { color, opacity }
  $(targetSelector).addClass('overlay').append($('<div class="overlay-apply">'));
  if (options) {
    if (options.color) {
      $(`${targetSelector}.overlay .overlay-apply`).css('background-color', options.color);
    }
    if (options.opacity) {
      $(`${targetSelector}.overlay .overlay-apply`).css('opacity', options.opacity);
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
  $(targetSelector).addClass('gradientL').append($('<div class="gradientL-apply">'));
  if (options && options.direction && options.from && options.to) {
    $(`${targetSelector}.gradientL .gradientL-apply`).css('background-image', `linear-gradient(${options.direction}, ${options.from}, ${options.to})`);  
  }
}

// Example of gradient(...);
// Create container, height 100x100, example target name of .gradient-example
// gradient('.gradient-example')... Applies default
// gradient('.gradient-example', { direction: 'to left', from: 'red', to: 'pink'});

function shadow(targetSelector, options) {
  // Default options... Shadow bottom right at 5px range with black opacity 0.5
  // If options are present, all values must be valid
  // Positive values for 1 & 2 arguments are bottom and right... negative numbers will go in opposite direction
  // Options = { bottom, right, range, color }... For color, use rgba if you want to apply opacity
  $(targetSelector).addClass('shadow').append($('<div class="shadow-apply">'));
  if (options) {
    $(`${targetSelector}.shadow .shadow-apply`).css('box-shadow', `${options.right || 0}px ${options.bottom || 0}px ${options.blur || 0}px ${options.spread || 0}px ${options.color || "#FFF"}`);
  }
}