'use strict';

var angular = require('angular');

angular.module('portfolio').directive('navigation', require('./navigation.js')).directive('workTile', require('./work-tile.js'));
