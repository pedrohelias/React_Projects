import React from 'react'
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
export default function Questoes(props) {
    
    const argumento = props.questoes

    const random = Math.floor(Math.random() * argumento.length)
    console.log(random, argumento[random])
    
    const [pergunta, setPergunta] = useState('')
    const [resposta, setResposta] = useState('')
    
    const [questao, setQuestao] = useState(argumento[random])

    const navigate = useNavigate()

    function voltar(){
       navigate('/'); 
    }
   
    
    return (
        <>  
            <div>
            {pergunta}
            <br></br>
            <button onClick={() => {
                setPergunta(questao.questao)            
            }}>botaoRevelaPergunta</button>
            </div>
            <br></br>
            <div>
            {resposta}
            <br></br>    
            <button onClick={() => {
                setResposta(questao.resposta)            
            }}>botaoRevelaResposta</button>    
            </div>
            <br></br>
            <br></br>
            <br></br>
            <button onClick={()=>{
                voltar()
            }}>Voltar para o menu</button>
        </>)
}