import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextElement from './components/Text';
import Container from './components/Container';
import Space from './components/Space';
import Button from './components/Button';

function App() {
  const OnBtnClick = () => console.log("HELLO THERE");
  return (
    <div>
      <Container isCentered={true}>
        <Button styled={true} bgColor="blue" color="white" animateOnHover={true} onButtonClick={OnBtnClick}>Click Here!</Button>
        <Space />
        <TextElement size={40} font="Roboto">
          Hello
        </TextElement>
      </Container>
    </div>
  );
}

export default App;
