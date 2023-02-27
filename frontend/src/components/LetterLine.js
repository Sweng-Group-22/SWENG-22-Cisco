import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import '../styles/LetterLine.css'
export default function LetterLine() {
  return (
    <>
        <div className='letter-line-container-1'>
            <div className='letter-line-container-items'>
                <Link to={'A'}> A </Link>
                <Link to={'B'}> B </Link>
                <Link to={'C'}> C </Link>
                <Link to={'D'}> D </Link>
                <Link to={'E'}> E </Link>
                <Link to={'F'}> F </Link>
                <Link to={'G'}> G </Link>
                <Link to={'H'}> H </Link>
                <Link to={'I'}> I </Link>
                <Link to={'J'}> J </Link>
                <Link to={'K'}> K </Link>
                <Link to={'L'}> L </Link>
                <Link to={'M'}> M </Link>
                <Link to={'N'}> N </Link>
                <Link to={'O'}> O </Link>
                <Link to={'P'}> P </Link>
                <Link to={'Q'}> Q </Link>
                <Link to={'R'}> R </Link>
                <Link to={'S'}> S </Link>
                <Link to={'T'}> T </Link>
                <Link to={'U'}> U </Link>
                <Link to={'V'}> V </Link>
            </div>
        </div>
        <div className='letter-line-container-2'>
            <Link to={'W'}> W </Link>
            <Link to={'X'}> X </Link>
            <Link to={'Y'}> Y </Link>
            <Link to={'Z'}> Z </Link>
        </div>
    </>
  )
}
