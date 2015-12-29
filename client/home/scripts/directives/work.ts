/***************************************************

CREATED_BY: Yash Saxena

Title:
Work (directive)

Purpose:
This is the parent view inside of which the global auth directive will be insterted into

Renders
"/home/templates/work.html"

Styles
"home/styles/work.css"

Used:
- home app - ( "/" )

***************************************************/

/**
 * Import Dependencies
 */

import { Component, View, CORE_DIRECTIVES }   from 'angular2/angular2';

// Router
import { ROUTER_DIRECTIVES, Router }          from 'angular2/router';

import { EventEmitter }                       from 'angular2/angular2';

// Components
import { Nav }                                from '/build/home/scripts/directives/nav.js';
import { Iphone }                             from '/build/home/scripts/directives/iphone.js';

// Factories
import { Projects }                           from '/build/home/scripts/factories/projects.js';

// Services
import { ComponentsState }                    from '/build/home/scripts/services/StateService.js';

/**
 * Declare Component
 */
@Component({
	selector: 'work',
	inputs: ['message', 'test'],
	events: ['scrollEvents: scrollevents'],
	directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, Nav, Iphone],
	templateUrl: "/home/templates/work.html"
})


/**
 * Declare Class
 */
export class Work {

	// init
	scrollEvents = new EventEmitter();
	scrollTop: number;
	windowHeight: number;
	projects: any[];
	pager: any[];
	pagerVisible: boolean;
	showDeatailsOverlay: boolean;
	fadeInDetailsOverlay: boolean;
	showDetails: boolean;
	fadeInDetails: boolean;
	detailsScrollDistance: number;

	constructor() {
		console.log("#### Work component");
		this.projects = Projects.getProjects();
		this.pager = [];
		this.pagerVisible = false;
		for (var i = 0; i < this.projects.length + 1; i++) {
			this.pager.push({
				visible: false,
				active: false,
				scale: 0.5
			});
		}
	}

	afterViewInit() {

        var self = this;

        $('.scroll-container').on("scroll", (e) => {
            self.ScrollHandler(e);
			clearTimeout($.data(this, 'scrollTimer'));
			$.data(this, 'scrollTimer', setTimeout(function() {
				self.stoppedScrolling()
			}, 400));            
        });
	}

    ScrollHandler($event) {
		this.windowHeight = window.innerHeight;
		this.scrollTop = $event.target.scrollTop;
		this.scrollEvents.next(this.scrollTop);
		if (this.scrollTop > this.windowHeight) {
			this.animateIndividualPage();
			if (!this.pagerVisible) {
			  this.pagerVisiblityAnimation(true);
			}
		} else {
			this.hideDetails();
			if(this.pagerVisible) {
				this.pagerVisiblityAnimation(false);
			}
		}
    }

    getDigits() {

		// Based on the current scroll position, determine which section to center in on
		// Step 1: scrollTop / windowHeight - will give you a decimal number representing how far down you have scrolled
		// Example - 1.5 - means you have scrolled one and a half way down the page
		// in 1.5 - 1 would represent the section and 5 tells you how far down that section you have scrolled
		// Using this knowlege you can check to see if they have scrolled past half way down a section (greater than 50) and also determine which section they are closest to - 1

		let windowHeight = this.windowHeight,
			scrollTop = this.scrollTop,
			scrollTimes: number = scrollTop / windowHeight,
			scrollTimesString: string = (scrollTop / windowHeight).toString(),
			firstDigit: string,
			secondAndThirdDigit: string = "0";

		if (scrollTimes > 0 && scrollTimes < 1) {
			firstDigit = "0";
		} else {
			firstDigit = scrollTimesString[0];
		}

		if (scrollTimesString[2] && scrollTimesString[3]) {
			secondAndThirdDigit = (scrollTimesString[2]).toString() + (scrollTimesString[3]).toString();
		}

		return {
			"firstDigit": firstDigit,
			"secondAndThirdDigit": secondAndThirdDigit
		}	
    }

    stoppedScrolling() {

    	// Declare initial values
		let windowHeight = this.windowHeight;
		let scrollTo: number = 0,
			firstDigit: string,
			secondAndThirdDigit: string = "0",
			section: number,
			sectionDistance: number;

		firstDigit = this.getDigits().firstDigit;
		secondAndThirdDigit = this.getDigits().secondAndThirdDigit;

		// Convert strings to number
		section = Number(firstDigit);
		sectionDistance = Number(secondAndThirdDigit);

		// If scrolled past half way down a section
		if(sectionDistance >= 50) {
			// Go to next section
			scrollTo = windowHeight * (section + 1);
		} else {
			// Remain in current section
			scrollTo = windowHeight * section;
		}

		// Scroll to the section
		$('.scroll-container').animate({
			scrollTop: scrollTo
		}, 200); 

    }

