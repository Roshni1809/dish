import { gql } from "@apollo/client";

const DISH= gql`
query getDishes {
  dish {
    id
    name
    Price
    PrepTime
    dishType
    availibility
   
   
  }
  category{
    id
    type
  }
}
`;


export default  DISH;