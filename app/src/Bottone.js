import {useState} from 'react';

function Bottone(props){
    const [contatore, setContatore] = useState(0);

    function incrementa(){
        setContatore(contatore +1);
    }
    let alunno = props.alunno;

    return (
        <div>
            {alunno.nome} {alunno.cognome}
        <button onClick={incrementa}>
            {contatore}
        </button>
        </div>
    );
}

export default Bottone;