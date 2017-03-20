'use strict'
const mongoose =  require('mongoose');
const Schema   = mongoose.Schema;

const name 					= require ('../_atoms/string-required')
const description 			= require ('../_atoms/string-required')
const code 					= require ('../_atoms/string-required')
const created_at		    = require('../_atoms/date-default')
const updated_at 		    = require('../_atoms/date-default')
const deleted_at 		    = require('../_atoms/date-default')

const Tracker = new Schema({
	locations:[],
    trips:[],
    events:[],
	created_at,
	updated_at
});


const molecule =  mongoose.model('Tracker', Tracker);


module.exports = molecule
