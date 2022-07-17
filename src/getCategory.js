import { gql } from "@apollo/client";

const GET_CATEGORY = gql`query MyQuery2($id:Int!){
    dish(where: {cat_id: {_eq: $id}}) {
      name
      Price
      availibility
      dishType
      PrepTime
    
    }
  }`;

export default GET_CATEGORY;