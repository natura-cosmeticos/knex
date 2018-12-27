import { assign } from 'lodash';
import Promise from 'bluebird';

function Runner(client, builder) {
  this.client = client;
  this.builder = builder;
}

assign(Runner.prototype, {
  run() {
    return Promise.using(
      () => {},
      () => {
        const sql = this.builder.toSQL();
        this.client.logger.debug(sql);
      }
    );
  },
});

export default Runner;
