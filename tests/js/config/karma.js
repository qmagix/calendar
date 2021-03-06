/**
 * ownCloud - Calendar App
 *
 * @author Raghu Nayyar
 * @author Georg Ehrke
 * @copyright 2016 Raghu Nayyar <beingminimal@gmail.com>
 * @copyright 2016 Georg Ehrke <oc.list@georgehrke.com>
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU AFFERO GENERAL PUBLIC LICENSE for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with this library.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

 module.exports = function(config) {
   'use strict';

   config.set({
     frameworks: ['jasmine'],
     basePath: '../../../',
     files: [
  			'../../core/vendor/jquery/dist/jquery.js',
		 	'../../core/vendor/jquery/jquery.js',
  			//'3rdparty/ical/ical.js',
  			'../../core/vendor/moment/min/moment-with-locales.js',
  			'js/vendor/lodash/lodash.min.js',
  			'js/vendor/jstzdetect/jstz.min.js',
  			'js/vendor/fullcalendar/dist/fullcalendar.min.js',
  			'js/vendor/angular/angular.js',
  			'js/vendor/angular-route/angular-route.js',
  			'js/vendor/angular-mocks/angular-mocks.js',
  			'js/vendor/angular-ui/angular-ui.js',
  			'js/vendor/angular-ui/angular-ui-calendar.js',
  			'js/vendor/angular-ui/angular-ui-sortable.js',
  			'js/vendor/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js',
  			'js/vendor/appframework/app.js',
  			'tests/js/stubs/app.js',
  			'js/app/**/*.js',
  			'tests/js/unit/**/*.js',
  	],

		exclude: [

		],

		reporters: ['coverage','progress'],

		port: 8080,

		colors: true,

		autoWatch: false,

		browsers: ['Firefox'],

		singleRun: false
	});
};
