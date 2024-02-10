import {useEffect, useState} from 'react'

export const Advice = () => {
    const [advice, setAdvice] = useState("vanakkam di mappla");
    const[count, setCount] = useState(0);

    async function getAdvice(){
        const res = await fetch("https://api.adviceslip.com/advice")

        //console.log(res);

        const data = await res.json();
      //  console.log(data);
      setAdvice(data.slip.advice);
      setCount((c)=> c + 1);
    }

    useEffect(function (){
        getAdvice();

    },[]);



  return (
    <div>
        <h3>{advice}</h3>
        <button onClick={getAdvice}>Get Advice</button>
        <p>you have read <b>{count}</b>  of advice</p>
    </div>
  )
}
