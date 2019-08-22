import express from 'express';
import * as Routes from './routes';

export class App {

  private app: express.Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.routes();
  }

  private settings() {
    this.app.set('port', this.port || process.env.PORT || 3000);
  }

  private routes() {
    Routes.init(this.app);
  }

  async listen() {
    await this.app.listen(this.app.get('port'));
    console.log('Server on port', 3000);
  }

}
