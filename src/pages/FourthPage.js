import React, { useState, useEffect } from "react";

export default function FourthPage() {
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
      <h3>Jam with the fall</h3>

      <div className="hero">
        <img ref={imgRef} src="assets/women-3.png" alt="" />
        <video
          autoPlay
          muted
          loop
          style={{
            height: imageSize.height - 10,
            width: imageSize.width - 10
          }}
          src="assets/trees.mp4"
        />
      </div>
    </div>
  );
}
