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
        if(lifeCount === 0){
            setGameMsg("Game Over! Please refresh to play again.")
            return
        }
    },[lifeCount])

    const generateRandomIds = ()=>{
        const firstDraw= Math.floor(Math.random() * 3)
        const secondDraw= Math.floor(Math.random() * 3)
        const thirdDraw= Math.floor(Math.random() * 3)
        
        if(lifeCount === 0){
            setGameMsg("Please restart to play again!")
            return
        }
        else if(firstDraw === secondDraw && secondDraw === thirdDraw){
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

    const resetGame =() =>{
        window.location.reload();
    }


  return (
    <div className='flex flex-col bg-slate-800 h-screen w-screen items-center'>
        {/* Game message */}
        <div className='w-full bg-slate-400 p-2 rounded-xl text-center text-2xl'>{gameMsg}</div>
        {/* Lottery Box */}
        <div className='flex flex-col gap-5 bg-green-400 rounded-xl m-20 p-6 h-78 w-120'>
            {/* Life line */}
            <div className='flex bg-slate-300 w-27 h-45 text-3xl rounded-xl p-2'>
                {  lifeCount >= 1 &&    <BiHeart color="red"/> }
                {  lifeCount >= 2 &&    <BiHeart color="red"/> }
                {  lifeCount >= 3 &&    <BiHeart color="red"/> }
            </div>
            {/* Lottery roll box */}
            <div className='flex bg-slate-600 rounded-xl p-5 h-full w-full'> 
                <div className='flex gap-2 h-full bg-blue-500 w-full rounded-xl p-2'>
                    <div className='bg-white h-full w-full content-center justify-items-center text-5xl rounded-xl'>
                        {items[randomId[0]].icon}
                    </div>

                    <div className='bg-white h-full w-full content-center justify-items-center text-5xl rounded-xl'>
                        {items[randomId[1]].icon}
                    </div>

                    <div className='bg-white h-full w-full content-center justify-items-center text-5xl rounded-xl'>
                        {items[randomId[2]].icon}
                    </div>
                </div>
                        
                <button onClick={generateRandomIds} className='rotate-90 cursor-pointer'>
                    <img src="https://media.istockphoto.com/id/1126662450/vector/lever-icon-trendy-lever-logo-concept-on-white-background-from-industry-collection.jpg?s=612x612&w=0&k=20&c=q_DX1KNeq92h49Cj0qT5TKZ1uaz3use8JhWBCDRXvGM="
                    width={110}
                    height={200}
                    className='rounded-xl'
                    />
                </button>  
            </div>
            {/* Restart button */}
            <button onClick={resetGame} className='bg-red-400 rounded-xl w-full h-full cursor-pointer'>Restart</button>
        </div>
    </div>
  )
}

export default AdvanceLottery