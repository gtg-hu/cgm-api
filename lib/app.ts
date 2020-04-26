import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import { Routes } from "./routes/crmRoutes";
import {CONFIG} from './database/config';

const config = CONFIG;
const setting = {
	useNewUrlParser: true,
	useUnifiedTopology: true
};

class App {
    public app: express.Application;
	public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
		this.routePrv.routes(this.app);
		this.mongoDbSetup();
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
		this.app.use(function(req, res, next) {
			res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
			res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
			res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
			res.setHeader('Access-Control-Allow-Credentials', 'true');
			next();
		});
    }
	
	private mongoDbSetup() {
		mongoose.Promise = global.Promise;
		mongoose.connect(config.db.uri, setting, (err, db) => {
			if (err) {
				console.log("Connect to database is failed! ", err);
			}
			console.log("Connect to database succed! ", db.name);
		});
	}
}

export default new App().app;