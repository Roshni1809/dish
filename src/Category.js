import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import GET_CATEGORY from './getCategory';
import { useLazyQuery } from "@apollo/react-hooks";
import { Typography } from '@mui/material';


const Category = ({ formattedData, setShowAllDishes }) => {
    const [category, setCategory] = useState([])
    const [dish, setDish] = useState([])
    const [active, setActive] = useState(0)


    const [getCat, { loading, error, data }] = useLazyQuery(GET_CATEGORY);

    // console.log(data)

    const handleClick = (id, index) => {
        setActive(active === index ? 0 : index)
        getCat({ variables: { id } })
    }

    // console.log(data?.dish)

    useEffect(() => {
        setCategory(formattedData?.Category_ID)
        setDish(data?.dish)
        setShowAllDishes((active === 0) ? true : false)

    }, [formattedData,  data, active, dish])

    const mystyle = {
        display: "flex",


    };
    const myst = {
        display: "flex",
        flexDirection: "column",
        border: "1px solid grey",
        margin: "15px 5px",
        borderRadius: "5px"
    };
    const myst1 = {
        display: "flex",
       
    };
    const typo = {
        padding: "5px"
    };


    return (
        <div style={mystyle}>
            {category?.map((e, i) => (
                <div>
                    <Button variant="outlined" onClick={() => { handleClick(e.id, i + 1) }}>{e?.type}</Button>
                    <div style={myst1}>{active === i + 1 &&( dish?.length === 0 ?<h1>No Dishes Available</h1> : dish?.map(e => (
                        <div width='500px' style={myst}>
                            <Typography style={typo}>{e?.name}</Typography>
                            <Typography style={typo}>Price-{e?.Price}</Typography>
                            {<Typography style={typo}>Preparation Time{e?.PrepTime}</Typography>}
                            {e?.availibility !== null && <Typography style={e?.availibility !== null ? typo : null}>{e?.availibility}</Typography>}
                            {e?.remarks == null && <Typography style={typo}>{e?.remarks}
                            </Typography>}
                        </div>
                    )))}
                    </div>
                </div>
            ))}
            <div>
            {active !== 0 ? <Button variant="outlined" onClick={() => setActive(0)}>Show All Dishes</Button> : <></>}
            </div>
        </div>
    )
}
export default Category