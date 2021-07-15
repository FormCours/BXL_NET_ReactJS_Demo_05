import { useEffect, useState } from "react";
import moment from 'moment';

const Horloge = (props) => {

    const [now, setNow] = useState(new Date());

    const hours = moment(now).format('HH');
    const minutes = moment(now).format('mm');
    const secondes = moment(now).format('ss');
 
    useEffect(() => {
        // Code executer lors de l'arrivé du composant ou sa mise a jours
        const idTimer = setTimeout(() => {
            setNow(new Date());
            console.log('tic');
        }, 1_000);

        return () => {
            // code executer lors du retrait du composant
            clearTimeout(idTimer);
        }
    })

    return (
        <div>{hours} : {minutes} : {secondes}</div>
    );
}

export default Horloge;