    // When you scroll past the banner - Slide in the dots
    // When you scroll to the banner - Slide out the dots
    pagerVisiblityAnimation(visible:boolean) {
		var self = this;

		function animatePager(index: number) {
			var newIndex = index + 1;
			self.pager[index].visible = visible;
			setTimeout(() => {
				if(index < self.pager.length - 1) {
					animatePager(newIndex);
				} else {
					// Recurrsion done
					self.pagerVisible = visible;
				}
			}, 100);
    	}
		animatePager(0);
    }   

    // When page scrolls, check to see scroll position
    // Based on the scroll position, adjust the scale(css) of each of the dots
    animateIndividualPage() {
		let windowHeight = this.windowHeight;
		let scrollTo: number = 0,
			firstDigit: string,
			secondAndThirdDigit: string = "0",
			currentPage: number,
			scale:number,
			sectionDistance: number;

		firstDigit = this.getDigits().firstDigit;
		secondAndThirdDigit = this.getDigits().secondAndThirdDigit;

		currentPage = Number(firstDigit) - 1;
		sectionDistance = Number(secondAndThirdDigit);

		scale = sectionDistance / 100;

		if(scale < 0.5) {
			scale = 0.5;
		}

		this.pager[currentPage].scale = scale;
		this.pager[currentPage].active = true;
		this.detailsScrollDistance = -1 * (windowHeight * (currentPage - 1));

		for (var i = 0; i < this.pager.length; i++) {
			if(i !== currentPage) {
				this.pager[i].active = false;				
			}	
		}

    }

    // Style each individual dot
    getPageStyle(index) {
		let scale:number;
		if(this.pager[index].active) {
			scale = this.pager[index].scale
		} else {
			scale = 0.5
		}

    	return {
			"opacity": this.pager[index].visible ? 1 : 0,
			"transform": this.pager[index].visible ? "translateX(0) scale(" + scale + ", " + scale + ")" : "translateX(-20px)",
			"box-shadow": this.pager[index].active ? "0 0 10px rgba(238,238,238,1)" : "none",
			"border": this.pager[index].active ? "2px solid rgba(238,238,238,1)" : "2px solid rgba(238,238,238, 0)"
    	}
    }

    // Style details overlay
    detailsOverlayStyling() {
    	return {
    		"display": this.showDeatailsOverlay ? "block" : "none",
    		"opacity": this.fadeInDetailsOverlay ? 0.8 : 0    	
    	}
    }

    // Style deatails content
	detailsContainerStyling() {
		return {
			"display": this.showDetails ? "block" : "none",
			"opacity": this.fadeInDetails ? 1 : 0,
			"transform": this.fadeInDetails ? "scale(1,1)" : "scale(0.5, 0.5)"
 		}
	}  

	detailsSectionStyling() {

		return {
			"top": this.detailsScrollDistance + "px"
		}
	}
	// ui- reponders
    getComponentState(component) {
        return ComponentsState.data[component];
    }

	goToSection(index) {
		let windowHeight:number = this.windowHeight,
			scrollTop:number = this.scrollTop,
			sectionDistance:number,
			scrollTo: number,
			section:number;


		section = index + 1;
		scrollTo = windowHeight * section;

		// Scroll to the section
		$('.scroll-container').animate({
			scrollTop: scrollTo
		}, 400); 		
	}

	viewDetails(index) {
		var self = this;
		this.showDeatailsOverlay = true;
		setTimeout(() => {
			self.fadeInDetailsOverlay = true;
			self.showDetails = true;
			setTimeout(() => {
				self.fadeInDetails = true;
			}, 400);
		}, 150);
	}

	hideDetails() {
		var self = this;
		this.fadeInDetails = false;
		setTimeout(() => {
			self.showDetails = false;
			self.fadeInDetailsOverlay = false;
			setTimeout(() => {
				self.showDeatailsOverlay = false;
			}, 150);
		}, 400);
	}

	openLink(link) {
		let win = window.open(link);
		win.focus();
	}
}
