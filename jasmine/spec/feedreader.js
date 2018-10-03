/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        allFeeds.forEach(function (el, index) {
            const url = el.url;
            it('url at index ' + index  + ' should be defined and not empty', function () {
                expect(url).toBeDefined();
                expect(url.length).not.toBe(0);
            });
        });



         /* in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        allFeeds.forEach(function (ele, index) {
            const name = ele.name;
            it('name at index' + index + ' should be defined and not empty', function () {
                expect(name).toBeDefined();
                expect(name.length).not.toBe(0);
            });
        })


    });

// * hidden by default. You'll have to analyze the HTML and
    // * the CSS to determine how we're performing the
    // * hiding/showing of the menu element.
    // */

    describe('the menu', function () {
        const menu = $('body').hasClass('menu-hidden');

        it('menu should be hidden by the default', function () {
            expect(menu).toBe(true);
        });
    });


     /* visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    //

   describe('menu changes', function () {
       const menu = $('body').hasClass('menu-hidden');
       it('it should change ', function () {
           //selectam body i provjerim ima li klasu
           $('body').hasClass('menu-hidden');

           //selectam hambuger icon i klik na njega
           $('.menu-icon-link').click();
           // ocekujem da nije true tj nema klasu menu
           expect($('body').hasClass('menu-hidden')).not.toBe(true);

           // ponovno selctam body i provjerim da ima klasu
           $('body').hasClass('menu-hidden');

           //selectam hambuger icon i klik na njega
           $('.menu-icon-link').click();

           //ocekujem da je treu tj da ima klasu
           expect($('body').hasClass('menu-hidden')).toBe(true);


       });
   });



    describe('initialEntries', function () {

       /* function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       * Remember, loadFeed() is asynchronous so this test will require
       * the use of Jasmine's beforeEach and asynchronous done() function.*/

        // callback

        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            })
        });
        it('should be at least a single entry element within the .feed container', () => {
            let feed = document.querySelectorAll('.feed .entry');

            expect(feed.length).toBeGreaterThan(0)
        });
    });


    describe('New Feed Selection', function () {
        let firstFeed;
        let secondFeed;
        beforeEach(done => {
            loadFeed(1, () => {
                firstFeed = document.querySelector('.entry-link').innerHTML;
                loadFeed(2, () => {
                   secondFeed = document.querySelector('.entry-link').innerHTML;
                    done();
                });
            });
        });
        it('loads new feeds', (done) => {
            expect(secondFeed !== firstFeed).toBe(true); done();
        });
    })

    //    /* by the loadFeed function that the content actually changes.
    //    * Remember, loadFeed() is asynchronous.
    //    */

}());
