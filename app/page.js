'use client'

import {useState} from "react"
import Card from "@/components/card"


export default function Home({searchParams}) {

  const [isVisible, setIsVisible] = useState(true);
  const [names, setNames] = useState(['Andres', 'Patricia', 'Daniel', 'Martim']);  
  const name = "Andres";

  const handleClick = () => {
    setIsVisible(!isVisible);
  }

  const handleAdd = () => {
    setNames([...names, 'New element!'])
  }


  const cards = isVisible && names.map((name, index) => <Card key={index}>{name}</Card>)

  console.log(searchParams)
  if (searchParams.error) throw new Error('Hello, there was an error!')

  return (
    <>
    <div className="space-y-4">
      
    <div>Hello, {name}</div>
      
      {cards}

      <div className="flex space-x-4">
      <button onClick={ handleClick }>
        {isVisible ? 'Hide ' : 'Show' }
      </button>
      <button onClick={handleAdd}>Add</button>
      </div>
    </div>
    </>
  );
}
