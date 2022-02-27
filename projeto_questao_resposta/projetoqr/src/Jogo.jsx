import Questoes from './Questoes'
import React from 'react'

export default function Jogo(props) {

    const questoes =  [
        {
            questao:"Palmeiras tem mundial?",
            resposta:"Não"
        },
        {
            questao:"Flamengo tem mundial?",
            resposta:"Sim"
        },
        {
            questao:"Quem é o melhor time do Brasil?",
            resposta:"Flamengo"
        }
    ]

    return (
        <>
          <Questoes questoes = {questoes}></Questoes>
           
        </>)
}