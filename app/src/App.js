import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Bottone from './Bottone';





function App() {
  const [alunni, setAlunni] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showform, setShowform] = useState(false);

  useEffect(() => {
    loadAlunni();
  }, []);


  async function loadAlunni (){
    setIsLoading(true);
    const response = await fetch('http://localhost:8080/alunni', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const a = await response.json();
    setAlunni(a);
    setIsLoading(false);
  }

  return (
    <div className="App">
    {
      isLoading ? <p>Caricamento in corso...</p>:
      alunni.map((alunno) => (
        <Bottone alunno = {alunno} key={alunno.id} loadAlunni={loadAlunni}/>
      ))
    }
    <button onClick = {() => setShowform(true)}>Inserisci nuovo alunno</button>
    {
      showform && <div>form</div>
    }
    </div>
  );
}

export default App;
