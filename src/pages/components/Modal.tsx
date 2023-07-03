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
              textTransform={'capitalize'}
            >{modal.view}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

                {children}
  
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={() =>{ setModal(updatedModal)}}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ModalComponent;