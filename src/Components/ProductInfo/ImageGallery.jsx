import React, { useState } from "react";

function ImageGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);
  const [thumbnails, setThumbnails] = useState(images.slice(1, 5));

  const handleThumbnailClick = (thumbnail) => {
    setMainImage(thumbnail);
  };

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <figure className="relative pt-[100%]">
          <img
            src={mainImage}
            alt=""
            className="absolute inset-0 w-full h-full object-contain"
          />
        </figure>
      </div>

      <div className="flex space-x-2 my-5 flex-wrap">
        {thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={`Thumbnail ${index + 1}`}
            className="w-24 h-24 object-cover rounded-md cursor-pointer"
            onClick={() => handleThumbnailClick(thumbnail)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
