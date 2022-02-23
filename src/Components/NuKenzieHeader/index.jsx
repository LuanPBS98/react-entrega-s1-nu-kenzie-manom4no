import { Box, Button, Img } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import NuKenzieLogo from "../../Assets/Images/NuKenzieBlack.svg";

const NuKenzieHeader = () => {
    const history = useHistory();
    return(
        <Box 
            w="100%" 
            h="88px" 
            bg="#F8F9FA" 
            boxShadow="0px 4px 32px -12px" 
            d="flex" 
            flexDir="row" 
            justifyContent="space-around" 
            alignItems="center">
            <Img 
                src={NuKenzieLogo} 
                alt="logo" 
                w="122.68px" 
                h="19.53px"/>
            <Button 
                variant="filterBtn" 
                onClick={()=>history.push("/login")}>
                    Deslogar
            </Button>
        </Box>
    )
}

export default NuKenzieHeader;