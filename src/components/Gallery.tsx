import UseApp from '@/hooks/UseApp'
import { Project } from '@/types/types'
import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

type Props = {
    project: Project
}

const Gallery: React.FC<Props> = ({project}) => {

    const {setSelectedImage} = UseApp();

    const {images, id, name} = project;

  return (
    <Flex
        w={'100%'}
        flexWrap={'wrap'}
        justifyContent={'center'}
>
   {
    images.map((image, index) => (
        <Box 
            m={'5px'}
            border={'1px solid'}
            borderColor={'gray.200'}

            width={'300px'}
        >
        <Image 
            src={`assets/projects/${id}/${image}.png`} 
            alt={`this is a image for: ${name}, and image: ${image}`}
            w={'100%'}
            height={'auto'}
            onClick={() => setSelectedImage({
                    current: image, 
                    next: images[index + 1], 
                    prev: images[index - 1]
                })}
        />


        </Box>

    ))
   } 
</Flex>
  )
}

export default Gallery;