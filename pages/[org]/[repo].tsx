import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Loader from "../../components/Loader";
import ErrorAlert from "../../components/ErrorAlert";
import { withApollo } from "../../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import repoQuery from "../../queries/repoQuery";
import {
  RepoQuery,
  RepoQueryVariables,
  RepoQuery_repository_defaultBranchRef_target_Commit as DefaultBranchRefTargetCommit,
} from "../../queries/types/RepoQuery";

const Repo = () => {
  const {
    query: { org, repo },
  } = useRouter();
  const { data, loading, error } = useQuery<RepoQuery, RepoQueryVariables>(
    repoQuery,
    {
      variables: { org: org as string, repo: repo as string },
    }
  );
  return (
    <div>
      <Head>
        <title>{`${org}/${repo}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-xl mx-auto">
        <h1 className="flex items-center text-4xl font-bold text-gray-800 w-full">
          <Link href="/[org]" as={`/${org}`}>
            <a className="hover:text-indigo-700 hover:underline">{org}</a>
          </Link>
          /{repo}
        </h1>
        {error ? <ErrorAlert error={error} className="mb-2" /> : null}

        <section className="flex flex-col items-center">
          <h2 className="font-medium text-gray-700 w-full">{`Recent commits ${
            data ? "to " + data.repository.defaultBranchRef.name : ""
          }`}</h2>
          <ul className="pt-4 w-full">
            {(data?.repository.defaultBranchRef
              .target as DefaultBranchRefTargetCommit)?.history.nodes.map(
              (commit) => {
                return (
                  <li key={commit.id} className="card divide-y divide-gray-400">
                    <h3
                      className="flex text-gray-800 text-lg py-4 px-6"
                      title={commit.messageHeadline}
                    >
                      {commit.messageHeadline}
                    </h3>
                    <div className="flex text-gray-700 px-6 py-2 leading-5">
                      <span className="flex">
                        <img
                          src={commit.author.avatarUrl}
                          className="object-contain h-5 w-5 mr-2 rounded-sm"
                        />
                        {
                          commit.author.user
                            ? commit.author.user.login
                            : commit.author.name // Fallback to the author name if there is no user for the commit
                        }
                      </span>
                      <span className="ml-1 font-light">
                        committed on{" "}
                        {new Date(commit.committedDate).toLocaleDateString()}
                      </span>
                      <span
                        className="ml-auto text-gray-500"
                        title={commit.oid}
                        aria-label="commit oid"
                      >
                        {commit.oid.substring(commit.oid.length - 7)}
                      </span>
                    </div>
                  </li>
                );
              }
            )}
          </ul>
          {loading ? <Loader /> : null}
        </section>
      </main>
    </div>
  );
};

export default withApollo({ ssr: true })(Repo);
