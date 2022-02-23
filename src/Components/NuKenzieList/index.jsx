import { Box, Button, Heading, Img, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import noCard from "../../Assets/Images/NoCard.svg"

const NuKenzieList = ({ transactions,setTransactions,filterBase,setFilterBase }) => {
    const delTransaction = (prop) => {
        setTransactions(transactions.filter((item) => item.itemId !== prop)) ;
    }
    const emptyList = () => {
        return (
        <Box>
            <Heading 
                variant="title2" 
                color="#868E96" 
                marginTop="10px" 
                marginBottom="10px">
                    Você não possui lançamento
            </Heading>
            <Img src={noCard} marginBottom="15px"/>
            <Img src={noCard} marginBottom="15px"/>
            <Img src={noCard} marginBottom="15px"/>
        </Box>
        )
    }
    const fullList = () => {
        return(
            <UnorderedList>
                {transactions.filter(({type}) =>(filterBase === "Todos")?type !== "Todos" : type === filterBase).map((item,index) => (
                    <ListItem 
                        key={index} 
                        h="87px" 
                        d="flex" 
                        flexDir="row" 
                        justifyContent="space-around" 
                        gap="200px"
                        marginTop="15px" 
                        bg={item.type === "Entrada"?"#afeeaf":"#f5afaf"} 
                        borderRadius="4px" 
                        alignItems="center">
                        <Box>
                            <Heading variant="title3">{item.description}</Heading>
                            <Text variant="body" >{item.type}</Text>
                        </Box>
                        <Box 
                            d="flex" 
                            flexDir="row" 
                            gap="20px">
                            <Text variant="body">{Number(item.valueData).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
                            <Button variant="deleteBtn" onClick={() => delTransaction(item.itemId)}>remover</Button>
                        </Box>
                    </ListItem>
                ))}
            </UnorderedList>
        )
    }
    return (
        <Box>
            <Box 
                w="562px" 
                d="flex" 
                h="40px" 
                flexDir="row" 
                justifyContent="space-between" 
                alignItems="center" >
                <Heading variant="title3">Resumo financeiro</Heading>
                <Box 
                    d="flex" 
                    flexDir="row" 
                    gap="10px">
                    <Button onClick={() => setFilterBase("Todos")} variant="filterBtn">Todos</Button>
                    <Button onClick={() => setFilterBase("Entrada")} variant="filterBtn">Entrada</Button>
                    <Button onClick={() => setFilterBase("Saída")} variant="filterBtn">Despesas</Button>
                </Box>
            </Box>
            {transactions.length > 0?fullList():emptyList()}
        </Box>
    )
}

export default NuKenzieList;