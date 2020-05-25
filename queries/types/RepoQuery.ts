/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RepoQuery
// ====================================================

export interface RepoQuery_repository_defaultBranchRef_target_Tree {
  __typename: "Tree" | "Blob" | "Tag";
}

export interface RepoQuery_repository_defaultBranchRef_target_Commit_history_nodes_author_user {
  __typename: "User";
  /**
   * The username used to login.
   */
  login: string;
}

export interface RepoQuery_repository_defaultBranchRef_target_Commit_history_nodes_author {
  __typename: "GitActor";
  /**
   * A URL pointing to the author's public avatar.
   */
  avatarUrl: any;
  /**
   * The name in the Git commit.
   */
  name: string | null;
  /**
   * The GitHub user corresponding to the email field. Null if no such user exists.
   */
  user: RepoQuery_repository_defaultBranchRef_target_Commit_history_nodes_author_user | null;
}

export interface RepoQuery_repository_defaultBranchRef_target_Commit_history_nodes {
  __typename: "Commit";
  id: string;
  /**
   * The Git object ID
   */
  oid: any;
  /**
   * The datetime when this commit was committed.
   */
  committedDate: any;
  /**
   * The Git commit message
   */
  message: string;
  /**
   * The Git commit message body
   */
  messageBody: string;
  /**
   * The Git commit message headline
   */
  messageHeadline: string;
  /**
   * Authorship details of the commit.
   */
  author: RepoQuery_repository_defaultBranchRef_target_Commit_history_nodes_author | null;
}

export interface RepoQuery_repository_defaultBranchRef_target_Commit_history {
  __typename: "CommitHistoryConnection";
  /**
   * A list of nodes.
   */
  nodes: (RepoQuery_repository_defaultBranchRef_target_Commit_history_nodes | null)[] | null;
}

export interface RepoQuery_repository_defaultBranchRef_target_Commit {
  __typename: "Commit";
  id: string;
  /**
   * The datetime when this commit was committed.
   */
  committedDate: any;
  /**
   * The linear commit history starting from (and including) this commit, in the same order as `git log`.
   */
  history: RepoQuery_repository_defaultBranchRef_target_Commit_history;
}

export type RepoQuery_repository_defaultBranchRef_target = RepoQuery_repository_defaultBranchRef_target_Tree | RepoQuery_repository_defaultBranchRef_target_Commit;

export interface RepoQuery_repository_defaultBranchRef {
  __typename: "Ref";
  id: string;
  /**
   * The ref name.
   */
  name: string;
  /**
   * The ref's prefix, such as `refs/heads/` or `refs/tags/`.
   */
  prefix: string;
  /**
   * The object the ref points to.
   */
  target: RepoQuery_repository_defaultBranchRef_target;
}

export interface RepoQuery_repository {
  __typename: "Repository";
  id: string;
  /**
   * The repository's name with owner.
   */
  nameWithOwner: string;
  /**
   * The Ref associated with the repository's default branch.
   */
  defaultBranchRef: RepoQuery_repository_defaultBranchRef | null;
}

export interface RepoQuery {
  /**
   * Lookup a given repository by the owner and repository name.
   */
  repository: RepoQuery_repository | null;
}

export interface RepoQueryVariables {
  org: string;
  repo: string;
}
