import React,{useState,useEffect} from 'react';
import { Typography} from '@mui/material';
import Category from './Category';
import {getAvailability} from "./getTime"

// const useStyles = makeStyles({
//   root: {
//     display:"flex"
//   }
// });

const Dishes = ({formattedData}) => {
  // const classes = useStyles();
  
 const [dish, setDish]=useState([])
 const [showAllDishes, setShowAllDishes] = useState(true)


useEffect(()=>{
  setDish(formattedData?.inputDish)
},[formattedData])


const mystyle = {
 display:"flex",
 justifyContent:"center", 
 flexDirection:"column",
 

};
const myst = {
  display:"flex",
  flexDirection:"column",
  border:"1px solid grey",
  margin:"15px 5px",
  borderRadius:"5px",
  background:"#E8E8E8"
 };
 const myst1 = {
  display:"flex",
  flexWrap: "wrap"
 
 };
 const typo = {
  padding:"5px"
 };

 
  return (
    <div style={mystyle}>
      <div style={mystyle}>
      <Category formattedData={formattedData} setShowAllDishes={setShowAllDishes} />    
      </div> 
      <div style={myst1}>     
            {
            showAllDishes &&
            dish?.map((e)=>(
            (
            <div  width='300px' style={myst}>
            <Typography style={typo} variant="h6">{e?.name}</Typography>
            <Typography style={typo}>Price- ₹{e?.price} + ₹30 delivery Charges</Typography>
            {<Typography style={typo}>Preparation Time - {e?.PrepTime}</Typography>}
           { e?.availability!== null  && <Typography style={e?.availability!== null?typo:null}>{e?.availability}</Typography>}
           <Typography style={typo}><pre>{getAvailability(e.dishType)}</pre></Typography>          
          </div>
              )
              ))
            }
            </div> 
    </div>
  )
}

export default Dishes