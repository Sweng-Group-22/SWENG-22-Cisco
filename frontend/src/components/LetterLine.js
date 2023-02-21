import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import '../styles/LetterLine.css'
export default function LetterLine() {
  return (
    <>
        <div className='letter-line-container-1'>
            <div className='letter-line-container-items'>
                <Link to={'/A'}> A </Link>
                <Link to={'B'}> B </Link>
                <Link to={'C'}> C </Link>
                <Link to={'browse/D'}> D </Link>
                <Link to={'browse/E'}> E </Link>
                <Link to={'browse/F'}> F </Link>
                <Link to={'browse/G'}> G </Link>
                <Link to={'browse/H'}> H </Link>
                <Link to={'browse/I'}> I </Link>
                <Link to={'browse/J'}> J </Link>
                <Link to={'browse/K'}> K </Link>
                <Link to={'browse/L'}> L </Link>
                <Link to={'browse/M'}> M </Link>
                <Link to={'browse/N'}> N </Link>
                <Link to={'browse/O'}> O </Link>
                <Link to={'browse/P'}> P </Link>
                <Link to={'browse/Q'}> Q </Link>
                <Link to={'browse/R'}> R </Link>
                <Link to={'browse/S'}> S </Link>
                <Link to={'browse/T'}> T </Link>
                <Link to={'browse/U'}> U </Link>
                <Link to={'browse/V'}> V </Link>
            </div>
        </div>
        <div className='letter-line-container-2'>
            <Link to={'browse/W'}> W </Link>
            <Link to={'browse/X'}> X </Link>
            <Link to={'browse/Y'}> Y </Link>
            <Link to={'browse/Z'}> Z </Link>
        </div>
    </>
  )
}
