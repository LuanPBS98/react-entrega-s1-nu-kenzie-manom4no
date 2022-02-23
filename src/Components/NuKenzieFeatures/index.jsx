import { Box,Heading,Text } from "@chakra-ui/react"

const NuKenzieFeatures = ({ transactions,filterBase }) => {
    return (
        <Box 
            w="363px" 
            h="96px" 
            bg="#ffffff" 
            border="1px solid #E9ECEF" 
            borderRadius="4px">
            <Box 
                d="flex" 
                flexDir="row" 
                justifyContent="space-around" 
                alignItems="center" 
                marginTop="15px">
                <Box 
                    d="flex" 
                    flexDir="column">
                    <Heading 
                        variant="title3">
                        Valor total
                    </Heading>
                    <Text 
                        variant="body">
                        O valor se refere as entradas e saidas
                    </Text>
                </Box>
                <Heading 
                    variant="title 3" 
                    color="#E34981" 
                    fontSize="16px">
                    {transactions.filter(({type}) =>(filterBase === "Todos")?type !== "Todos" : type === filterBase).reduce((acc,cur) => {
                        return (cur.type === "Saida" && filterBase === "todos")?acc + Number(cur.valueData):acc + Number(cur.valueData);
                    },0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                </Heading>
            </Box>
        </Box>
    )
}

export default NuKenzieFeatures;