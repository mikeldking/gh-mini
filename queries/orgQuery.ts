import gql from "graphql-tag";
import { orgDetails } from "./orgFragments";

export default gql`
  query OrgQuery($login: String!, $reposCursor: String) {
    organization(login: $login) {
      ...OrgDetails
      repositories(
        first: 10
        after: $reposCursor
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        edges {
          cursor
          node {
            id
            name
            nameWithOwner
            description
            stargazers {
              totalCount
            }
            forkCount
            issues {
              totalCount
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
  ${orgDetails}
`;
