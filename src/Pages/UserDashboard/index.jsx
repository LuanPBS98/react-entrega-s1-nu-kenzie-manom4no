import NuKenzieHeader from "../../Components/NuKenzieHeader";
import NuKenzieForm from "../../Components/NuKenzieForm";
import NuKenzieList from "../../Components/NuKenzieList";
import NuKenzieFeatures from "../../Components/NuKenzieFeatures";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const UserDashBoard = ({ transactions,setTransactions,itemId,setItemId,filterBase,setFilterBase }) => {
    const [ lista,setLista ] = useState([]);
    const { id } = useParams();
    useEffect(()=>{
        setLista(transactions.filter((item)=>(item.idUsuario === id)))
    },[transactions]) 
    return (
        <Box>
            <NuKenzieHeader/>
            <Box
                d="flex"
                flexDir="row"
                marginTop="40px"
                justifyContent="space-evenly">
                <Box d="flex" flexDir="column">
                    <NuKenzieForm 
                        transactions={transactions} 
                        setTransactions={setTransactions} 
                        idUsuario={id} 
                        itemId={itemId} 
                        setItemId={setItemId}/>
                    <NuKenzieFeatures
                        transactions={transactions} 
                        setTransactions={setTransactions}
                        filterBase={filterBase}
                        setFilterBase={setFilterBase}
                    />
                </Box>
                <NuKenzieList 
                    transactions={lista} 
                    setTransactions={setTransactions} 
                    filterBase={filterBase} 
                    setFilterBase={setFilterBase}/>
            </Box>
        </Box>
    )
}

export default UserDashBoard;