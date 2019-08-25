import express from 'express';
import bodyParser from 'body-parser';
import * as Routes from './routes';

export class App {

  private app: express.Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.configure();
    this.routes();
    this.settings();
  }

  private configure() {
    this.app.use(bodyParser.urlencoded({
      extended: false
    }));
    this.app.use(bodyParser.json());
    this.cors();
  }

  private routes() {
    Routes.init(this.app);
  }

  private settings() {
    this.app.set('port', this.port || process.env.PORT || 3000);
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
