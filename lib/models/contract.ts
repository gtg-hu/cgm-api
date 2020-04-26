import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContractSchema = new Schema({
	birthday: {
		type: Date,
		default: new Date('1900-01-01')
	},
	city: {
		type: String,
		required: 'Enter a city'
	},
	contractNumber: {
		type: String,
		required: 'Enter a contract number'
	},
	houseNumber: {
		type: String,
		required: 'Enter a house number'
	},
	name: {
		type: String,
		required: 'Enter a first name'
	},
	plc: {
		type: Number,
		required: 'Enter a plc'
	},	
	street: {
		type: String,
		required: 'Enter a street'
	},
	surname: {
		type: String,
		required: 'Enter a surname'
	}
}, {versionKey: false});