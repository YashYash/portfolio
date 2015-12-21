/***************************************************

CREATED_BY: Yash Saxena

Title:
contact card (directive)

Purpose:
Contact Card

Renders
"/home/templates/contact-card.html"

Styles
"home/styles/contact-card.css"

Used:
- home app - abstract - in parent.html

***************************************************/

/**
 * Import Dependencies
 */

import { Component, View, CORE_DIRECTIVES }   from 'angular2/angular2';

// Router
import { ROUTER_DIRECTIVES }                  from 'angular2/router';

// Services
import { ComponentsState }                    from '/build/home/scripts/services/StateService.js';

/**
 * Decalare Component
 */
@Component({
	selector: 'contact-card',
	directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
	templateUrl: "/home/templates/contact-card.html"
})


/**
 * Decalare Class
 */
export class ContactCard {

	// init
	constructor() {
		console.log("#### Contact Card Component");
	}

    // ui-responders
    getComponentState(component) {
        return ComponentsState.data[component];
    }

    hideContactCard() {
		ComponentsState.data['ContactCard'].showCross = false;
		setTimeout(() => {
			ComponentsState.data['ContactCard'].showCard = false;
			setTimeout(() => {
				ComponentsState.data['ContactCard'].fadeInOverlay = false;
				setTimeout(() => {
					ComponentsState.data['ContactCard'].showOverlay = false;
				}, 400);
			}, 600);
		}, 400);
    }

    goTo(link) {
		let url: string = "";
		if (link === 'linkedin') {
			url = "https://www.linkedin.com/in/yash-saxena-96314a87";
		} else {
			url = "https://dribbble.com/yashsaxena";
		}

		let win = window.open(url);
		win.focus();
    }

    sendMail() {
		let mailLink: string = "mailto:?Subject=Hey%20Yash.%20I%20checked%20out%20your%20site!%20Let's%20get%20in%20touch.&body=Dear%20Yash,&to=yash.saxena1217@gmail.com";
		window.location.href = mailLink;
    }
}

