import UseApp from '@/hooks/UseApp'
import { ArrowBackIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { Flex, Text, Image } from '@chakra-ui/react'
import React from 'react'

type Props = {
    images: string[]
    id: string
}

const SelectedImage: React.FC<Props> = ({images, id}) => {

    const {setSelectedImage, selectedImage} = UseApp();

    return (
        
        <Flex
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            marginBottom={'15pt'}
            marginTop={'5pt'}
            
                                                    
            >
                        <Flex
                            alignItems={'center'}
                            w={'100%'}
                            justifyContent={'space-between'}
                            cursor={'pointer'}
                            transition={'ease-in-out 2s all'}
                            
                        >
                        <ArrowBackIcon 
                                boxSize={6}
                                zIndex={3}
                                onClick={() => {setSelectedImage({})}}
                                
                               
                        />
                        </Flex>
                            
                            <Image 
                                 src={`assets/projects/${id}/${selectedImage.current}.png`} 
                                 alt={` this is a icon for ${selectedImage}`}
                                h={'auto'}
                               
                            />

                            <Flex
                                justifyContent={'center'}
                                gap={'2rem'}
                                width={'100%'}
                                py={'5px'}
                            >
                                <ArrowLeftIcon
                                    color={'gray.400'}
                                    boxSize={5}
                                    _hover={{color: 'gray.600'}}
                                    cursor={'pointer'}
                                    onClick={() => {
                                        setSelectedImage({
                                            current: images[images.indexOf(selectedImage?.current)  - 1],
                                            prev:  images[images.indexOf(selectedImage?.current)  - 2],
                                            next:  images[images.indexOf(selectedImage?.current)]
                                        })
                                    }}
                                    
                                />
                                <ArrowRightIcon
                                    color={'gray.400'}
                                    boxSize={5}
                                    _hover={{color: 'gray.600'}}
                                    cursor={'pointer'}
                                    onClick={() => {
                                        setSelectedImage({
                                            current: images[images.indexOf(selectedImage?.current)  + 1],
                                            prev: images[images.indexOf(selectedImage?.current)  - 1],
                                            next: images[images.indexOf(selectedImage?.current) + 2]
                                        })
                                    }}
                                />
                            </Flex>
                            
                            </Flex>
    )

}

export default SelectedImage;