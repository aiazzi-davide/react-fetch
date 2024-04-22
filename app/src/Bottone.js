import {useState} from 'react';

function Bottone(props){
    const [isLoading, setIsLoading] = useState(false);
    let alunno = props.alunno;
    const [contatore, setContatore] = useState(alunno.id);

    function incrementa(){
        setContatore(contatore +1);
    }

    async function cancellaAlunno(){
        setIsLoading(true);
        await fetch(`http://localhost:8080/alunni/${alunno.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        props.loadAlunni();
        setIsLoading(false);
    }

    function richiediConferma(){
        if(window.confirm('Sei sicuro di voler cancellare questo alunno?')){
            cancellaAlunno();
        }
    }
    return (
        <div>
            {alunno.nome} {alunno.cognome}
        <button onClick={incrementa}>
            {contatore}
        </button>
        {isLoading ? <p>cancellazione in corso...</p>:
        <button onClick={richiediConferma}>
            Cancella
        </button>}
        </div>
    );
}

export default Bottone;