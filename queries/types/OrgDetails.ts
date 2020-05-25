/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: OrgDetails
// ====================================================

export interface OrgDetails {
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
