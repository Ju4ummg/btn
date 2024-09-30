import { useState } from "react";
import "./styles.css"

function Button(){
    const [probability, setProbability] = useState(0);
    const [reset, setReset] = useState(false);
    const [maxClicks, setMaxClicks] = useState(0);
    
  const handleClick = () => {
    const randomNumber = Math.random() * 100; // Gera um número aleatório entre 0 e 100
    if (randomNumber < probability) {
      setReset(true); // Reseta se a probabilidade for atingida
      setProbability(0); // Reseta a probabilidade
    } else {
      setReset(false); // Não reseta
      setProbability(prev => Math.min(prev + 1, 100)); // Aumenta a probabilidade até 100%
      
      if (probability >= maxClicks){
        setMaxClicks(probability + 1);
      }
    }

  };
  
  return (
    <div>
      <button onClick={handleClick}>Clique aqui</button>
      {reset && <p>Botão resetado!</p>}
      <p>Cliques: {probability} </p>
      <p>Maior quantidade de cliques: {maxClicks}</p>
    </div>
  );
}
export default Button;