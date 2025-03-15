import React from 'react'
import { Meera_Inimai } from 'next/font/google';

interface Prop {
    text: string;
}

const meeraInimai = Meera_Inimai({
  subsets: ['latin'],
  weight: ['400']
});
function HeadingCTA({text}: Prop) {
  return (
    <h2 className={`${meeraInimai.className} text-lg lg:text-xl xl:text-2xl 2xl:text-4xl text-[#898F2C]`}>{text}</h2>
  )
}

export default HeadingCTA