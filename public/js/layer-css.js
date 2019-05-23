function overlay(targetSelector, options) {
  // Options by default are Black with 0.5 opacity...
  // Options = { color, opacity }
  let target = $(targetSelector);
  target.addClass('.overlay');
  if (options) {
    if (options.color) {
      $(`${target}.overlay:before`).css('background-color', options.color);
    }
    if (options.opacity) {
      $(`${target}.overlay:before`).css('opacity', options.opacity);
    }
  }
}

// Example of overlay(...)
// Create container, height 100x100, example target name of .overlay-example
// overlay('.overlay-example'); ... Will apply a overlay of black @ 50%
// overlay('.overlay-example', { color: 'white', opacity: '0.3' }); ... Will apply a overlay of white @ 30%

function gradient(targetSelector, options) {
  // Default options... gradient goes from left to right transitioning from white to transparent
  // If options are present, all three values must be valid
  // Options = { direction, from, to }
  let target = $(targetSelector);
  target.addClass('.gradient');
  if (options && options.direction && options.from && options.to) {
    $(`${target}.gradient:before`).css('linear-gradient', `${options.drection} ${options.from}, ${options.to}`);  
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
  let target = $(targetSelector);
  target.addClass('.shadow');
  if (options && options.bottom && options.right && options.range && options.color) {
    $(`${target}.shadow:before`).css('box-shadow', `${options.bottom} ${options.right} ${options.range} ${options.color}`);
  }
}