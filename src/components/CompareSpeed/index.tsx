import React from 'react'
import './styles.scss'
import ProgressCard from './progress-card';
import Typography from "@mui/material/Typography";

const CompareSpeed = () => {
  return (
    <div>
      <Typography id="title" variant="h4" gutterBottom>
        Qual a diferença entre a velocidade do seu plano?
      </Typography>
      <Typography id="subtitle" variant="overline" gutterBottom>
        Nós mostramos!
      </Typography>
      {/*Chart component about 3, 4 and 5G*/}
      <div className='content'>
        <div className='progress'>
          <h1>5G</h1>
          <ProgressCard
            title="5G"
            finalText="Nada de novo! Claro que sou o melhor."
            delay={200}
            sault={10} />
        </div>
        <div className='progress'>
          <h1>4G</h1>
          <ProgressCard
            title="4G"
            finalText="Eu tentei. Nos vemos no metro."
            delay={500}
            sault={10} />
        </div>
        <div className='progress'>
          <h1>3G</h1>
          <ProgressCard
            title="3G"
            finalText="Me perdoe, estou dando o meu melhor. :("
            delay={800}
            sault={10} />
        </div>
      </div>
    </div>
  );
}

export default CompareSpeed;
