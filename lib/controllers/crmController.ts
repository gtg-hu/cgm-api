import * as mongoose from 'mongoose';
import { ContractSchema } from '../models/contract';
import { Request, Response } from 'express';
import { Utilities } from '../utils/utilities';

const Contract = mongoose.model('Contract', ContractSchema);

export class ContractController{
	public getContracts(req: Request, res: Response) {
		Contract.find({}, (err, result) => {
			if (err) {
				res.send(err);
			}
			res.json(result);
		})
	}
	
	public getContractWithName(req: Request, res: Response) {
		let filter = {"surname": req.params.term};
		Contract.find(filter, (err, result) => {
			if (err) {
				res.send(err);
			}
			console.log("Get succed!");
			res.json(result);
		})
	}
	
	public updateContract(req: Request, res: Response) {
		console.log("!!! call put !!!", req.params.term);
		let filter = {"contractNumber": req.params.term};
		//Contract.findOneAndUpdate(filter, req.body, { new: true }, (err, result) => {
		let modContract = Utilities.getContractNoId(req.body);		
		Contract.findOneAndReplace(filter, modContract, {returnNewDocument: true}, (err, result) => {
			if (err) {
				res.send(err);
			}
			console.log("Update succed!");
			res.json(result);
		})
	}
	
	public deleteContract(req: Request, res: Response) {
		let filter = {"contractNumber": req.params.term};
		Contract.deleteOne(filter, (err, result) => {
			if (err) {
				res.send(err);
			}
			console.log("Delete succed!");
			res.json(result);
		})
	}
	
	public createContract(req: Request, res: Response) {	
        let newContract = new Contract();
		Utilities.rebuildContract(req.body, newContract);
        newContract.save((err, result) => {
            if(err){
                res.send(err);
            } 
			console.log("Create succed!");
            res.json(result);
        });
    }
}