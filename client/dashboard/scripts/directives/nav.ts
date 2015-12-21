/***************************************************

CREATED_BY: Yash Saxena

Title:
nav (abstract directive)

Purpose:
This is the nav that is at the top of the page

Renders
"/dashboard/templates/nav.html"

Styles
"dashboard/styles/nav.css"

Used:
Abstract directive - no url associated

***************************************************/

/**
 * Import Dependencies
 */
import { Component, View } from 'angular2/angular2';
import { Location }        from 'angular2/router'

/**
 * Decalare Component
 */
@Component({
	selector: 'nav',
    templateUrl: "/dashboard/templates/nav.html"
})

export class Nav {

    // init
	location: Location;

    constructor() {
        console.log("#### Nav Component");
    }    

    // ui-responders
    getLinkStyle(path) {

        if (path === this.location.path()) {
            return true;
        }
        else if (path.length > 0) {
            return this.location.path().indexOf(path) > -1;
        }
    }
}

