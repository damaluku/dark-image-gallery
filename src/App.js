import React, { Fragment } from "react";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import Gallery from "./routes/Gallery";
import NotFound from "./routes/NotFound";
import GalleryDetails from "./routes/GalleryDetails";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route index="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />}>
          <Route path=":galleryId" element={<GalleryDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
