/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-js/multi_map */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JMultiMap = io.vertx.core.MultiMap;

/**
 This class represents a MultiMap of String keys to a List of String values.
 <p>
 It's useful in Vert.x to represent things in Vert.x like HTTP headers and HTTP parameters which allow
 multiple values for keys.

 @class
*/
var MultiMap = function(j_val) {

  var j_multiMap = j_val;
  var that = this;

  /**
   Returns the value of with the specified name.  If there are
   more than one values for the specified name, the first value is returned.

   @public
   @param name {string} The name of the header to search 
   @return {string} The first header value or {@code null} if there is no such entry
   */
  this.get = function(name) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_multiMap.get(name);
    } else utils.invalidArgs();
  };

  /**
   Returns the values with the specified name

   @public
   @param name {string} The name to search 
   @return {Array.<string>} A immutable {@link java.util.List} of values which will be empty if no values are found
   */
  this.getAll = function(name) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_multiMap.getAll(name);
    } else utils.invalidArgs();
  };

  /**
   Checks to see if there is a value with the specified name

   @public
   @param name {string} The name to search for 
   @return {boolean} true if at least one entry is found
   */
  this.contains = function(name) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_multiMap.contains(name);
    } else utils.invalidArgs();
  };

  /**
   Return true if empty

   @public

   @return {boolean}
   */
  this.isEmpty = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_multiMap.isEmpty();
    } else utils.invalidArgs();
  };

  /**
   Gets a immutable Set of all names

   @public

   @return {Array.<string>} A {@link java.util.Set} of all names
   */
  this.names = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnSet(j_multiMap.names());
    } else utils.invalidArgs();
  };

  /**
   Adds a new value with the specified name and value.

   @public
   @param name {string} The name 
   @param value {string} The value being added 
   @return {MultiMap} a reference to this, so the API can be used fluently
   */
  this.add = function(name, value) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_multiMap.add(name, value);
      return that;
    } else utils.invalidArgs();
  };

  /**
   Adds all the entries from another MultiMap to this one

   @public
   @param map {MultiMap} 
   @return {MultiMap} a reference to this, so the API can be used fluently
   */
  this.addAll = function(map) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_multiMap.addAll(map._jdel);
      return that;
    } else utils.invalidArgs();
  };

  /**
   Sets a value under the specified name.
   <p>
   If there is an existing header with the same name, it is removed.

   @public
   @param name {string} The name 
   @param value {string} The value 
   @return {MultiMap} a reference to this, so the API can be used fluently
   */
  this.set = function(name, value) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      j_multiMap.set(name, value);
      return that;
    } else utils.invalidArgs();
  };

  /**
   Cleans this instance.

   @public
   @param map {MultiMap} 
   @return {MultiMap} a reference to this, so the API can be used fluently
   */
  this.setAll = function(map) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_multiMap.setAll(map._jdel);
      return that;
    } else utils.invalidArgs();
  };

  /**
   Removes the value with the given name

   @public
   @param name {string} The name of the value to remove 
   @return {MultiMap} a reference to this, so the API can be used fluently
   */
  this.remove = function(name) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_multiMap.remove(name);
      return that;
    } else utils.invalidArgs();
  };

  /**
   Removes all

   @public

   @return {MultiMap} a reference to this, so the API can be used fluently
   */
  this.clear = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_multiMap.clear();
      return that;
    } else utils.invalidArgs();
  };

  /**
   Return the number of keys.

   @public

   @return {number}
   */
  this.size = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_multiMap.size();
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_multiMap;
};

// We export the Constructor function
module.exports = MultiMap;