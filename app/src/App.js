import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Bottone from './Bottone';





function App() {
  const [alunni, setAlunni] = useState([]);
  async function loadAlunni (){
    const response = await fetch('http://localhost:8080/alunni', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const a = await response.json();
    setAlunni(a);
  }

  return (
    <div className="App">
      <button onClick={loadAlunni}>carica alunni</button>
    {
      alunni.map((alunno) => (
        <Bottone alunno = {alunno} key={alunno.id}/>
      ))
    }
    </div>
  );
}

export default App;
