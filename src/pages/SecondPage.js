import React, { useState, useEffect } from "react";

export default function SecondPage() {
  const [imageSize, setImageSize] = useState({
    height: 0,
    width: 0
  });
  const imgRef = React.createRef();

  useEffect(() => {
    if (
      imgRef &&
      imgRef.current &&
      (imageSize.height === 0 || imageSize.width === 0)
    ) {
      setImageSize({
        height: imgRef.current.height,
        width: imgRef.current.width
      });
    }
  }, [imgRef]);

  return (
    <div className="page-container">
      <h3>Find the beat</h3>

      <div className="hero">
        <img ref={imgRef} src="assets/man-1.png" alt="" />
        <video
          autoPlay
          muted
          loop
          // playbackRate={0.1}
          style={{
            height: imageSize.height - 10,
            width: imageSize.width - 10
          }}
          src="assets/fire.mp4"
        />
      </div>
    </div>
  );
}
