import React, {useContext, useState} from 'react'
import {WorkoutContext, WorkoutContextType} from '../context/WorkoutContext'
import {
    Container,
    Gallery,
    Text,
    ScrollView
} from '../styles/ImageGalleryStyles'

const ImageGallery = () => {
  const [focusedNumber, setFocusedNumber] = useState<number>(0)

  const arr = new Array(4).fill(0)
  
  type renderInput = {
    number: number,
  }

  const {exercises, currId} = useContext(WorkoutContext) as WorkoutContextType
  const exercise = exercises[currId]

  return (
    <Container>
      <Text>
        {exercise?.name}
      </Text>
 
      <ScrollView 
        horizontal={true}
        decelerationRate={0.2}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={1}
        onScroll={(event) => {
          const x = event.nativeEvent.contentOffset.x
          setFocusedNumber(Math.floor(x/122))
        }}> 
        
        {arr.map((_, key) => 
          <Gallery key={key}/>
        )}

      </ScrollView>
    </Container>
  )
}

export default ImageGallery