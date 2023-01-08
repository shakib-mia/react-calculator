import './App.css';
import Button from './components/Button/Button';
import { useEffect, useState } from 'react'

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
  const plusIcon = "+";
  const minusIcon = "-";

  const symbols = [
    leftArrow,"!",
    multiplyIcon, divideIcon,
    "+","-",
    "%","="
  ]

  const trig = [
    'sin', 'cos', 'tan', 'cot', 'sec', 'cosec'
  ]

  const [number, setNumber] = useState("");
  useEffect(() => {
    number === Infinity && setNumber(<>&infin;</>);
  }, [number])

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

  const calculateTrigon = (operation, number) => {
    const value = number.slice(operation.length, number.length);
    // console.log(value);
    const rads = Math.PI  * parseFloat(value) / 180
    // console.log(rads, value);
    const { sin, cos, tan } = Math;
    const result = operation === "sin" ? sin(rads) 
                    : operation === "cos" ? cos(rads) 
                    : operation === 'tan' ? tan(rads)
                    : operation === "cot" ? 1 / tan(rads) 
                    : operation === "sec" ? 1 / cos(rads) 
                    : 1 / sin(rads);
    return Math.round(result * 100000000) / 100000000
    // operation === "sin" && console.log(Math.sin(rads))
  }

  const calculate = (item) => {
    item !== "=" && item !== <>&times;</> && setNumber(number + item);
    const result = number.split("").indexOf(multiplyIcon) !== -1 
    ? 
    number.split(multiplyIcon).map(item => item)[0] * number.split(multiplyIcon).map(item => item)[1] 
    : number.split("").indexOf(divideIcon) !== -1 ? number.split(divideIcon).map(item => item)[0] / number.split(divideIcon).map(item => item)[1] 
    : number.split("").indexOf(plusIcon) !== -1 ? eval(number) 
    : number.split("").indexOf(minusIcon) !== -1 ? eval(number) 
    : trig.map(tri => number.includes(tri) && calculateTrigon(tri, number))
    

    item === '=' && setNumber(result);
    item === '!' && factorial();
    item === "←" && setNumber(number.slice(0, number.length - 1));
    item === "%" && setNumber(number.split(multiplyIcon)[0] * number.split(multiplyIcon)[1] / 100)
    // item === '=' && trig.map(tri => number.includes(tri) && setNumber(calculateTrigon(tri, number)))
  }

  

  return (
    <div className="w-11/12 md:w-1/2 lg:w-1/5 mx-auto bg-[#303136] my-10 rounded-[5px]">
      <div className='h-[150px] flex items-center justify-end'>
        <h2 className="p-5 text-white text-[50px] overflow-x-auto" id="screen">
          {number ? number : "0"}
        </h2>
      </div>
      <div className="grid grid-cols-6 gap-x-2 p-5 pb-0">
        {trig.map(item => <Button 
            key={item} 
            number={item} 
            bgColor="#494a51"
            className="p-0"
            onclick={() => setNumber(number + item)} 
          />)}
      </div>
      <div className='flex p-5 rounded-b-[5px] gap-2'>
        <main className="grid grid-cols-3 w-3/5">
          {characters.map(item => <Button 
            key={item} 
            number={item} 
            bgColor="#494a51"
            leftArrow={leftArrow}
            className="px-[15px] py-[5px]"
            onclick={() => {
              item !== "C" && setNumber(number + item);
              item === "C" &&  setNumber("");
              item === <>&times;</> && setNumber(number + "*")
            }} 
          />)}
        </main>
        <main className="grid grid-cols-2 w-2/5">
          {symbols.map(item => <Button 
            key={item} 
            className="px-[15px] py-[5px]"
            number={item}
            onclick={() => calculate(item)}
          />)}
        </main>
      </div>
    </div>
  );
}

export default App;
