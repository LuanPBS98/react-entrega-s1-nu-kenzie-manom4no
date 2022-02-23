import signupBg from "../../Assets/Images/signupBg.jpg";
import NuKenzie from "../../Assets/Images/NuKenzieBlack.svg";
import { Box, Button, FormControl, Input, Text, Img,} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from "react-router-dom";
import { IoReturnDownBackOutline } from "react-icons/io5";

const SignUpPage = ({ dataBase,setDataBase,finalId,setFinalId }) => {
    const history = useHistory();
    const SignInSchema = yup.object().shape({
        name:yup.string().required("nome obrigatório"),
        lastName:yup.string().required("sobrenome obrigatório"),
        userName:yup.string().required("nome de usuário obrigatório"),
        email:yup.string().email("Email invalido").required("email obrigatório"),
        confirm_email:yup.string().email("Email invalido").oneOf([yup.ref("email")], "Email divergente").required("email obrigatório"),
        password:yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Mínimo 8 digitos, Necessário maiúscula, minúscula, Número e Caracter especial").required("senha de usuário obrigatório"),
        confirm_password:yup.string().oneOf([yup.ref("password")], "senha divergente").required("email obrigatório"),
    })
    const { register,handleSubmit,formState: { errors }} = useForm({
        resolver:yupResolver(SignInSchema)
    });
    const handleSignIn = (data) => {
        delete data.confirm_email;
        delete data.confirm_password;
        setDataBase([...dataBase,{...data,id:finalId}])
        setFinalId(finalId+1)
        history.push("/login")
    }
    return(
        <Box
            w="100%"
            h="100vh"
            bgImg={signupBg}
            bgPosition="center"
            bgSize="cover"
            bgRepeat="no-repeat"
            d="flex"
            flexDir="row">
            <Button
                onClick={()=>history.push("/login")}
                variant="deleteBtn"
                bg="#212529"
                color="#ffffff"
                marginRight="auto"
                marginTop="10px"
                marginLeft="10px">
                <IoReturnDownBackOutline/>
            </Button>
            <Box
                w="460px"
                h="100vh"
                bg="#F8F9FA"
                borderLeftRadius="8px"
                d="flex"
                flexDir="column"
                alignItems="center"
                marginLeft="auto">
                <Img
                    src={NuKenzie}
                    marginTop="15px"/>
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <FormControl
                        w="420px"
                        d="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        ml="auto"
                        mr="auto">
                        <Box d="flex" flexDirection="column" marginTop="200px">
                            <Input placeholder="Digite seu nome" {...register("name")} bg="#ffffff" w="350px" ></Input>
                            <Text color="red" marginBottom="20px">{errors.name?.message}</Text>
                            {/* =================================================================================================== */}
                            <Input placeholder="Digite seu sobrenome" {...register("lastName")} bg="#ffffff" w="350px"></Input>
                            <Text color="red" marginBottom="20px">{errors.lastName?.message}</Text>
                            {/* =================================================================================================== */}
                            <Input placeholder="Digite seu nome de usuário" {...register("userName")} bg="#ffffff" w="350px"></Input>
                            <Text color="red" marginBottom="20px">{errors.userName?.message}</Text>
                            {/* =================================================================================================== */}
                            <Input type="password" placeholder="Digite sua senha de usuário" {...register("password")} bg="#ffffff" w="350px"></Input>
                            <Text color="red" marginBottom="20px">{errors.password?.message}</Text>
                            {/* =================================================================================================== */}
                            <Input type="password" placeholder="Confirme sua senha" {...register("confirm_password")} bg="#ffffff" w="350px"></Input>
                            <Text color="red" marginBottom="20px">{errors.confirm_password?.message}</Text>
                            {/* =================================================================================================== */}
                            <Input placeholder="Digite seu email" {...register("email")} bg="#ffffff" w="350px"></Input>
                            <Text color="red" marginBottom="20px">{errors.email?.message}</Text>
                            {/* =================================================================================================== */}
                            <Input placeholder="Confirme seu email" {...register("confirm_email")} bg="#ffffff" w="350px"></Input>
                            <Text color="red" marginBottom="20px">{errors.confirm_email?.message}</Text>
                        </Box>
                        <Button 
                            variant="deleteBtn" 
                            type="submit" 
                            mt="10px">
                                Login
                        </Button>
                    </FormControl>
                </form>
            </Box>
        </Box>
    )
}

export default SignUpPage;