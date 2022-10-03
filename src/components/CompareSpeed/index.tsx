import React from 'react'
import ProgressCard from './progress-card';
import './style.css'

const Comparer = () => {
    return (
        <div className='content-cards'>
            <div className='progress-card'>
                <ProgressCard 
                title="3G"
                finalText="eu nei sei pq eu ainda existo"
                delay={800} 
                sault={10} />
            </div>
            <div className='progress-card'>  
                <ProgressCard
                title="5G"
                finalText='nada de novo, sou o melhor'
                delay={200} 
                sault={10} />
            </div>  
            <div className='progress-card'>
                 <ProgressCard
                 title="4G"
                 finalText='eu tentei :(, te espero no metro' 
                 delay={500} 
                 sault={10} />
            </div>  
        </div>  
    );
}

export default Comparer;
