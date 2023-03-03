import React from 'react'
import {
    Container,
    Gallery,
    Text,
    ScrollView
} from '../styles/ImageGalleryStyles'

const ImageGallery = () => {
  return (
    <Container>
        <Text>
            НАКЛОНЫ НА ОДНОЙ НОГЕ
        </Text>
        
        <ScrollView horizontal={true}> 
            <Gallery/>
            <Gallery/>
            <Gallery/>
            <Gallery/>
        </ScrollView>
    </Container>
  )
}

export default ImageGallery