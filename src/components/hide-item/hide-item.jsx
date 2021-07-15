import { useState } from "react";

const HideItem = (props) => {
    const {children} = props;   // props réservé -> Contenu de la balise

    const [visible, setVisible] = useState(true);

    const handleVisibility = () => {
        setVisible(v => !v);
    }

    return (
        <div onClick={handleVisibility}>
            {visible ? (
                children
            ) : (
                'Caché'
            )}
        </div>
    );
}

export default HideItem;