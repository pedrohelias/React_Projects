import {Button, Text, View} from "react-native";

import {useState} from "react"

export default function CartelaBingo(props) {

    const [frase,setFrase] = useState('')
    const [valorRandom, setValorrandom] = useState(0)
    
    const random = Math.floor(Math.random() * props.cartela.length) //vai gerar um número aleatorio entre as possibilidades e vai lançar uma pergunta e uma resposta
    
    const novoValor = (argumento) => {
        setValorrandom(argumento) //gera um novo valor para a variavel aleatoria
    }
   
    const resetaValor = () => {
        setValorrandom(0) //seta o valor da variavel aleatoria para zero
    }
    

    return (
        <View>
            <Text>{frase}</Text>
            
            <Button title="teste" onPress={() => {
                const random = Math.floor(Math.random() * props.cartela.length) //vai gerar um número aleatorio entre as possibilidades e vai lançar uma pergunta e uma resposta

                novoValor(random) //vai adicionar um valor randomico para que seja possivel escolher um numero da cartela
            }}/>
            
            <Text>estamos olhando o nó {valorRandom} com o valor de {props.cartela[valorRandom].numero}</Text>
            
            <Text>a variavel randomica esta setada em {valorRandom}</Text>
            
            <Button title="Reset" onPress={() => {
                resetaValor() 
            }}/> 

            <Text>Monitorando o lenght, total {props.cartela.length}</Text>
        
        </View>

        
// Os textos vao mostrar o que ha dentro do objeto Cartela
        
    );
    
}