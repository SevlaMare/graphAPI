import { ApolloServer, gql } from 'apollo-server';
import { randomUUID } from 'node:crypto';

interface User {
  id: string;
  name: string;
}
const users: User[] = [];

// routes ~ typeDefs
const typeDefs = gql`
  type User {
    id: String!
    name: String!
  }

  type Query {
    showUsers: [User!]!
  }

  type Mutation {
    createUser(name: String!): User!
  }
`;

const server = new ApolloServer({
  typeDefs,

  // controllers ~ resolvers
  resolvers: {
    Query: {
      showUsers: () => {
        return users;
      },
    },

    Mutation: {
      createUser: (_, args) => {
        const newUser = {
          id: randomUUID(),
          name: args.name,
        };

        users.push(newUser);

        return newUser;
      },
    },
  },
});

void server.listen().then(({ url }) => {
  console.log('running', url);
});
