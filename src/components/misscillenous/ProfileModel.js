import React from 'react'
import { useDisclosure } from '@chakra-ui/react';
import { Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Text} from '@chakra-ui/react';


const ProfileModel = ({user,children}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {<span onClick={onOpen}>{children}</span>}
      <Modal size='lg' isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent size='400px'>
          <ModalHeader
          fontSize="40px"
          fontFamily="Work sans"
          display="flex"
          justifyContent="center">{user.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
                borderRadius="full"
                boxSize="150px"
                src={user.pic}
                alt={user.name}
                em={user.email}
              />
              <Text
                fontSize={{ base: "28px", md: "30px" }}
                fontFamily="Work sans"
              >Eamil:{user.email}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProfileModel
