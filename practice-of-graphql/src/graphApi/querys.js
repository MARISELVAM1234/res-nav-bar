import { gql } from "@apollo/client";



export const queryData = gql `
query Query {
  episodes{
    info {
      count
      pages
    }
    results{
      name
      id
      air_date
      characters{
        name
        status
        species
        gender
        image
  
      }
    }
  
  }
}
`