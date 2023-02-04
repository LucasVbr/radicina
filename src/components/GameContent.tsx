import "./GameContent.css";
import React, {useEffect, useState} from 'react';
import type Question from '../models/Question';

type Props = {
  question: Question
}

export default function GameContent(props: Props) {
  const { question } = props;

  const [nbChar, setNbChar] = useState(question.resultat.length)
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  // On load page
  useEffect(() => {
    document.documentElement.style.setProperty('--n-char', nbChar.toString());
  }, [])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {setInputValue(event.target.value);}
  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {

    if (event.key !== "Enter") {
      setError(false);
      return;
    }

    if (question.resultat.toLowerCase() !== inputValue.toLowerCase()) {
      setError(true)
      return;
    }

    // Ajoute un point + change de mot
    return;
  }

  return (
      <div className={'GameContent'}>
        <div className="container">
          <p className={"question"}>{question.intitule}</p>
          <p className={'tag'}>La définition ?</p>
          <input className={error ? "error" : ""} maxLength={nbChar} onKeyDown={handleSubmit} onChange={handleInputChange}/>
        </div>
      </div>
  );
}