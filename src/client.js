import { ApolloClient, InMemoryCache } from "apollo-boost";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";

/*
const client = new ApolloClient({
	addTypename: true,
	cache: new InMemoryCache(),
	defaultOptions: {
		watchQuery: {
			notifyOnNetworkStatusChange: true
		}
	},
	link: HttpLink.from([
		//stateLink,
		new HttpLink({
      credentials: 'same-origin',
      
			//fetch: fetchWithGroupId,
			uri: 'http://localhost:8080/o/graphql'
		})
	])
});
export default client;
*/

const httpLink = createHttpLink({
  uri: 'http://localhost:8080//o/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = 'ZHhwYWRtaW46bGlmZXJheUBhZG1pbioK';
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      authorization: token ? `Basic ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
