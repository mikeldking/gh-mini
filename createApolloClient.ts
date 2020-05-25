import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

/**
 * Create an Apollo client to be used both client/server-side
 * @param initialState
 * @param ctx
 * @src https://github.com/zeit/next.js/blob/6ca26bd96033bd0b283c2b7c9172ef88849d7a09/examples/with-apollo/apolloClient.js#L5
 */
export default function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new HttpLink({
      uri: "https://api.github.com/graphql",
      headers: {
        Authorization: `Bearer ${process.env.GH_ACCESS_TOKEN}`,
      },
    }),
    cache: new InMemoryCache().restore(initialState),
  });
}
