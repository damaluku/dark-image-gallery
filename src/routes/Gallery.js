import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import galleryBlend from "../assets/galleryBlend.jpg";

const Gallery = () => {
  return (
    <Container>
      <h1>Image details</h1>
      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default Gallery;

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  background-image: url(${galleryBlend});
  background-color: gray;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: darken;

  h1 {
    text-align: center;
    text-transform: capitalize;
    padding-bottom: 2rem;
    color: white;
  }

  div {
    margin: auto;

    @media screen and (max-width: 700px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 700px) {
    padding: 2rem;
  }
`;
