/***************************************************

CREATED_BY: Yash Saxena

Title:
iphone (directive)

Purpose:
This is the phone on the home page. Its colors and contents change based on the scroll position

Renders
"/home/templates/iphone.html"

Styles
"home/styles/iphone.css"

Used:
- home app - ( "/" )

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
	selector: 'iphone',
	directives: [ROUTER_DIRECTIVES],
	templateUrl: "/home/templates/iphone.html"
})


/**
 * Decalare Class
 */
export class Iphone {

	// init
	constructor() {
		console.log("#### Iphone component");
	}

	// ui- reponders
}

