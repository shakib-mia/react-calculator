import './App.css';
import Button from './components/Button/Button';
import {useState} from 'react'

function App() {
  const characters = [7,8,9,4,5,6,1,2,3,".",0,"C"];
  const symbols = ["+","-","*","/","=","%","^","!"]

  const [number, setNumber] = useState(0);

  return (
    <div className="w-1/2 mx-auto">
      <h2>{number}</h2>
      <div className='flex gap-4'>
        <main className="grid grid-cols-3 gap-4 w-3/5">
          {characters.map(item => <Button key={item} number={item} onclick={e => setNumber(e.target.innerText)} />)}
        </main>
        <div className="grid grid-cols-2 gap-4 w-2/5">
          {symbols.map(item => <Button key={item} number={item} onclick={e => console.log(e.target.innerText)} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
