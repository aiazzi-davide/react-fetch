import {useState} from 'react';

function Bottone(props){
    let alunno = props.alunno;
    const [contatore, setContatore] = useState(alunno.id);

    function incrementa(){
        setContatore(contatore +1);
    }

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