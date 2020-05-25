import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { withApollo } from "../lib/apollo";
import throttle from "lodash.throttle";

// Components
import OrgImage from "../components/OrgImage";
import Spinner from "../components/Spinner";
import ErrorAlert from "../components/ErrorAlert";
import { SearchIcon } from "@primer/octicons-v2-react";

// Queries
import { useQuery } from "@apollo/react-hooks";
import searchOrgsQuery from "../queries/searchOrgsQuery";
import {
  SearchOrgsQuery,
  SearchOrgsQueryVariables,
  SearchOrgsQuery_search_nodes_Organization as Organization,
} from "../queries/types/SearchOrgsQuery";
import Empty from "../components/Empty";

/**
 * Renders the home page with organization search to navigate to the org details page
 */
const Home = () => {
  const [query, setQuery] = useState<string>("");
  const { data, loading, error } = useQuery<
    SearchOrgsQuery,
    SearchOrgsQueryVariables
  >(searchOrgsQuery, {
    variables: {
      query: `${query} type:org`, // Account for GitHub's query syntax for orgs
    },
    skip: query.length < 1,
  });
  const onInputChange = throttle(
    (event) => (setQuery(event.target.value), 250)
  );

  return (
    <div>
      <Head>
        <title>GitHub Mini</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col max-w-lg mx-auto mt-10">
          <div aria-label="Organizations" className="relative">
            <div className="absolute flex items-center justify-center w-12 h-12">
              {loading ? (
                <Spinner />
              ) : (
                <SearchIcon size="small" className="text-gray-500" />
              )}
            </div>
            <input
              value={query}
              onChange={onInputChange}
              type="search"
              className="transition-colors shadow duration-100 ease-in-out focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-12 block text-xl w-full appearance-none leading-normal ds-input"
              placeholder="Search Organizations"
              aria-label="Search for an organization"
            />
          </div>
          {query.length === 0 ? (
            <p className="text-center text-gray-600 mt-4">
              Start by searching for an organization you would like to browse.
            </p>
          ) : null}
          {error ? <ErrorAlert error={error} className="mt-2" /> : null}
          {data && (
            <div className="mt-5">
              {data.search.nodes.length > 0 ? (
                <ul>
                  {data.search.nodes.map((org: Organization, index) => (
                    <li key={index}>
                      <Link href="[slug]" as={`/${org.login}`}>
                        <a className="flex items-center rounded-lg bg-white shadow-lg mb-4 border-gray-400 py-4 px-6">
                          <OrgImage avatarUrl={org.avatarUrl} />
                          <span className="text-gray-600 font-thin ml-4 text-2xl">
                            {org.name}
                          </span>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <Empty message="No Organizations Found" />
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default withApollo({ ssr: false })(Home);
