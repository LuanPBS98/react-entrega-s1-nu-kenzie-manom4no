import { Box, Button, FormControl, Input, Text, Img, FormLabel, FormErrorMessage, SimpleGrid, Select,} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const NuKenzieForm = ({ transactions,setTransactions,idUsuario,itemId,setItemId }) => {
    const FormSchema = yup.object().shape({
        description:yup.string().required("Descrição obrigatório"),
        valueData:yup.number().required("Valor obrigatório"),
        type:yup.string().required("nome de usuário obrigatório")
    })
    const { register,handleSubmit,formState: { errors }} = useForm({
        resolver:yupResolver(FormSchema)
    });
    const handleRegister = (data) => {
        setItemId(itemId+1)
        setTransactions([...transactions,{idUsuario,...data,itemId}])
    }
    return(
        <Box 
            w="363px" 
            h="351px" 
            bg="#ffffff" 
            border="1px solid #E9ECEF" 
            borderRadius="4px">
            <form 
                onSubmit={handleSubmit(handleRegister)}>
                <FormControl 
                    d="flex" 
                    flexDir="column" 
                    alignItems="center" 
                    w="363px" 
                    h="351px" 
                    justifyContent="space-around">
                    <Box>
                        <FormLabel 
                            fontFamily="inter,sans-serif" 
                            fontStyle="normal" 
                            fontSize="12px" 
                            lineHeight="22px" 
                            color="#212529">
                            Descrição
                        </FormLabel>
                        <Input 
                            placeholder="Digite aqui sua transição" 
                            {...register("description")} 
                            bg="#ffffff" 
                            w="314px" 
                            h="52,8px" 
                            _hover={{border:"1px solid #212529"}} 
                            _focus={{border:"2px solid #E34981"}}>
                        </Input>
                        <Text 
                            color="red" 
                            marginBottom="20px">
                                {errors.description?.message}
                        </Text> 
                    </Box>
                    <Box 
                        d="flex" 
                        flexDir="row">
                        <Box 
                            marginRight="30px">
                            <FormLabel 
                                fontFamily="inter,sans-serif" 
                                fontStyle="normal" 
                                fontSize="12px" 
                                lineHeight="22px" 
                                color="#212529">
                                    Valor
                            </FormLabel>
                            <Input 
                                type="number" 
                                placeholder="R$" 
                                {...register("valueData")} 
                                textAlign="end" 
                                w="128px" 
                                h="48px" 
                                _hover={{border:"1px solid #212529"}} 
                                _focus={{border:"2px solid #E34981"}}>
                            </Input>
                            <FormErrorMessage 
                                color="red" 
                                marginBottom="20px">
                                    {errors.valueData?.message}
                            </FormErrorMessage>
                        </Box>
                        <Box>
                            <FormLabel 
                                fontFamily="inter,sans-serif" 
                                fontStyle="normal" 
                                fontSize="12px" 
                                lineHeight="22px" 
                                color="#212529">
                                    Tipo de valor
                            </FormLabel>
                            <Select 
                                {...register("type")} 
                                w="150px" 
                                h="48px" 
                                _hover={{border:"1px solid #212529"}} 
                                _focus={{border:"2px solid #E34981"}}>
                                    <option>Entrada</option>
                                    <option>Saída</option>
                            </Select>
                            <FormErrorMessage 
                                color="red" 
                                marginBottom="20px">
                                    {errors.type?.message}
                            </FormErrorMessage> 
                        </Box>
                    </Box>
                    <Button 
                        type="submit" 
                        w="314px" 
                        h="52,8px" 
                        variant="default">
                            Inserir Valor
                    </Button>
                </FormControl>
            </form>
        </Box>
    )
}

export default NuKenzieForm;