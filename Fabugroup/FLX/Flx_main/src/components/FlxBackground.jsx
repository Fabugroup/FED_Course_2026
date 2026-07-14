import "./FlxBackground.css";
import PixelCanvas from "./Flxbackground/PixelCanvas";

function FlxBackground({
  children,
  pixelSize = 8,
  density = 0.85,
  brightness = 0.9,
  animation = true,
  speed = 0.2,
}) {
  return (
    <div className="flx-background">
      {/* Base Gradient */}
      <div className="gradient-layer" />

      {/* Pixel Canvas */}
      <PixelCanvas
        pixelSize={pixelSize}
        density={density}
        brightness={brightness}
        animation={animation}
        speed={speed}
      />

      {/* Vignette */}
      <div className="vignette" />

      {/* Hero Content */}
      <div className="content-layer">{children}</div>
    </div>
  );
}

export default FlxBackground;
