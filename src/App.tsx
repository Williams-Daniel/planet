import React, { useState } from "react";
import styled from "styled-components";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import vid from "./singer4ever.mp4";

const App = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [showVideo, setshowVideo] = useState<boolean>(false);
  const [myVideo, setmyVideo] = useState([
    {
      title: "First video",
      details: "Video Description",
      video: "video1",
      bg: "#4c98e9",
    },
    {
      title: "Second video",
      details: "Video Description",
      video: "video1",
      bg: "#54b6f9",
    },
    {
      title: "Third video",
      details: "Video Description",
      video: "video1",
      bg: "#2f6df7",
    },
  ]);
  const onToggled = () => {
    setToggle(!toggle);
  };
  const onshowVideo = () => {
    setshowVideo(!showVideo);
  };
  return (
    <Container>
      <Main>
        <Text>Welcome To CodeLab</Text>
        {myVideo.map((props) => (
          <Holder>
            <Video bg={props.bg}>
              <Div onClick={onshowVideo}>
                <BsFillPlayCircleFill size={30} />
              </Div>
            </Video>
            <Content>
              <Div>{props.title}</Div>
              <Divsub>{props.details}</Divsub>
            </Content>
            <Button
              onClick={() => {
                onToggled();
              }}
            >
              {toggle ? (
                <MdOutlineFavorite size={30} color="red" />
              ) : (
                <MdOutlineFavoriteBorder size={30} />
              )}
            </Button>
          </Holder>
        ))}
        {showVideo ? (
          <Div2>
            <BackDrop onClick={onshowVideo}>
              <Icon size={30} onClick={onshowVideo} />
            </BackDrop>
            <PlayVideo src={vid} controls autoPlay playsInline />
          </Div2>
        ) : null}
      </Main>
    </Container>
  );
};

export default App;

const Div2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled(AiOutlineClose)`
  position: absolute;
  right: 30px;
  top: 30px;
  transition: all 350ms;
  color: red;
  :hover {
    cursor: pointer;
    transform: scale(1.09);
  }
`;
const BackDrop = styled.div`
  /* background: rgba(255, 255, 255, 0.25) ; */
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  display: flex;
  justify-content: center;
  align-items: center;
`;
const PlayVideo = styled.video`
  width: 400px;
  height: 300px;
  border-radius: 10px;
  background-color: black;
  overflow: hidden;
  object-fit: cover;
  z-index: 10;
  position: absolute;
  top: 80px;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(126, 172, 221);
  background: linear-gradient(
    90deg,
    rgba(126, 172, 221, 1) 0%,
    rgba(211, 247, 250, 1) 55%,
    rgba(171, 215, 223, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.div`
  width: 800px;
  min-height: 450px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  overflow: hidden;
  position: relative;
`;
const Text = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
const Holder = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;
const Video = styled.div<{ bg: string }>`
  width: 200px;
  height: 120px;
  background-color: ${({ bg }) => bg};
  color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  div {
    color: rgba(225, 225, 225, 0.3);
  }

  :hover {
    div {
      cursor: pointer;
      color: rgba(225, 225, 225, 0.7);
    }
  }
`;
const Content = styled.div`
  flex: 1;
  margin-left: 10px;
`;
const Button = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: rgba(225, 225, 225, 0.5);
    cursor: pointer;
  }
`;
const Div = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
`;
const Divsub = styled.div``;
