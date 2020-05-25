import gql from "graphql-tag";

export default gql`
  query RepoQuery($org: String!, $repo: String!) {
    repository(name: $repo, owner: $org) {
      id
      nameWithOwner
      defaultBranchRef {
        id
        name
        prefix
        target {
          ... on Commit {
            id
            committedDate
            history(first: 20) {
              nodes {
                id
                oid
                committedDate
                message
                messageBody
                messageHeadline
                author {
                  avatarUrl(size: 200)
                  name
                  user {
                    login
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
