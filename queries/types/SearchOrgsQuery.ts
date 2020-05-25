/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchOrgsQuery
// ====================================================

export interface SearchOrgsQuery_search_nodes_App {
  __typename: "App" | "Issue" | "MarketplaceListing" | "PullRequest" | "Repository" | "User";
}

export interface SearchOrgsQuery_search_nodes_Organization {
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
}

export type SearchOrgsQuery_search_nodes = SearchOrgsQuery_search_nodes_App | SearchOrgsQuery_search_nodes_Organization;

export interface SearchOrgsQuery_search {
  __typename: "SearchResultItemConnection";
  /**
   * A list of nodes.
   */
  nodes: (SearchOrgsQuery_search_nodes | null)[] | null;
}

export interface SearchOrgsQuery {
  /**
   * Perform a search across resources.
   */
  search: SearchOrgsQuery_search;
}

export interface SearchOrgsQueryVariables {
  query: string;
}
