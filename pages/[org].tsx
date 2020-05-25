import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

// Components
import OrgImage from "../components/OrgImage";
import Loader from "../components/Loader";
import ErrorAlert from "../components/ErrorAlert";
import { StarFillIcon, RepoIcon, GitForkIcon } from "@primer/octicons-v2-react";

// Query
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import orgQuery from "../queries/orgQuery";
import { OrgQuery, OrgQueryVariables } from "../queries/types/OrgQuery";

/**
 * The organization details page with repositories sorted by stargazers
 */
const Org = () => {
  let {
    query: { org },
  } = useRouter();

  // Work around next.js query type
  org = Array.isArray(org) ? org[0] : org;

  // Query for the org and its repositories
  const { data, loading, error, fetchMore } = useQuery<
    OrgQuery,
    OrgQueryVariables
  >(orgQuery, {
    variables: { login: org },
  });

  // Pagination handler using the pageInfo cursor
  const onLoadMore = () => {
    fetchMore({
      query: orgQuery,
      variables: {
        login: org as string,
        reposCursor: data?.organization.repositories.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newEdges = fetchMoreResult.organization.repositories.edges;
        const pageInfo = fetchMoreResult.organization.repositories.pageInfo;

        // If there are new edges, interleave the new edges and pageInfo
        return newEdges.length
          ? {
              organization: {
                ...previousResult.organization,
                repositories: {
                  ...previousResult.organization.repositories,
                  edges: [
                    ...previousResult.organization.repositories.edges,
                    ...newEdges,
                  ],
                  pageInfo,
                },
              },
            }
          : previousResult;
      },
    });
  };

  // If there is an error, simply display it
  // TODO: handle graphql "404s"
  if (error) {
    return (
      <ErrorAlert
        error={error}
        className="mb-2 max-w-xl my-5 text-center mx-auto"
      />
    );
  }

  return (
    <div>
      <Head>
        <title>{org}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col max-w-xl mx-auto">
        <h1 className="flex items-center text-4xl font-bold text-gray-800">
          <OrgImage avatarUrl={data?.organization.avatarUrl} />
          <span className="ml-4">{data ? data.organization.name : org}</span>
        </h1>
        <section className="flex flex-col items-center">
          <header className="flex justify-between w-full">
            <h2 className="font-medium text-gray-700">
              <RepoIcon size="small" className="mr-1" />
              Repositories
            </h2>
            <span className="text-gray-500">Ordered by stargazers</span>
          </header>
          {data ? (
            <ul className="pt-4 w-full">
              {data.organization.repositories.edges.map(({ node: repo }) => {
                return (
                  <li key={repo.id}>
                    <Link href="[org]/[repo]" as={`/${repo.nameWithOwner}`}>
                      <a className="card flex flex-col divide-y divide-gray-400 hover:shadow-2xl">
                        <div className="py-4 px-6">
                          <h3 className="flex text-gray-800 text-2xl">
                            {repo.name}
                          </h3>
                          {repo.description ? (
                            <h4 className="text-gray-600 text-sm leading-snug pt-2">
                              {repo.description}
                            </h4>
                          ) : null}
                        </div>
                        <div className="flex justify-end px-6 py-2 text-gray-600 font-thin">
                          <span className="flex items-center mr-3">
                            <GitForkIcon className="mr-1" />
                            {repo.forkCount}
                          </span>
                          <span className="flex items-center">
                            <StarFillIcon className="mr-1" />
                            {repo.stargazers.totalCount}
                          </span>
                        </div>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : null}
          {data?.organization.repositories.pageInfo.hasNextPage ? (
            <button
              key="load-more"
              className="bg-white rounded-full py-3 px-5 shadow focus:outline-none"
              onClick={onLoadMore}
            >
              Load More
            </button>
          ) : null}
          {loading ? <Loader /> : null}
        </section>
      </main>
    </div>
  );
};

export default withApollo({ ssr: true })(Org);
