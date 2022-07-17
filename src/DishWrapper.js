import React, { useEffect } from 'react';
import Dishes from "./Dishes"
import Category from "./Category"
import { useQuery } from "@apollo/react-hooks";
import DISH from "./getQuery"


const DishWrapper = () => {
    const [formatData, setformatData] = React.useState([]);
    const { loading, error, data } = useQuery(DISH);
    const input = data

    useEffect(() => {
        const formattedData = formatedData(input);
        setformatData(formattedData);
    }, [input])

    const formatedData = (input) => {
        const receivedData = {
            inputDish: getData(input?.dish),
            Category_ID: getCategory(input?.category)
        }
        return receivedData
    }

    const getData = (e) => {
        const items = e?.map((e) =>
        ({
            name: e?.name,
            price: e?.Price,
            PrepTime: e?.PrepTime,
            availability: e?.availibility,
            dishType: e?.dishType,
            id: e?.id,
            remarks: e?.remarks

        }))
        return items;
    }

    const getCategory = (value) => {
        const cat_item = value?.map((value) =>
        ({
            id: value?.id,
            type: value?.type,
        }))
        return cat_item;
    }
    if(loading){
        return<div>Loading...</div>
    }
    if(error){
        console.error(error);
        return <div>Error!</div>;
    }
    return (
        <div>
            <Dishes formattedData={formatData} />
            
        </div>
    )
}

export default DishWrapper