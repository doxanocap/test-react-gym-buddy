import React from 'react'
import {
  Text,
  Container,
  ScrollView,
  SelectionNumber
} from '../styles/HorizontalSelectStyles'


const HorizontalSelect = () => {
  return (
    <Container>
      <Text>УКАЖИТЕ ВЕС С КОТОРЫМ РАБОТАЛИ</Text>
      <ScrollView horizontal={true}>
        <SelectionNumber/>
        <SelectionNumber/>
        <SelectionNumber/>
        <SelectionNumber/>
        <SelectionNumber/>
        <SelectionNumber/>
        <SelectionNumber/>
        <SelectionNumber/>
        <SelectionNumber/>
        <SelectionNumber/>
        <SelectionNumber/>
        <SelectionNumber/>
        <SelectionNumber/>
        <SelectionNumber/>

      </ScrollView>
    </Container>
  )
}

export default HorizontalSelect