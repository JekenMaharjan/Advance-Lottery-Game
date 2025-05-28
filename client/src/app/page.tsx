'use client'

import React, { useEffect, useState } from 'react'
import { BiHeart } from 'react-icons/bi'
import { CiApple } from 'react-icons/ci';
import { GiCherry } from 'react-icons/gi';


const AdvanceLottery = () => {
  const [lifeCount, setLifeCount] = useState(3);
  const [randomId, setRandomId] = useState([2,2,2])
  const [gameMsg, setGameMsg] = useState("Welcome to the Lottery Game! You have 3 lives. Match all three items to win a prize!");
  const items = [
    {  icon: <GiCherry/>, displayed: false, name: "Cherry" },
    {icon: <CiApple/> , displayed: false, name: "Apple" },
    {icon: "7", displayed: false, name: "Seven" }
  ]

  useEffect(()=>{
    if(lifeCount == 0){
      setGameMsg("Game Over! Please refresh to play again.")
    }

  },[lifeCount])

  const generateRandomIds = ()=>{
    const firstDraw= Math.floor(Math.random() * 3)
    const secondDraw= Math.floor(Math.random() * 3)
    const thirdDraw= Math.floor(Math.random() * 3)
    console.log(firstDraw, secondDraw, thirdDraw)
    if(firstDraw === secondDraw && secondDraw === thirdDraw){
        if(firstDraw === 2){
           setGameMsg("You won the jackpot!")
          }else {
            setGameMsg("You won a prize!")
          }
    }else {
      if(lifeCount > 0) {
        setLifeCount( lifeCount - 1)
      }
    }

    setRandomId([firstDraw, secondDraw, thirdDraw])
  }
  return (
    <div>
      {gameMsg}
        <div className='flex gap-2 m-4'>
          {  lifeCount >= 1 &&    <BiHeart color="red"/> }
          {  lifeCount >= 2 &&    <BiHeart color="red"/> }
          {  lifeCount >= 3 &&    <BiHeart color="red"/> }
        </div>
    <div className='flex'> 
        <div className='flex gap-2 h-72 bg-blue-600 w-72 p-2'>
              <div className='bg-green-200 h-24 w-24'>
                {items[randomId[0]].icon}
              </div>
              <div className='bg-green-200 h-24 w-24'>
              {items[randomId[1]].icon}
              </div>
              <div className='bg-green-200 h-24 w-24'>
              {items[randomId[2]].icon}
              </div>
          
            </div>
            <div className='ml-[-8]'>
              <button onClick={generateRandomIds} className='rotate-90'>
                <img src="https://media.istockphoto.com/id/1126662450/vector/lever-icon-trendy-lever-logo-concept-on-white-background-from-industry-collection.jpg?s=612x612&w=0&k=20&c=q_DX1KNeq92h49Cj0qT5TKZ1uaz3use8JhWBCDRXvGM="
                width={200}
                height={200}
                />
              </button>
            </div>
    </div>
    

    </div>
  )
}

export default AdvanceLottery