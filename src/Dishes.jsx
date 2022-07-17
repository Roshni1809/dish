import React,{useState,useEffect} from 'react';
import { Typography} from '@mui/material';
import Category from './Category';

// const useStyles = makeStyles({
//   root: {
//     display:"flex"
//   }
// });

const Dishes = ({formattedData}) => {
  // const classes = useStyles();
  
 const [dish, setDish]=useState([])
 const [showAllDishes, setShowAllDishes] = useState(true)

 const[remark,setRemark]=useState(false)

useEffect(()=>{
  setDish(formattedData?.inputDish)
},[formattedData])



const getAvailability = (type) => {
  var today = new Date()
  var time = today.getHours();
  if(type === "Breakfast") {
    if(time >= 6 && time < 10)
      return ""
    else
      return ("Not Available\n(Next Availavility Tomorrow 6AM to 10AM)")
  }
  if(type === "Lunch") {
    if(time >= 10 && time < 16)
    return ""
  else
    return ("Not Available\n(Next Availavility Tomorrow 10AM to 2PM)")
}  
  if(type === "Dinner") {
    if(time >= 18)
    return ""
  else
    return ("Not Available\n(Next Availavility Tomorrow 6PM to 12PM)")
    }
  if(type === "Lunch/Dinner") {
    if(time >= 10)
    return ""
  else
    return ("Not Available\n(Next Availavility Tomorrow 10AM to 12PM)")
    }  
}

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
  borderRadius:"5px"
 };
 const myst1 = {
  display:"flex",
  // flexDirection:"column",
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
            <div  width='350px' style={myst}>
            <Typography style={typo}>{e?.name}</Typography>
            <Typography style={typo}>Price-{e?.price}</Typography>
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