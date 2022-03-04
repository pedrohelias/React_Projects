import {Button, Text, View} from "react-native";

import {useState} from "react"

export default function CartelaBingo(props) {

    const [frase,setFrase] = useState('')
    const [valorRandom, setValorrandom] = useState(0)
    
    const random = Math.floor(Math.random() * props.cartela.length) //vai gerar um número aleatorio entre as possibilidades e vai lançar uma pergunta e uma resposta
    
    const novoValor = (argumento) => {
        setValorrandom(argumento)
    }
   
    const resetaValor = () => {
        setValorrandom(0)
    }
    

    return (
        <View>
            <Text>{frase}</Text>
            
            <Button title="teste" onPress={() => {
                const random = Math.floor(Math.random() * props.cartela.length) //vai gerar um número aleatorio entre as possibilidades e vai lançar uma pergunta e uma resposta

                novoValor(random)
            }}/>
            
            <Text>estamos olhando o nó {valorRandom} com o valor de {props.cartela[valorRandom].numero}</Text>
            
            <Text>a variavel randomica esta setada em {valorRandom}</Text>
            
            <Button title="Reset" onPress={() => {
                resetaValor()
            }}/>

            <Text>Monitorando o lenght, total {props.cartela.length}</Text>
        
        </View>

        

        
    );
    
}