import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="card-container">
      <img src={image.webformatURL} alt="images" />
      <div className="labels">
        <div className="label-content">Photo by {image.user}</div>
        <ul>
          <li>
            <strong>Views:</strong> {image.views}
          </li>
          <li>
            <strong>downloads:</strong> {image.downloads}
          </li>
          <li>
            <strong>likes:</strong> {image.likes}
          </li>
        </ul>
      </div>
      <div className="tags">
        {tags.map((tag, index) => {
          return <span key={index}>#{tag}</span>;
        })}
      </div>
    </div>
  );
};

export default ImageCard;
