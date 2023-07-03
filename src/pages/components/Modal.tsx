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
    const {modal, setModal} = UseApp()

    const updatedModal = {
        view: '',
        state: false
    }
    

    return (
      <>
     
  
        <Modal isOpen={modal.state} onClose={() => setModal(updatedModal)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
              background={'blackAlpha.900'}
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