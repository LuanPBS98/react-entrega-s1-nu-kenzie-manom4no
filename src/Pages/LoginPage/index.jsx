import loginBg from "../../Assets/Images/loginBg.jpg";
import NuKenzie from "../../Assets/Images/NuKenzieBlack.svg";
import { Box, Button, FormControl, Input, Text, Img,} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { IoReturnDownBackOutline } from "react-icons/io5";

const LoginPage = ({ dataBase }) => {
    const history = useHistory();
    const loginSchema = yup.object().shape({
        userName:yup.string().required("nome de usuário obrigatório"),
        password:yup.string().required("senha de usuário obrigatório"),
    })
    const { register,handleSubmit,formState: { errors }} = useForm({
        resolver:yupResolver(loginSchema)
    });
    const handleLogin = ({ userName,password }) => {
        let { id } = dataBase.find((item) => item.userName === userName && item.password === password);
        id !== undefined? history.push(`/user/${id}`) : toast.error("Usuario ou senha invalidos!");   
    }
    return(
        <Box
            w="100%"
            h="100vh"
            bgImg={loginBg}
            bgPosition="center"
            bgSize="cover"
            bgRepeat="no-repeat"
            d="flex">
            <Box
                w="460px"
                h="100vh"
                bg="#F8F9FA"
                borderRightRadius="8px"
                d="flex"
                flexDir="column"
                alignItems="center">
                <Img 
                    src={NuKenzie} 
                    marginTop="15px"/>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <FormControl
                        w="420px"
                        d="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        ml="auto"
                        mr="auto">
                        <Box
                            d="flex"
                            flexDirection="column"
                            marginTop="200px">
                            <Input 
                            placeholder="Digite seu nome de usuário" 
                            {...register("userName")} 
                            bg="#ffffff" 
                            w="350px" >
                            </Input>
                            <Text
                                color="red"
                                marginBottom="20px">{errors.userName?.message}</Text>
                            <Input 
                                type="password" 
                                placeholder="Digite sua senha de usuário" 
                                {...register("password")} 
                                bg="#ffffff" 
                                w="350px">
                            </Input>
                            <Text
                                color="red"
                                marginBottom="20px">{errors.password?.message}</Text>
                        </Box>
                        <Button
                            variant="deleteBtn"
                            type="submit"
                            mt="10px">Login</Button>
                        <Button
                            onClick={()=>history.push("/signup")}
                            variant="deleteBtn"
                            mt="10px">sign Up</Button>
                    </FormControl>
                </form>
            </Box>
            <Button
                onClick={()=>history.push("/")}
                variant="deleteBtn"
                marginLeft="auto"
                color="#212529"
                marginLeft="auto"
                marginTop="10px"
                marginRight="10px">
                    <IoReturnDownBackOutline/>
            </Button>
        </Box>
    )
}

export default LoginPage;