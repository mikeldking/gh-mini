import gql from "graphql-tag";
import { orgDetails } from "./orgFragments";

export default gql`
  query SearchOrgsQuery($query: String!) {
    search(query: $query, type: USER, first: 10) {
      nodes {
        ... on Organization {
          ...OrgDetails
        }
      }
    }
  }
  ${orgDetails}
`;
