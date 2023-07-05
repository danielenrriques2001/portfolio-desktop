import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from "@chakra-ui/react"

import UseApp from "@/hooks/UseApp";

interface ModalProps {
    children?: React.ReactNode;
}
  const ModalComponent: React.FC<ModalProps> =({children}) => {
    const {modal, setModal, setSelectedProject, selectedProject, setSelectedImage, selectedImage} = UseApp()

    const updatedModal = {
        view: '',
        state: false
    }

    const handleCloseModal = () => {
      setModal(updatedModal)
      if(selectedProject.name) {
        setSelectedProject({})
      }
      if(selectedImage.current) {
        setSelectedImage({})
      }
    }

    const defineModalColor = (view: string): string => {

      switch (view) {
        case 'experience':
          return 'red.400'
          break;
        
        case 'projects':
          return 'blue.400'
          break;

        case 'about':
          return 'orange.400'
          break;
      
        default:
          return 'green.500'
          break;
      }
      return ''
    }


    return (
      <>
     
  
        <Modal isOpen={modal.state} onClose={() => handleCloseModal() } size={{'base': 'md', 'md': '3xl'}}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
              background={defineModalColor(modal.view)}
              textTransform={'capitalize'}
              color={'gray.100'}
            >
              {modal.view}
            </ModalHeader>
            <ModalCloseButton color={'white'} />
            <ModalBody>

                {children}
  
            </ModalBody>
  
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ModalComponent;