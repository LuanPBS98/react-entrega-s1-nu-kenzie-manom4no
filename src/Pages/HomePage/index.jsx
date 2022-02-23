import { Box, Button, Heading, Img,Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import landingLogo from "../../Assets/Images/landingLogo.svg"
import nuKenzie from "../../Assets/Images/NuKenzie.svg"

const HomePage = () => {
    const history = useHistory();
    return (
        <Box 
            w="100vw" 
            h="100vh" 
            bg="#420d09" 
            d="flex" 
            justifyContent="center" 
            alignItems="center">
            <Box 
                w="988px" 
                h="593px" 
                d="flex" 
                flexDirection="row">
                <Box 
                    w="395px" 
                    p="100px">
                    <Img 
                        src={nuKenzie} 
                        marginBottom="20px"/>
                    <Heading 
                        variant="landingPageTitle1" 
                        w="300px" 
                        marginBottom="35px">
                        Centralize o controle das suas finanças
                    </Heading>
                    <Text 
                        variant="landingPageHeadLine" 
                        marginBottom="30px">
                            De forma rápida e segura
                    </Text>
                    <Button 
                        onClick={() => history.push("/login")} 
                        variant="default" 
                        w="241px">
                            Iniciar
                    </Button>
                </Box>
                <Box w="593px">
                    <Img src={landingLogo}/>
                </Box>
            </Box>
        </Box>
    )
}

export default HomePage;