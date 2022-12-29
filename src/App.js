import './App.css';
import Button from './components/Button/Button';
import { useState } from 'react'

function App() {
  const characters = [
    7,8,9,
    4,5,6,
    1,2,3,
    ".",0,"C"
  ];

  const multiplyIcon = "×";
  const divideIcon = "÷"
  const leftArrow = "←";

  const symbols = [
    leftArrow,"!",
    multiplyIcon, divideIcon,
    "+","-",
    "%","="
  ]

  const [number, setNumber] = useState("");

  const factorial = () => {
    const numbers = [];
    let fact = 1;
    for (let index = number; index > 0; index--) {
      const result = parseFloat(index);
      numbers.push(result);
    }

    for (const number of numbers) {
      fact = fact * number
    }
    setNumber(fact);
  }

  return (
    <div className="w-11/12 md:w-1/2 lg:w-1/5 mx-auto bg-[#303136] my-10 rounded-[5px]">
      <div className='h-[150px] flex items-center justify-end'>
        <h2 className="p-5 text-white text-[50px] overflow-x-auto">
          {number ? number : "0"}
        </h2>
      </div>
      <div className='flex gap-4 p-5 rounded-b-[5px]'>
        <main className="grid grid-cols-3 gap-4 w-3/5">
          {characters.map(item => <Button 
            key={item} 
            number={item} 
            bgColor="#494a51"
            leftArrow={leftArrow}
            onclick={() => {
              item !== "C" && setNumber(number + item);
              item === "C" &&  setNumber("");
              item === <>&times;</> && setNumber(number + "*")
            }} 
          />)}
        </main>
        <main className="grid grid-cols-2 gap-4 w-2/5">
          {symbols.map(item => <Button 
            key={item} 
            number={item} 
            bgColor="#f00"
            onclick={e => {
              item !== "=" && item !== <>&times;</> && setNumber(number + item)
              item === '=' && setNumber(number.split("").indexOf(multiplyIcon) !== -1 ? number.split(multiplyIcon).map(item => item)[0] * number.split(multiplyIcon).map(item => item)[1] : number.split("").indexOf(divideIcon) !== -1 ? number.split(divideIcon).map(item => item)[0] / number.split(divideIcon).map(item => item)[1] : eval(number));
              item === '!' && factorial();
              item === "←" && setNumber(number.slice(0, number.length - 1));
              item === "%" && setNumber(number.split(multiplyIcon)[0] * number.split(multiplyIcon)[1] / 100)
            }} 
          />)}
        </main>
      </div>
    </div>
  );
}

export default App;
