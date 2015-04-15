/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/':{controller:"Static",action:"home",locals: {layout: '/static/layout'}},
  '/lois':{controller:"Static",action:"lois",locals: {layout: "/static/layout"}},
  '/gdrive':{controller:"Static",action:"gDrive",locals: {layout: "/static/layout"}},
  '/mchulakov':{controller:"Static",action:"chulakovMov",locals: {layout: "/static/layout"}},
  '/reference':{controller:"Static",action:"reference",locals: {layout: "/static/layout"}},
  '/chulakov':{controller:"Static",action:"chulakov",locals: {layout: "/static/layout"}},
  '/static/chulakoveffect1':{controller:"Static",action:"chulakoveffect1",locals: {layout: "/static/layout"}},
  '/static/chulakoveffect2':{controller:"Static",action:"chulakoveffect2",locals: {layout: "/static/layout"}},
  '/static/chulakoveffect3':{controller:"Static",action:"chulakoveffect3",locals: {layout: "/static/layout"}}
    //{view: 'homepage'}
	
  

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
