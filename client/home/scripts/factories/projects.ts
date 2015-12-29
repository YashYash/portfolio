export const Projects = {

  getProjects: function() {
    const projects = [{
      "heading": "SPOTON TO STANZA",
      "subHeading": "Earlier this year, Stanza rebranded from SpotOn to Stanza. Along with the rebrand came a full out product redesign. I rebuilt the home page, about us, contact us, partners and terms/privacy pages.",
      "stack": "NodeJs, Express, MongoDB, Angular 1.x, Ionic, Html5, Css",
      "details": "The rebrand was a pretty big project which involved a lot of work, primarily on the front end. Most of the work was pretty straight forward. The hardest part was building the actual landing page, which is full of animations that are pretty much movies. We were not able to use gifs, since each of the sections on the homepage do not have solid backgrounds. Therefore I had to do all the animations in pure html, css and javascript. I abused the ng-class and ng-style directives that angular provides. The performance was very smooth and we did not see any lags. I made as many of the elements in html/css (ex. image of an iphone or laptop), since we lazy load images which affects the appearance of the animations.",
      "imageLeft": "https://d13yacurqjgara.cloudfront.net/users/754124/screenshots/2420770/attachments/469398/screen_shot_2015-12-22_at_2.24.43_pm.png",
      "imageCenter": "https://d13yacurqjgara.cloudfront.net/users/754124/screenshots/2420770/attachments/469402/screen_shot_2015-12-22_at_2.14.52_pm.png",
      "imageRight": "https://d13yacurqjgara.cloudfront.net/users/754124/screenshots/2420770/attachments/469403/screen_shot_2015-12-22_at_2.16.47_pm.png",
      "dribbble": "https://dribbble.com/shots/2420770-Stanza-s-new-Homepage",
      "link": "https://stanza.co"
    }, {
      "heading": "INTERNAL DASHBOARD",
      "subHeading": "I built this internal dashboard in my free time. It categorizes analytics and errors based on the angular app. I used socket.io to show notifications, and errors in real time. I only used directives by nesting them and creating the dom tree. This proved to actually perform better and resulted in cleaner code.",
      "stack": "NodeJs, Express, MongoDB, Angular 1.x, Socket.io, Ionic, Html5, Css, Photoshop, Illustrator",
      "details": "At work we had no way of keeping track of client side errors within our 7 different Angular Apps, especially ones that don't actually throw an error (ex. Image url is incorrect). Therefore I built this internal dashboard for both the tech and business team. On this dashboard, we can analyze the users' actions by tracking them as they make their way through our products. In order to make the dashboard update in real time, I used Socket.io, since I have used it a few times in the past to make chatrooms. So when we catch a client error, we save it in an errors mongo collection, and then emit the error to the Angular Client to display it. This is the first Angular App that I built using only directives. Therefore all the controllers are pretty much empty, and all the logic lyes wihin nested modular directives, by passing functions and data down the dom tree. I desinged this in photoshop and illustrator.",
      "imageLeft": "https://d13yacurqjgara.cloudfront.net/users/754124/screenshots/2395786/attachments/462316/screen_shot_2015-12-08_at_7.19.46_pm.png",
      "imageCenter": "https://d13yacurqjgara.cloudfront.net/users/754124/screenshots/2395786/attachments/462315/screen_shot_2015-12-08_at_7.15.09_pm.png",
      "imageRight": "https://d13yacurqjgara.cloudfront.net/users/754124/screenshots/2395786/attachments/462317/screen_shot_2015-12-08_at_7.20.14_pm.png",
      "dribbble": "https://dribbble.com/shots/2395786-Internal-Dashboard"
    }, {
        "heading": "DASHBOARD",
        "subHeading": "I worked really hard on this dashboard. It is a pretty heavy product, which resulted in a lot of obstacles that we needed to tackle. I got to manage a talened team of engineers. We were all really happy with the final product.",
        "stack": "NodeJs, Express, MongoDB, Angular 1.x, Socket.io, Ionic, Html5, Css",
        "details": "The Dasbhoard is one of our main client facing products. This dashboard is used to create, read, update and delete events from within publishers' custom calendars. The UX for creating an event is all inline, which is pretty challenging to style to work across all browsers. When publishers edit events in the dashboard, it will update their subscriber's calendars in real-time. Making this happen took a lot of time and effort, since updating subscriptions is very expensive, making us push google's api to the limit on a daily basis. The dashboard is also used to view analytics. The dasboard is a very heavy product which turned out really nice. Check it out for yourself by clicking 'link' below and signing up real quick. Or you can see the designs by clicking the 'Dribbble' link.",
        "imageLeft": "https://d13yacurqjgara.cloudfront.net/users/754124/screenshots/2398524/attachments/463111/screen_shot_2015-12-10_at_2.14.00_am.png",
        "imageCenter": "https://d13yacurqjgara.cloudfront.net/users/754124/screenshots/2398524/attachments/463110/screen_shot_2015-12-10_at_2.05.18_am.png",
        "imageRight": "https://d13yacurqjgara.cloudfront.net/users/754124/screenshots/2398524/attachments/463112/screen_shot_2015-12-10_at_2.14.42_am.png",
        "dribbble": "https://dribbble.com/shots/2398524-New-Stanza-Dashboard",
        "link": "https://stanza.co/signup"
    }, {
      "heading": "BUTTON POPUP",
      "subHeading": "This is our most used product at Stanza. When a client, like the NBA Warriors, work with us, we give them our 'Add to Calendar' button to put on their site. When that button is clicked by their fans, our Button Popup opens up.",
      "stack": "NodeJs, Express, MongoDB, Angular 1.x, Socket.io, Ionic, Html5, Css",
      "details": "The Button Popup is our most used product, since it triggered by our 'Add to Calendar' button which is present on the site of all NBA, NHL, NFL, MLB, NCAA Sports, Rugby Leagues etc... sports teams. The button popup lets the user choose a calendar (created by the publisher, ex NBA team) to add to their calendar. Then they can choose which calendar (Google, Exchange, Ical, Yahoo etc...) to sync with. Once the calendar's are synced, we show the user some other calendars that they might be interested in. The button was built using Angular. It was a really quick product to build and it has not thrown any errors since it has been deployed. We have had 114,504,328 syncs so far using this button popup. See it live, or check it out on Dribbble",
      "imageLeft": "https://d13yacurqjgara.cloudfront.net/users/754124/screenshots/2399591/attachments/463419/synced.jpg",
      "imageCenter": "https://d13yacurqjgara.cloudfront.net/users/754124/screenshots/2399591/attachments/463416/categories.jpg",
      "imageRight": "https://d13yacurqjgara.cloudfront.net/users/754124/screenshots/2399591/attachments/463417/sync.jpg",
      "dribbble": "https://dribbble.com/shots/2399591-Stanza-button-popup-redesign",
      "link": "https://www.stanza.co/button/launch?calendar=https%3A%2F%2Fstanza.co%2Fschedules%2Fstanford"      
    }, {
      "heading": "TIMELINE",
      "subHeading": "The Stanza timeilne is product that we provide to all our users. It is a tool that they can use to share their calendars in a presentable way. This product also acts as our SEO page, to increase our rankings on google search. These pages can be themed by passing in primary and secondary colors.",
      "stack": "NodeJs, Express, MongoDB, Angular 1.x, Socket.io, Ionic, Html5, Css",
      "details": "The timeline is a product that we give to all our clients. It is used to share a publisher's calendar in a very presentable way. The timeline can be themed by passing it 2 colors, primary and a secondary. The timeline acts as our SEO page, therefore I spent a lot of time optimizing the speed of this page. The timeline was also built in Angular and has been engaged with by a lot of our users. See it live or check it out on dribbble below.",
      "imageLeft": "https://d13yacurqjgara.cloudfront.net/users/754124/screenshots/2400394/attachments/463629/screen_shot_2015-12-10_at_11.46.32_pm.png",
      "imageCenter": "https://d13yacurqjgara.cloudfront.net/users/754124/screenshots/2400394/attachments/463627/screen_shot_2015-12-10_at_11.45.22_pm.png",
      "imageRight": "https://d13yacurqjgara.cloudfront.net/users/754124/screenshots/2400394/attachments/463628/screen_shot_2015-12-10_at_11.45.59_pm.png",
      "dribbble": "https://dribbble.com/shots/2400394-Stanza-Timeline",
      "link": "https://www.stanza.co/@nba-warriors"
    }, {
      "heading": "APP COMING SOON",
      "subHeading": "I designed and built this app in my spare time. This is a prototype that I built to user test the UX. It was built in Ionic, for quickness sake and cross device testing. Once the perfect UX is determined, it will be built in Swift and Java.",
      "stack": "NodeJs, Firebase, GeoFire, Angular, Ionic, Css, Objective-C, Cardova, Html5, Css, Illustrator, Photoshop",
      "details": "I cannot disclose too much information about this app, since it is not live yet. However, this app has to do with finding cool locations around you. All the Geo location queries were done using GeoFire, and all the user/location information was saved in Firebase and MongoDB. I built and designed the app. It was built using Ionic, which is used to make hypbrid apps. I did this just so I could build a quick prototype to user test, before building the final version in Swift and Java. Check it out on dribbble below. I built and designed the prototype myself. Now I have a team to build out the final product with.",
      "imageLeft": "https://d13yacurqjgara.cloudfront.net/users/754124/screenshots/2176082/attachments/464013/leftimage.jpg",
      "imageCenter": "https://d13yacurqjgara.cloudfront.net/users/754124/screenshots/2176082/attachments/464014/centerimage.jpg",
      "imageRight": "https://d13yacurqjgara.cloudfront.net/users/754124/screenshots/2176082/attachments/464015/rightimage.jpg",
      "dribbble": "https://dribbble.com/shots/2176082-App-coming-soon"
    }, {
      "heading": "DECISIONS APP",
      "subHeading": "This is an app that I am currently building in Swift. I first built it in ionic for Android and IOS to user test it. The app helps users make decisions by sharing the questions with close friends and family and analyzing the results inputted through the app.",
      "stack": "NodeJs, Firebase, GeoFire, Angular 1.x, Angular 2.0, Ionic, Css, Objective-C, Cardova, Html5, Css, Swift 2.0, MongoDB, Illustrator, Photoshop",
      "details": "Decisions is an app that I am building. I built this app from server to client. On the server I am using mongoDB hosted on Amazon. I first built this app in ionic for the prototype which turned out really well, and now I am building out the actual final product in Swift for ios. This app helps you make day to day decisions by using the help of your family and friends. I am hoping to get this live before the end of January 2016. Check out the prototype's designs on dribbble. I cannot give away the UI/UX for the final product yet. I built and designed the prototype myself. Now I have a team to build out the final product with.",
      "imageLeft": "https://d13yacurqjgara.cloudfront.net/users/754124/screenshots/2176706/attachments/464025/leftimage.jpg",
      "imageCenter": "https://d13yacurqjgara.cloudfront.net/users/754124/screenshots/2176706/attachments/464023/decisions-center.jpg",
      "imageRight": "https://d13yacurqjgara.cloudfront.net/users/754124/screenshots/2176706/attachments/464024/decisions-right.jpg",
      "dribbble": "https://dribbble.com/shots/2176706-Decisions-App-Coming-Soon"
    }]
    return projects;
  }

};