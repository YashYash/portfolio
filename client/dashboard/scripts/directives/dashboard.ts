/***************************************************

CREATED_BY: Yash Saxena

Title:
dashboard (directive)

Purpose:
This is the parent view for the dashboard

Renders
"/dashboard/templates/dashboard.html"

Styles
"dashboard/styles/dashboard.css"

Used:
- dashboard app - ( "/dashboard" )

***************************************************/

/**
 * Import Dependencies
 */
import { Component, View }   from 'angular2/angular2';
import { ROUTER_DIRECTIVES } from 'angular2/router';

/**f
 * Decalare Component
 */
@Component({
	selector: 'dashboard',
	directives: [ROUTER_DIRECTIVES],
	templateUrl: "/dashboard/templates/dashboard.html"
})

/**
 * Decalare Class
 */
export class Dashboard {

	// init
	name: string;

	constructor() {
		this.name = "Dashboard";
	}

	// ui-responders
}

