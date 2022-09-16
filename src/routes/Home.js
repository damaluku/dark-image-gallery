import React, { useEffect, useState } from "react";
import ImageCard from "../components/ImageCard";
import ImageSearch from "../components/ImageSearch";
import styled from "styled-components";
import blend from "../assets/blend.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { myCollection } from "../store/collectionSlice/collectionSlice";

const Home = () => {
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(true);
        setCollections(data.hits);
        dispatch(myCollection(data.hits));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [term, dispatch]);

  return (
    <>
      <Container>
        <ImageSearch searchText={(text) => setTerm(text)} />

        {!isLoading && collections.length === 0 && <h1>No images found</h1>}

        {isLoading ? (
          <LoadContainer>
            <Loader />
          </LoadContainer>
        ) : (
          <GridContainer>
            {collections.map((collection) => {
              return (
                <Link to={`/gallery/${collection.id}`}>
                  <ImageCard key={collection.id} collection={collection} />;
                </Link>
              );
            })}
          </GridContainer>
        )}
      </Container>
    </>
  );
};

export default Home;

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: gray;
  background-image: url(${blend});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-blend-mode: darken;
`;

const LoadContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.span`
  position: relative;
  width: 120px;
  height: 90px;
  margin: 0 auto;

  ::before {
    content: "";
    position: absolute;
    bottom: 30px;
    left: 50px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: black;
    animation: loading-bounce 0.5s ease-in-out infinite alternate;
  }

  ::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 7px;
    width: 45px;
    border-radius: 4px;
    box-shadow: 0 5px 0 blue, -35px 50px 0 blue, -70px 95px 0 blue;
    animation: loading-step 1s ease-in-out infinite;
  }

  @keyframes loading-bounce {
    0% {
      transform: scale(1, 0.7);
    }
    40% {
      transform: scale(0.8, 1.2);
    }
    60% {
      transform: scale(1, 1);
    }
    100% {
      bottom: 140px;
    }
  }
  @keyframes loading-step {
    0% {
      box-shadow: 0 10px 0 rgba(0, 0, 0, 0), 0 10px 0 blue, -35px 50px 0 blue,
        -70px 90px 0 blue;
    }
    100% {
      box-shadow: 0 10px 0 blue, -35px 50px 0 blue, -70px 90px 0 blue,
        -70px 90px 0 rgba(0, 0, 0, 0);
    }
  }
`;

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem 1rem;
  padding: 1rem;

  a {
    text-decoration: none;
    color: #000;
  }
`;
