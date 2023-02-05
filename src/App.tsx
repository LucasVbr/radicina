import React from 'react';
import './App.css';
import HeaderBanner from './components/HeaderBanner';
import GameContent from './components/GameContent';
import questions from "./questions.json";
import type Question from './models/Question';

export default function App() {


    const randomQuestion: Question = questions[Math.floor(Math.random() * questions.length)] as Question;

  return (
    <div className={"App"}>
      <HeaderBanner/>
      <GameContent question={randomQuestion}/>
    </div>
  );
}