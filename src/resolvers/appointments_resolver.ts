import { Query, Resolver } from 'type-graphql';

@Resolver()
export class AppointmentsResolver {
  @Query()
  async sayHi() {
    return 'hello';
  }
}
