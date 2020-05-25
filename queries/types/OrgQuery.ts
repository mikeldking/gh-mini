/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: OrgQuery
// ====================================================

export interface OrgQuery_organization_repositories_edges_node_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface OrgQuery_organization_repositories_edges_node_issues {
  __typename: "IssueConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface OrgQuery_organization_repositories_edges_node {
  __typename: "Repository";
  id: string;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The repository's name with owner.
   */
  nameWithOwner: string;
  /**
   * The description of the repository.
   */
  description: string | null;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: OrgQuery_organization_repositories_edges_node_stargazers;
  /**
   * Returns how many forks there are of this repository in the whole network.
   */
  forkCount: number;
  /**
   * A list of issues that have been opened in the repository.
   */
  issues: OrgQuery_organization_repositories_edges_node_issues;
}

export interface OrgQuery_organization_repositories_edges {
  __typename: "RepositoryEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of the edge.
   */
  node: OrgQuery_organization_repositories_edges_node | null;
}

export interface OrgQuery_organization_repositories_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
}

export interface OrgQuery_organization_repositories {
  __typename: "RepositoryConnection";
  /**
   * A list of edges.
   */
  edges: (OrgQuery_organization_repositories_edges | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: OrgQuery_organization_repositories_pageInfo;
}

export interface OrgQuery_organization {
  __typename: "Organization";
  id: string;
  /**
   * A URL pointing to the organization's public avatar.
   */
  avatarUrl: any;
  /**
   * The organization's public profile description.
   */
  description: string | null;
  /**
   * The organization's public profile name.
   */
  name: string | null;
  /**
   * The organization's login name.
   */
  login: string;
  /**
   * A list of repositories that the user owns.
   */
  repositories: OrgQuery_organization_repositories;
}

export interface OrgQuery {
  /**
   * Lookup a organization by login.
   */
  organization: OrgQuery_organization | null;
}

export interface OrgQueryVariables {
  login: string;
  reposCursor?: string | null;
}
