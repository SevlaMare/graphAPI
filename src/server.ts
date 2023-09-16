// -------------------
// code first approach
// -------------------
import path from 'node:path';
// import { randomUUID } from 'node:crypto';
import 'reflect-metadata';
import { ApolloServer, gql } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { AppointmentsResolver } from './resolvers/appointments_resolver';

async function main() {
  const schema = await buildSchema({
    resolvers: [AppointmentsResolver],
    emitSchemaFile: path.resovle(__dirname, 'typedefs.gql'),
  });

  const server = new ApolloServer({ schema });

  const { url } = await server.listen();
  console.log('server running on: ', url);
}

void main();
