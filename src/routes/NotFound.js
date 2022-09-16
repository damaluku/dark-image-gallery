import React, { useEffect } from "react";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 10000);
  }, [navigate]);

  return (
    <Container>
      <Heading>
        <h1>page not found</h1>
        <Link to="/">return home</Link>
      </Heading>

      <SplineBox>
        <Spline scene="https://prod.spline.design/ddbKq2WUSCypj1Gt/scene.splinecode" />
      </SplineBox>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: grid;
  place-content: center;
`;

const Heading = styled.div`
  color: white;
  z-index: 1;
  font-size: 3rem;
  text-align: center;
  text-transform: capitalize;
  display: inline-block;
  color: aqua;

  a {
    color: aqua;
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
  }
`;

const SplineBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
`;
