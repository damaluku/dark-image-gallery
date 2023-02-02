import React from "react";
import styled from "styled-components";

const ImageCard = ({ collection }) => {
  const tags = collection.tags.split(",");

  return (
    <CardContainer>
      <ImageContainer>
        <img src={collection.webformatURL} alt={collection.user} />
      </ImageContainer>

      <CardDetails>
        <span>Photo by {collection.user}</span>
        <ul>
          <li>
            <strong>Views:</strong> {collection.views}
          </li>
          <li>
            <strong>downloads:</strong> {collection.downloads}
          </li>
          <li>
            <strong>likes:</strong> {collection.likes}
          </li>
        </ul>
      </CardDetails>
      <Tags>
        {tags.map((tag, index) => {
          return <span key={index}>#{tag}</span>;
        })}
      </Tags>
    </CardContainer>
  );
};

export default ImageCard;

const CardContainer = styled.div`
  width: 100%;
  transition: all 0.3s;
  box-shadow: 2px 2px 10px 3px black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;

  :hover {
    transform: scale(0.98);
    /* mix-blend-mode: overlay; */
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 350px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardDetails = styled.div`
  padding: 0.5rem;

  span {
    color: purple;
    font-weight: bold;
  }

  ul {
    list-style: none;

    li {
      margin: 1rem 0 0 0;
      text-transform: capitalize;
    }
  }
`;

const Tags = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  span {
    padding: 5px;
    background-color: lightgray;
    border-radius: 5px;
    text-transform: capitalize;
    font-weight: bold;
  }
`;
