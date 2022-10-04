import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

interface Progress {
    title: string
    delay: number
    sault: number
    finalText: string;
};

const ProgressCard = ({ delay, sault,title, finalText }: Progress) => {
    const [value, setValue] = React.useState(0);
    const [stop, setStop] = React.useState(false);
    useEffect(() => {
        setTimeout(() => {
            let base = value;
            if (stop) return;
            if (value >= 100) {
                setValue(100);
                setStop(true);
                return;
            };
            const final = base + sault;
            console.log(final)
            setValue(final);
        }, delay);
    }, [value, delay, sault]);

    return (
        <div style={{width:'auto'}}>
            <br/>
            <CircularProgress
            color="secondary"
            size={200} 
            variant="determinate" 
            value={value} />
            <br/> 
            <br/>
            { stop ? <span>{finalText}</span> : null}
        </div>
    );
}

export default ProgressCard;
