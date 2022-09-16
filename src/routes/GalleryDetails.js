import React from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const GalleryDetails = () => {
  let params = useParams();

  const value = useSelector((state) => state.collection.value);

  const getDetails = (id) => {
    return value.find((userId) => userId.id === id);
  };

  let details = getDetails(parseInt(params.galleryId));

  return (
    <Container>
      <ImageContainer>
        <img src={details.webformatURL} alt={details.user} />
      </ImageContainer>
      <AboutContainer>
        <div>name: {details.user}</div>
        <div>views: {details.views}</div>
        <div>downloads: {details.downloads}</div>
        <div>likes: {details.likes}</div>
        <div>comments: {details.comments}</div>
        <div>collections: {details.collections}</div>
        <Link to="/">Return Home</Link>
      </AboutContainer>
    </Container>
  );
};

export default GalleryDetails;

const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  border-radius: 30px;
  border: 3px solid black;
  padding: 0;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 350px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const AboutContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem;
  grid-gap: 1rem;
  background-color: white;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }

  div {
    text-transform: capitalize;
    font-weight: bold;
    text-align: center;

    @media screen and (max-width: 700px) {
      text-align: left;
      margin-bottom: 0.5rem;
    }
  }

  a {
    color: purple;
    text-decoration: none;
    transition: all 0.3s;
    font-weight: bold;
    text-align: center;
    grid-column: span 2;

    :hover {
      transform: translateX(5px);
    }
  }
`;
