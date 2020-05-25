import gql from "graphql-tag";

export const orgDetails = gql`
  fragment OrgDetails on Organization {
    id
    avatarUrl(size: 200)
    description
    name
    login
  }
`;
