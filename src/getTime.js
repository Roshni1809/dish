export const getAvailability = (type) => {
    var today = new Date()
    var time = today.getHours();
    if(type === "Breakfast") {
      if(time >= 6 && time < 10)
        return ""
      else
        return ("Not Available\n(Next Availavility 6AM to 10AM)")
    }
    if(type === "Lunch") {
      if(time >= 10 && time < 16)
      return ""
    else
      return ("Not Available\n(Next Availavility 10AM to 2PM)")
  }  
    if(type === "Dinner") {
      if(time >= 18)
      return ""
    else
      return ("Not Available\n(Next Availavility 6PM to 12PM)")
      }
    if(type === "Lunch/Dinner") {
      if(time >= 10)
      return ""
    else
      return ("Not Available\n(Next Availavility Tomorrow 10AM to 12PM)")
      }  
  }
  

