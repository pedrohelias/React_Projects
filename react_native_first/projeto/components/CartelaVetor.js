import {Button, Text, View} from "react-native";

import {useState} from "react"

export default function CartelaVetor(props) {

    /*
    const [vetor,setVetor] = useState([])
    const [valorRandom, setValorrandom] = useState(0)
    
    const random = Math.floor(Math.random() * props.cartela.length) //vai gerar um número aleatorio entre as possibilidades e vai lançar uma pergunta e uma resposta
    
    const novoValor = (argumento) => {
        setValorrandom(argumento) //gera um novo valor para a variavel aleatoria
    }
    
    const resetaValor = () => {
        setValorrandom(0) //seta o valor da variavel aleatoria para zero
    }
    */

    //const vetor = props.cartelaVetor 
    const cartela = [5,10,6,2,3,4,1]
    const vetorOrigem = [1,2,3,4,5,6,7,8,9,10]
    
    const [novaArray, setNovaArray] = useState([])
    const [novaCartela, setNovaCartela] = useState([])
    
    //const vetorSorteado = []

    const geraNumero = (origem) => {
        const random = Math.floor(Math.random() * origem.lenght)
    }
    
    const valorEncontrado = (valorAleatorio, cartela) => {
      
        const found = cartela.find(element => element === valorAleatorio);
        if(found != 0){
            return found
        }
    }

    const tiraValor = (valorDetectado, arraySorteio, arrayCartela) => {
        console.log(arrayCartela + " antes de retirar itens")
        console.log(arraySorteio + " antes de retirar itens")
        arraySorteio.splice(arraySorteio.indexOf(valorDetectado), 1);
        arrayCartela.splice(arrayCartela.indexOf(valorDetectado), 1);
        console.log(arrayCartela + " depois de retirar itens")
        console.log(arraySorteio + " depois de retirar itens")
    }
  
    
    return (
        <View>
            <Button title="teste" onPress={() => {
                const random = Math.floor(Math.random() * vetorOrigem.length) //vai gerar um número aleatorio entre as possibilidades e vai lançar uma pergunta e uma resposta
                console.log(random)
                const valorSorteado = valorEncontrado(random, cartela)
                
                tiraValor(valorSorteado, vetorOrigem, cartela)
            }}
                />
        </View>

        
// Os textos vao mostrar o que ha dentro do objeto Cartela
        
    );
    
}