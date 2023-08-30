import React, { Component, useState } from "react";
import styled from "styled-components";
import neptune from "../assets/neptune.svg";

const Earth = () => {
  const bottomData = [
    { id: 1, text1: "ROTATION TIME", text2: "16.08 HOURS" },
    { id: 2, text1: "REVOLUTION TIME", text2: "164.79 YEARS" },
    { id: 3, text1: "RADIUS", text2: "24,622 KM" },
    { id: 3, text1: "AVERAGE TEMP", text2: "-201°C" },
  ];
  const [img, setImg] = useState<boolean>(true);
  const [img1, setImg1] = useState<boolean>(false);
  const [img2, setImg2] = useState<boolean>(false);

  const onToggle1 = () => {
    setImg(true);
    setImg1(false);
    setImg2(false);
  };

  const onToggle2 = () => {
    setImg(false);
    setImg1(true);
    setImg2(false);
  };

  const onToggle3 = () => {
    setImg(false);
    setImg1(false);
    setImg2(true);
  };
  return (
    <Container>
      <Main>
        <Top>
          <Image src={neptune} />
          <Content>
            <Title>Neptune</Title>
            {img ? (
              <Body>
                Neptune is one of two ice giants in the outer solar system (the
                other is Uranus). Most (80% or more) of the planet's mass is
                made up of a hot dense fluid of "icy" materials – water,
                methane, and ammonia – above a small, rocky core. Of the giant
                planets, Neptune is the densest.
              </Body>
            ) : img1 ? (
              <Body>
                Structure. Neptune is one of two ice giants in the outer solar
                system (the other is Uranus). Most (80% or more) of the planet's
                mass is made up of a hot dense fluid of "icy" materials – water,
                methane, and ammonia – above a small, rocky core. Of the giant
                planets, Neptune is the densest.
              </Body>
            ) : img2 ? (
              <Body>
                Neptune does not have a solid surface. Its atmosphere (made up
                mostly of hydrogen, helium, and methane) extends to great
                depths, gradually merging into water and other melted ices over
                a heavier, solid core with about the same mass as Earth.
              </Body>
            ) : null}

            <Button onClick={onToggle1} bg={img ? "tt" : ""}>
              Overview
            </Button>
            <Button onClick={onToggle2} bg={img1 ? "tt" : ""}>
              Internal structure
            </Button>
            <Button onClick={onToggle3} bg={img2 ? "tt" : ""}>
              Surface geology
            </Button>
          </Content>
        </Top>

        <Bottom>
          {bottomData.map(({ id, text1, text2 }) => (
            <Card key={id}>
              <Text>{text1}</Text>
              <BigText>{text2}</BigText>
            </Card>
          ))}
        </Bottom>
      </Main>
    </Container>
  );
};

export default Earth;

const Title = styled.div`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 60px;
`;
const Body = styled.div`
  width: 300px;
  color: #323232;
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 30px;
`;
const Button = styled.div<{ bg: string }>`
  width: 300px;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid silver;
  padding-left: 20px;
  margin: 10px 0;
  transition: all 350ms;
  text-transform: uppercase;
  font-weight: ${({ bg }) => (bg ? "700" : "normal")};
  color: ${({ bg }) => (bg ? "white" : "black")};
  background-color: ${({ bg }) => (bg ? "darkorange" : "")};

  :hover {
    background-color: grey;
    cursor: pointer;
  }
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 200px;
  margin-right: 70px;
`;

const Content = styled.div`
  margin-left: 70px;
`;

const BigText = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const Text = styled.div``;

const Card = styled.div`
  width: 190px;
  height: 100px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 20px;
  margin: 0 10px;
`;

const Bottom = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  /* background-color: red; */
`;

const Main = styled.div`
  width: 1000px;
  min-height: 550px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* background-color: red;  */
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgb(126, 172, 221);
  background: linear-gradient(
    90deg,
    rgba(126, 172, 221, 1) 0%,
    rgba(211, 247, 250, 1) 55%,
    rgba(171, 215, 223, 1) 100%
  );
`;
