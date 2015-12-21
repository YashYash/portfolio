/***************************************************

CREATED_BY: Yash Saxena

Title:
nav (abstract directive)

Purpose:
This is the nav that is at the top of the page

Renders
"/home/templates/nav.html"

Styles
"home/styles/nav.css"

Used:
Abstract directive - no url associated

***************************************************/

/**
 * Import Dependencies
 */
import { Component, View, CORE_DIRECTIVES }   from 'angular2/angular2';
import { Location }                           from 'angular2/router'

// Router
import { ROUTER_DIRECTIVES, Router }          from 'angular2/router';

// Services
import { ComponentsState }                    from '/build/home/scripts/services/StateService.js';

/**
 * Decalare Component
 */
@Component({
    selector: 'nav',
    inputs: ['scrollTop: scrolltop'],
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    templateUrl: "/home/templates/nav.html"   
})

export class Nav {

    // init
    router: Router;
    location: Location;
    scrollTop: number;
    currentVisibleLink: string;
    showContact: boolean;
    contactCardVisible: boolean;

    constructor(router: Router) {
        console.log("#### Nav Component");
        var self = this;
        // Watch routes change
        router.subscribe(path => {
            self.routeChanged(path);
        });
    }

    afterViewInit() {
        var self = this;
    }

    // Triggered once the route is changed
    routeChanged(path: string) {
        ComponentsState.data['App'].path = path;
        this.currentVisibleLink = path;
    }    


    // ui-responders

    getComponentState(component) {
        return ComponentsState.data[component];
    }

    changeText() {
        ComponentsState.data['App'].testing = "CHODE MONKEY THO";
    }

    // Style the individual links
    getLinkStyle(path) {

        if (path === this.location.path()) {
            return true;
        }
        else if (path.length > 0) {
            return this.location.path().indexOf(path) > -1;
        }
    }

    isVisible() {
        if (this.scrollTop > (window.innerHeight - 100)) {
            return true;
        } else {
            return false;
        }
    }

    share(type) {
        let webUrl: string = "http://yash-saxena.com";
        let tweetTitle: string = "Check out Yash Saxena - Lead Frontend Engineer @ Stanza";
        let title:string = "Yash Saxena - Lead Frontend Engineer";
        let mailLink:string = "mailto:?Subject=Yash%20Saxena%20-%20Lead%20Frontend%20Engineer&body=Check%20out%20Yash%20Saxena's%20personal%20website%20here%20-%20" + webUrl + ".%20Dribbble%20-%20https://dribbble.com/yashsaxena.%20Github%20-%20https://github.com/YashYash.";
        let fbUrl: string = "https://www.facebook.com/sharer/sharer.php?u=" + webUrl;
        let twtUrl: string = 'https://twitter.com/intent/tweet?text=' + tweetTitle + '&url=' + encodeURIComponent(webUrl) + '&via=YashSaxena1217';
        let googleUrl: string = "https://plus.google.com/share?url=' + url, '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=600, height=600"

        switch(type) {
            case "facebook":
                window.open(fbUrl, "pop", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=750, height=630, top=100, left=300");
                break;
            case "twitter":
                window.open(twtUrl, "pop", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=750, height=630, top=100, left=300");
                break;
            case "google":
                window.open('https://plus.google.com/share?url=' + webUrl, '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=600, height=600');
                break;
            case "mail":
                window.location.href = mailLink;
                break;
            default:
                console.log("### NO VALID URL");
        }
    }

    goToLink(link) {
        window.location.href = "#/" + link;
    }

    showContactCard() {
        ComponentsState.data['ContactCard'].showOverlay = true;
        setTimeout(() => {
            ComponentsState.data['ContactCard'].fadeInOverlay = true;
            setTimeout(() => {
                ComponentsState.data['ContactCard'].showCard = true;
                setTimeout(() => {
                    ComponentsState.data['ContactCard'].showCross = true;
                }, 600);
            }, 400);            
        }, 50);
    }

}

