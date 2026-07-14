import { useEffect, useRef } from "react";

function PixelCanvas({
  pixelSize = 8,
  density = 0.85,
  brightness = 0.9,
  animation = true,
  speed = 0.2,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;
    let lastUpdate = 0;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.imageSmoothingEnabled = false;

      generatePixels();
    }

    function randomBrightness() {
      const r = Math.random();

      if (r < 0.35) return 20;
      if (r < 0.55) return 50;
      if (r < 0.75) return 90;
      if (r < 0.9) return 140;
      return 200;
    }

    function generatePixels() {
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Draw a black background.
      ctx.fillStyle = "#000";
      // ctx.fillRect(0, 0, width, height);
      ctx.imageSmoothingEnabled = false;

      const cols = Math.ceil(width / pixelSize);
      const rows = Math.ceil(height / pixelSize);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          // Increase pixel probability toward the right side.
          const position = x / cols;
          const probability = density * Math.pow(position, 2.3);

          if (Math.random() < probability * 0.9) {
            const value = randomBrightness() * brightness;

            ctx.fillStyle = `rgb(${value},${value},${value})`;

            // Vary pixel size for a less uniform look.
            // const scale = 0.7 + Math.random() * 0.8;

            // const w = pixelSize * scale;
            // const h = pixelSize * scale;

            // const offsetX = (pixelSize - w) * Math.random();
            // const offsetY = (pixelSize - h) * Math.random();
            const w = pixelSize;
            const h = pixelSize;

            const offsetX = 0;
            const offsetY = 0;

            ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
            // ctx.fillRect(
            //   x * pixelSize + offsetX,
            //   y * pixelSize + offsetY,
            //   w,
            //   h,
            // );
          }
        }
      }

      // Fade from black to pixel field.
      const gradient = ctx.createLinearGradient(0, 0, width, 0);

      gradient.addColorStop(0.0, "rgba(0,0,0,1)");
      gradient.addColorStop(0.4, "rgba(0,0,0,1)");
      gradient.addColorStop(0.55, "rgba(0,0,0,0.92)");
      gradient.addColorStop(0.7, "rgba(0,0,0,0.55)");
      gradient.addColorStop(1.0, "rgba(0,0,0,0)");

      ctx.globalCompositeOperation = "destination-in";
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "source-over";
    }

    // Animate the background to keep generating a new background
    // function animate(timestamp) {
    //   if (!animation) return;

    //   if (timestamp - lastUpdate > 1000 / speed) {
    //     generatePixels();
    //     lastUpdate = timestamp;
    //   }

    //   animationFrame = requestAnimationFrame(animate);
    // }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    if (animation) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [pixelSize, density, brightness, animation, speed]);

  return <canvas ref={canvasRef} className="pixel-canvas" />;
}

export default PixelCanvas;
