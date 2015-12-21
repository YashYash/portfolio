/***************************************************

CREATED_BY: Yash Saxena

Title:
home (directive)

Purpose:
Show my home

Renders
"/home/templates/home.html"

Styles
"home/styles/home.css"

Used:
- home app - ( "/home" )

***************************************************/

/**
 * Import Dependencies
 */

import { Component, View } from 'angular2/angular2';

// Router
import { ROUTER_DIRECTIVES } from 'angular2/router';

/**
 * Decalare Component
 */
@Component({
	selector: 'home',
	directives: [ROUTER_DIRECTIVES],
	templateUrl: "/home/templates/home.html"
})


/**
 * Decalare Class
 */
export class Home {

	// init
	constructor() {
		console.log("#### Home component");
	}

	// ui- reponders
}

