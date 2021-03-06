/***************************************************

CREATED_BY: Yash Saxena

Title:
account (interface/model schema)

Purpose:
This is the format of the object that will be used to create a new account

***************************************************/

export class Account {
	constructor(
		public email: string,
		public password: string,
		public name: {},
		public images?: {}
	) { }
}