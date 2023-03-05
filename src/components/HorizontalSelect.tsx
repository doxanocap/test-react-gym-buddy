import React, {useRef, useState} from 'react'
import {View, Dimensions} from 'react-native'
import {
  Text,
  Container,
  ScrollView,
  SelectionNumber,
  Border,
  SelectionContainer
} from '../styles/HorizontalSelectStyles'

interface Input {
  type: string,
}

const HorizontalSelect: React.FC<Input> = ({type }): JSX.Element => {
  const [focusedNumber, setFocusedNumber] = useState<number>(0)
  
  const text1 = "УКАЖИТЕ ВЕС С КОТОРЫМ ВЫ РАБОТАЛИ"
  const text2 = "УКАЖИТЕ КОЛИЧЕСТВО ПОВТОРЕНИЙ"
  const arr = new Array(type === "weight" ? 451 : 501).fill(0)
  
  type renderInput = {
    number: number,
  }

  const RenderSelector: React.FC<renderInput> = ({number}:renderInput): JSX.Element => {
    return (
      <SelectionContainer> 
        <Border/>
          <SelectionNumber fontSize={focusedNumber === number ? "55px" : ""}>
            {number }
          </SelectionNumber>
        <Border/>
      </SelectionContainer>
    )
  }

  return (
    <Container>
      <Text>{type === "weight" ? text1 : text2}</Text>
      <ScrollView 
        horizontal={true}
        decelerationRate={0.2}
       
        scrollEventThrottle={1}
        onScroll={(event) => {
          const x = event.nativeEvent.contentOffset.x
          setFocusedNumber(Math.floor(x/122))
        }}> 
        {arr.map((_, key) => 
            <RenderSelector key={key} number={key} />
        )}
      </ScrollView>
    </Container>
  )
}

export default HorizontalSelect