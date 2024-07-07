import { Box, Flex, Spacer } from '@chakra-ui/react'
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/misscillenous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const ChatPage = () => {
  const {user,setUser} = ChatState();
  const history=useHistory();

  const [fetchAgain, setFetchAgain] = useState(false);

  useEffect(()=>{
    const userInfo=JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if(!userInfo ){
      history.push('/');
    }
  },[]);

  return (
    <div style={{width:"100%"}}>
      {user && <SideDrawer/>}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain}  />}
        {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
      </Box>
    </div>
  )
};

export default ChatPage;