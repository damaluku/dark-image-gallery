import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setimages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setimages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [term]);

  return (
    <>
      <div className="container">
        <ImageSearch searchText={(text) => setTerm(text)} />

        {!isLoading && images.length === 0 && <h1>No images found</h1>}

        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="grid-container">
            {images.map((image) => {
              return <ImageCard key={image.id} image={image} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
