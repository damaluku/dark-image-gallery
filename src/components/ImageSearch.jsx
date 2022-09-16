import React, { useState } from "react";
import styled from "styled-components";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Search here..."
            value={text}
            onChange={handleChange}
          />
          <button type="submit">search</button>
        </div>
      </form>
    </FormContainer>
  );
};

export default ImageSearch;

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  form {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    .form-group {
      display: flex;

      input {
        padding: 5px;
        width: 300px;
        height: 40px;
        text-transform: capitalize;
        border-radius: 3px;
        border: none;
      }

      button {
        padding: 5px 10px;
        cursor: pointer;
        text-transform: capitalize;
        border-radius: 10%;
        font-weight: bold;
        margin-left: 1rem;
        color: white;
        background-color: black;
        transition: all 0.3s;

        :hover {
          background-color: white;
          color: black;
        }

        :active {
          background-color: lightgray;
        }
      }
    }
  }
`;
