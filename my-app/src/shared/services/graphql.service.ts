import { ApolloClient, InMemoryCache } from '@apollo/client';

const clientGraphQL = new ApolloClient({
    uri: process.env.API_BASE || 'http://127.0.0.1:8000/api',
    cache: new InMemoryCache()
})

export default clientGraphQL;