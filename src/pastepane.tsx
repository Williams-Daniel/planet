import React,{useState} from "react";
import styled from "styled-components";
import {AiFillPlayCircle} from "react-icons/ai";
import {MdFavoriteBorder,MdOutlineFavorite} from "react-icons/md";


const App = ()=>{

  const data =  [
    {id:1, content:"First Video"},
    {id:2, content:"Second Video"},
    {id:3, content:"Third Video"}
  ]

const  [toggle,setToggle] = useState<boolean>(false)
const onToggled = ()=>{
  setToggle(!toggle)
}

  return (
    <Container>
      <Main>
        <Text>Welcome To CodeLab</Text>
        {data.map(({id, content})=>(<Holder key = {id}>
          <VideoClip>
            <Div>
          <AiFillPlayCircle size ={38}/>
          </Div>
            </VideoClip>
          <Content>
            <Div>{content}</Div>
            <DivSub>Video description</DivSub>
          </Content>
          <Button onClick={()=>{
            onToggled();
          }}>
            {toggle? <MdOutlineFavorite size = {27} color="red" />:<MdFavoriteBorder size = {27}/>}
          </Button>
        </Holder>))}
      </Main>
    </Container>
  );
};

export default App;

const Div = styled.div`
font-weight: 700;
margin-bottom: 5px;
`
const DivSub = styled.div`
color: silver;
`
const VideoClip = styled.div`
width: 200px;
height: 120px;
background-color:#000269;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
color: white;
transition: all 350ms;

Div {
  color: rgba(225, 225, 225, 0.3);
}

:hover {
  Div {
    cursor: pointer;
  color: rgba(225, 225, 255, 0.7)
  }
}
`

const Content = styled.div`
flex: 1;
margin-left: 10px;
`

const Button = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
transition: all 350ms;

:hover{
  background-color: rgba(225, 225, 225, 0.4);
  cursor: pointer;
}
`

const Holder = styled.div`
margin-top: 10px;
display: flex;
align-items: center;
height: 120px;

`
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: lightblue;
`
const Main = styled.div`
width: 800px;
height: 420px;
background-color: white;
border: 1px solid grey;
border-radius: 20px;
padding: 20px;
`
const Text = styled.div`
font-size: 20px;
font-weight: 700;
`