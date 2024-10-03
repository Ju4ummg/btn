import { useState } from "react";
import "./styles.css"

function Button(){
  const [clicks, setClicks] = useState(0);
  const [probability, setProbability] = useState(0);
  const [reset, setReset] = useState(false);
  const [maxClicks, setMaxClicks] = useState(0);

  const handleClick = () => {
    const randomNumber = Math.random() * 100; // Gera um número aleatório entre 0 e 100

    if (randomNumber < probability) {
      setReset(true); // Reseta se a probabilidade for atingida
      setProbability(0); // Reseta a probabilidade
      setMaxClicks(prevMax => Math.max(prevMax, clicks));
      setClicks(0); // Reseta os cliques
    } else {
      setReset(false); // Não reseta
      setClicks(prev => prev + 1); // Incrementa cliques
      setProbability(prev => Math.min(prev + 1, 100)); // Aumenta a probabilidade até 100%
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Clique aqui</button>
      {reset && <p>Botão resetado!</p>}
      <p>Cliques: {clicks}</p>
      <p>Maior quantidade de cliques: {maxClicks}</p>
    </div>
  );
}

export default Button;