import express from 'express';
import * as Routes from './routes';

export class App {

  private app: express.Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.cors();
    this.routes();
  }

  private settings() {
    this.app.set('port', this.port || process.env.PORT || 3000);
  }

  private routes() {
    Routes.init(this.app);
  }

  private cors() {
    if (process.env.NODE_ENV === 'development') {
      this.app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
        res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
        next();
      });
    }
  }

  async listen() {
    await this.app.listen(this.app.get('port'));
    console.log('Server on port', 3000);
  }

}
