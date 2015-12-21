/***************************************************

CREATED_BY: Yash Saxena

Title:
authenticate (directive) (global)

Purpose:
This is a global directive that can be injected into any directive to authenticate a user

Renders
"/global/templates/authenticate.html"

Styles
inline styling, due to its modular nature

Used:
- dashboard app - ( "/" )
- home app - ( "/auth" )

***************************************************/

/**
 * Import Dependencies
 */

import { Component, View, bootstrap }        from 'angular2/angular2';
import { CORE_DIRECTIVES, FORM_DIRECTIVES }  from 'angular2/angular2';

// router
import { ROUTER_DIRECTIVES }                 from 'angular2/router';

// factories
import { AuthFactory }                       from '/build/global/scripts/factories/auth-factory.js';

// interfaces
import { Account }                           from '/build/global/scripts/interfaces/account.js'

/**
 * Decalare Component
 */

@Component({
	selector: 'authenticate',
	directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES],
	templateUrl: "/global/templates/authenticate.html"
})

/**
 * Decalare Class
 */

export class Authenticate {

	account = new Account();

	constructor() {

	}

	register() {
		var account = {
			email: this.account.email,
			password: this.account.password
		}
		AuthFactory.register(account).then((data) => {
			console.log(data);
		});
	}
}

