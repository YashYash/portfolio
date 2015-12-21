/***************************************************

CREATED_BY: Yash Saxena

Title:
app (directive)

Purpose:
This is the parent view inside of which the entire app renders
Get's the window's scroll position from the work container and passes it on to all the other child components
Detects if images have loaded prior to showing the page

Renders
"/home/templates/parent.html"

Used:
- home app

***************************************************/

/**
 * Import Dependencies
 */
/**
 * Import Dependencies
 */
import { Component, View, bootstrap, provide } 		   	   from 'angular2/angular2';
import { EventEmitter }                        		       from 'angular2/angular2';

// http
import { HTTP_PROVIDERS }                        		   from 'angular2/http';

// Core directives
import { CORE_DIRECTIVES } 		   	                       from 'angular2/angular2';

// router
import { ROUTER_DIRECTIVES, RouteConfig }       		   from 'angular2/router';
import { Location, ROUTER_PROVIDERS, LocationStrategy }    from 'angular2/router';
import { HashLocationStrategy, Route, AsyncRoute, Router } from 'angular2/router';

// components with views
import { Nav }                                			   from '/build/home/scripts/directives/nav.js';
import { Home }                                            from '/build/home/scripts/directives/home.js';
import { Work }                                            from '/build/home/scripts/directives/work.js';
import { About }                                           from '/build/home/scripts/directives/about.js';
import { LandingBanner }                                   from '/build/home/scripts/directives/landingBanner.js';
import { ContactCard }                                     from '/build/home/scripts/directives/contactCard.js';
import { MobileView }                                      from '/build/home/scripts/directives/mobileView.js';

// Factories
import { BackgroundImages }                                from '/build/home/scripts/factories/BackgroundImages.js';

// Services
import { ComponentsState }                                 from '/build/home/scripts/services/StateService.js';


/**
 * Decalare Component
 */
@Component({
	selector: 'app'
})

/**
 * Configure Routes
 */
@RouteConfig([
	new Route({ path: '/', component: Home, as: 'Home' }),
	new Route({ path: '/about', component: About, as: 'About' }),
	new Route({ path: '/work', component: Work, as: 'Work' })
])

@View({
	templateUrl: "/home/templates/parent.html",
	directives: [
		CORE_DIRECTIVES, 
		Nav, 
		Home, 
		Work, 
		About, 
		LandingBanner, 
		ContactCard, 
		MobileView, 
		ROUTER_DIRECTIVES
	]
})

/**
 * Decalare Class
 */
export class App {

	// init
	router: Router;
	scrollTop: number;
	windowHeight: number;
	path: string;
	location: Location;
	currentBackground: number;
	backgroundImages: Array<string>;
	imagesLoaded: boolean;
	loadingProgress: string;
	contactCardVisible: boolean;

	constructor(router: Router, location: Location) {
		var self = this;
		this.router = router;
		this.location = location;
		this.currentBackground = 0;
		this.rotateBackgrounds(0);
		this.backgroundImages = BackgroundImages.images();
		this.contactCardVisible = false;
		router.subscribe(path => {
			self.routeChanged(path);			
		});
	}

	// Called once the component is mounted
    afterViewInit() {
        var self = this;
		setTimeout(() => {
			self.checkIfImagesLoaded();
        }, 1000);
    }

    // On route change
    routeChanged(path:string) {
		this.path = path;
		$('.scroll-container').animate({
			scrollTop: 0
		}, 200); 
    }

    // On scroll
    onScroll(event) {
		this.scrollTop = event;
		this.windowHeight = window.innerHeight;
    }

	// Check if images loaded
	checkIfImagesLoaded() {
		var self = this;
        setTimeout(() => {
			$('.scroll-container').waitForImages(() => {
				self.imagesLoaded = true;
			}, (loaded, total) => {
				self.loadingProgress = (loaded / (total - 12)) * 100 + "%";
				if (self.loadingProgress === "100%") {
					self.imagesLoaded = true;
				}
			});
        }, 1000);
	}

	rotateBackgrounds(index) {
		var self = this;
		this.currentBackground = index;
		setTimeout(function() {
			if (index < self.backgroundImages.length - 1) {
				self.rotateBackgrounds(index + 1);
			} else {
				self.rotateBackgrounds(0)
			}
		}, 8000);			

	}

	styleBackground(background, index) {
		return {
			'background': "url(" + background + ")",
			'opacity': index === this.currentBackground ? 1 : 0
		}
	}
	
    // ui-responders

    getComponentState(component) {
        return ComponentsState.data[component];
    }	
}

/**
 * Bootstrap the app
 */
bootstrap(
	App,
	[
		ROUTER_PROVIDERS,
		HTTP_PROVIDERS,
		provide(LocationStrategy, {
			useClass:
			HashLocationStrategy
		})
	]
);
