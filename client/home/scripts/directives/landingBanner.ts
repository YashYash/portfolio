/***************************************************

CREATED_BY: Yash Saxena

Title:
home (directive)

Purpose:
This is the parent view inside of which the global auth directive will be insterted into

Renders
"/home/templates/landing-banner.html"

Styles
"home/styles/landing-banner.css"

Used:
- home app - ( "/" )

***************************************************/

/**
 * Import Dependencies
 */

// Core dependencies
import { Component, View, CORE_DIRECTIVES }   from 'angular2/angular2';

// Router
import { ROUTER_DIRECTIVES, Router }          from 'angular2/router';

// Services
import { ComponentsState }                    from '/build/home/scripts/services/StateService.js';

/**
 * Decalare Component
 */
@Component({
	selector: 'landing-banner',
	inputs: ['imagesLoaded: imagesloaded', 'loadingProgress: loadingprogress'],
	directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
	templateUrl: "/home/templates/landing-banner.html"
})


/**
 * Decalare Class
 */
export class LandingBanner {

	// init
	router: Router;
	scrollTop: number;
	showHeading: boolean;
	showSubHeading: boolean;
	startLoading: boolean;
	loadingProgress: any;
	imagesLoaded: boolean;
	workVisible: boolean;
	showArrowTail: boolean;
	showArrowHead: boolean;
	aboutVisible: boolean;
	showLoadingCopy: boolean;

	constructor(router: Router) {
		console.log("#### Landing Banner Component");
		var self = this;
		this.startLoading = false;
		this.loadingProgress = 0;
		this.imagesLoaded = false;
		this.workVisible = false;
		this.aboutVisible = false;
		this.showArrowTail = false;
		this.showArrowHead = false;
		this.showLoadingCopy = false;

		// Watch routes change
		router.subscribe(path => {
			self.routeChanged(path);
		});
	}

	// init
	afterViewInit() {
        var self = this;
        this.animateIntro();

        // Detect scroll position
        $('.scroll-container').on("scroll", (e) => {
            self.ScrollHandler(e);
        });  
	}

	// Triggered once the route is changed
	routeChanged(path:string) {
		this.animateBanner(path);
	}

	// Triggered when the page scrolls
    ScrollHandler($event) {
        setTimeout(() => {
            this.scrollTop = $event.target.scrollTop;
        }, 10);
    }	

    // Animate the intro
    animateIntro() {
		var self = this;
		setTimeout(() => {
			self.showHeading = true;
			setTimeout(() => {
				self.showSubHeading = true;
				setTimeout(() => {
					self.showLoadingCopy = true;
					if (!self.loadingProgress) {
						self.loadingProgress = "20%";
					}
				}, 500);
			}, 500);			
		}, 200);
	}

    // Shows the home page
    // On click as well has called from this.routeChanged
    animateBanner(page:string) {
    	switch(page) {   		
			case "work":
				this.aboutVisible = false;
				this.workVisible = true;
				break;   		
			case "about":
				this.workVisible = false;
				this.aboutVisible = true;
				break;  		
			default:
				this.workVisible = false;
				this.aboutVisible = false; 
    	}
    }

    // Ui-responders
    goToPage(page) {
		window.location.href = "#/" + page;
    }
    
	styleOverlay() {
		return {
			"opacity": this.imagesLoaded ? 0 : 1
		}
	}

	loadingAnimation() {
		return {
			"width": this.loadingProgress !== "" ? this.loadingProgress : 0
		}
	}

}

