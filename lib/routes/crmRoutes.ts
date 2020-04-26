import {Request, Response} from "express";
import { ContractController } from "../controllers/crmController";

export class Routes { 
	public contractController: ContractController = new ContractController();
	
    public routes(app): void {          
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })

		// GET endpoint
        app.route('/api/contracts') 
        .get(this.contractController.getContracts);
		
        // POST endpoint
		app.route('/api/contract')
        .post(this.contractController.createContract);

        // GET specific contract and PUT, DELETE it
        app.route('/api/contract/:term')
        .get(this.contractController.getContractWithName)
        .put(this.contractController.updateContract)
        .delete(this.contractController.deleteContract);	
    }
}