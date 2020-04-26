export class Utilities {
	public static rebuildContract(inObj: Object, newContract: any) {
		let o = Object.keys(inObj)[0];
		let contr = JSON.parse(o);
		
		newContract.contractNumber = this.getContractNumber();
		newContract.name = contr.name;
		newContract.surname = contr.surname;
		newContract.birthday = new Date(contr.birthday);
		newContract.street = contr.street;
		newContract.houseNumber = contr.houseNumber;
		newContract.city = contr.city;
		newContract.plc = contr.plc;
	}
	
	public static getContractNoId(inObj: any) {
		let o = Object.keys(inObj)[0];
		let splitted = o.split(",", 10).slice(2, 9);
		let newStr = "{" + splitted;
		console.log("splitted: ", newStr);
		return JSON.parse(newStr);
	}
	
	public static getContractNumber(): string {
		let num = Math.floor(Math.random()*100000);
		return "A" + num;
	}
}