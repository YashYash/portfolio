/***************************************************

CREATED_BY: Yash Saxena

Title:
work (directive)

Purpose:
About me

Renders
"/home/templates/about.html"

Styles
"home/styles/about.css"

Used:
- home app - ( "/about" )

***************************************************/

/**
 * Import Dependencies
 */

import { Component, View, CORE_DIRECTIVES }   from 'angular2/angular2';

// Router
import { ROUTER_DIRECTIVES }                  from 'angular2/router';

/**
 * Decalare Component
 */
@Component({
	selector: 'about',
	inputs: ['scrollTop: scrolltop', 'windowHeight: windowheight'],
	directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
	templateUrl: "/home/templates/about.html"
})


/**
 * Decalare Class
 */
export class About {


	// init

	constructor() {
		console.log("#### About component");
	}

	afterViewInit() {
		var self = this;
		
	}	
	// ui- reponders
}

