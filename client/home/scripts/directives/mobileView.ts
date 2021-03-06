/***************************************************

CREATED_BY: Yash Saxena

Title:
mobileView (directive)

Purpose:
The simple mobile version of the website

Renders
"/home/templates/mobile-view.html"

Styles
"home/styles/mobile-view.css"

Used:
- home app - ( "/" )

***************************************************/

/**
 * Import Dependencies
 */

import { Component, View, CORE_DIRECTIVES }   from 'angular2/angular2';

// Router
import { ROUTER_DIRECTIVES }                  from 'angular2/router';

// Factories
import { Projects }                           from '/build/home/scripts/factories/projects.js';

/**
 * Decalare Component
 */
@Component({
	selector: 'mobile-view',
	directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
	templateUrl: "/home/templates/mobile-view.html"
})


/**
 * Decalare Class
 */
export class MobileView {


	// init
	projects: any[];

	constructor() {
		console.log("#### Mobile View component");
		this.projects = Projects.getProjects();
	}

	afterViewInit() {
		var self = this;
		var mySwiper = new Swiper('.swiper-container', {
			// Optional parameters
			direction: 'horizontal',
			loop: true,
			touchEventsTarget: 'container',
			effect: "cube",
			
			// If we need pagination
			pagination: '.swiper-pagination',
    
		}) 		

	}	
	// ui- reponders
	goTo(link:string) {
		let win = window.open(link);
		win.focus();
	}

    sendMail() {
		let mailLink: string = "mailto:?Subject=Hey%20Yash.%20I%20checked%20out%20your%20site!%20Let's%20get%20in%20touch.&body=Dear%20Yash,&to=yash.saxena1217@gmail.com";
		window.location.href = mailLink;
    }
}

