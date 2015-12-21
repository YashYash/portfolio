/***************************************************

CREATED_BY: Yash Saxena

Title:
auth (directive)

Purpose:
This is the parent view inside of which the global auth directive will be insterted into

Renders
"/dashboard/templates/auth.html"

Styles
"dashboard/styles/auth.css"

Used:
- dashboard app - ( "/" )

***************************************************/

/**
 * Import Dependencies
 */

import { Component, View }   from 'angular2/angular2';

// Router
import { ROUTER_DIRECTIVES } from 'angular2/router';

// components
import { Authenticate }      from '/build/global/scripts/directives/authenticate.js';

/**
 * Decalare Component
 */
@Component({
	selector: 'auth',
	directives: [ROUTER_DIRECTIVES, Authenticate],
	templateUrl: "/dashboard/templates/auth.html"
})

/**
 * Decalare Class
 */
export class Auth {

	// init
	name: string;

	constructor() {
		console.log("#### Auth component");
	}

	// ui- reponders
}