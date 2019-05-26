# Layer-CSS

Easy to use client-side Javascript and CSS package for applying overlay effects to your elements. Layer-CSS gives you a quick insight into creating overlays, gradients, and shadows on your containers. Specific class names apply the overlays you want or it can be initiated by client-side Javascript to quickly apply Layer-CSS styles to a target Element.

Simply load index.css to your stylesheet assets and layer-css.js to your Javascript files which contains global functions to apply styling to target elements and call them in your client-side Javascript.

## Why use Layer-CSS?

The company I work for currently is a culture based platform. Many cultures mean many images of various colors which make it incredibly difficult to show text inside of a container with a background-image. The solution? Overlays! Wonderful idea to create a layer just between the text and image to improve texts to be readable.

Other implementations such as easy to use and apply box-shadows and gradients are included to customize the way you want your website to feel for your users.

## End Goal

This package is not intended for you to use the Javascript logic in production, but for you to understand how it works. The Javascript functions are simply there for quick and easy way to apply these styles to your elements. Ideally, you should go into the styles/scss/components folder and pull the @mixin files to inspect and understand.

## Overlay CSS

@mixin overlay-apply($color, $opacity) {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  content: "";
  background-color: $color;
  opacity: $opacity;
  z-index: -1;
}

.layer-base {
  position: relative;
  z-index: 1;
  .overlay-apply {
    @include overlay-apply(black, 0.5);
  }
}

## Gradient CSS

@mixin gradientL-apply($direction, $from, $to) {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  content: "";
  background-image: linear-gradient(
    $direction,
    $from, $to
  );
}

@mixin gradientR-apply($shape, $position, $from, $to) {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  content: "";
  background-image: radial-gradient($shape at $position, $from, $to);
}

.layer-base {
  position: relative;
  z-index: 1;
  .gradientL-apply {
    @include gradientL-apply(to right, #FFF, transparent);
  }
}

.layer-base {
  position: relative;
  z-index: 1;
  .gradientR-apply {
    @include gradientR-apply(circle, 50%, transparent, #FFF);
  }
}

## Shadow CSS

@mixin shadow-apply($right, $bottom, $blur, $spread, $color) {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  content: "";
  box-shadow: $right $bottom $blur $spread $color;
}

.layer-base {
  position: relative;
  z-index: 1;
  .shadow-apply {
    @include shadow-apply(5px, 5px, 5px, 5px, rgba(0, 0, 0, 0.5));
  }
}

## Example Images

![Overlay Examples]()
![Linear Gradient Examples]()
![Radial Gradient Examples]()
![Shadow Examples]()
