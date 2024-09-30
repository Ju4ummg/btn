import { useState } from "react";
//((100)! / (100-x)!) / 100^x
function Button(){
    const [probability, setProbability] = useState(0);
    const [reset, setReset] = useState(false);
  const handleClick = () => {
    const randomNumber = Math.random() * 100; // Gera um número aleatório entre 0 e 100
    if (randomNumber < probability) {
      setReset(true); // Reseta se a probabilidade for atingida
      setProbability(0); // Reseta a probabilidade
    } else {
      setReset(false); // Não reseta
      setProbability(prev => Math.min(prev + 1, 100)); // Aumenta a probabilidade até 100%
    }
  };
  return (
    <div>
      <button onClick={handleClick}>Clique aqui</button>
      {reset && <p>Botão resetado!</p>}
      <p>Cliques: {probability} </p>
    </div>
  );
}
export default Button;