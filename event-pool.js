'use strict';

const EventEmitter = require('events');

const events = new EventEmitter(); // creates event pool

module.exports = events;