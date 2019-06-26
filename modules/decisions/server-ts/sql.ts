import { knex } from '@gqlapp/database-server-ts';

export default class Decisions {
  public decisionss() {
    return knex.select();
  }
}
