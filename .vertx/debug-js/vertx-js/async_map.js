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

/** @module vertx-js/async_map */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JAsyncMap = io.vertx.core.shareddata.AsyncMap;

/**

 An asynchronous map.

 @class
*/
var AsyncMap = function(j_val) {

  var j_asyncMap = j_val;
  var that = this;

  /**
   Get a value from the map, asynchronously.

   @public
   @param k {Object} the key 
   @param resultHandler {function} - this will be called some time later with the async result. 
   */
  this.get = function(k, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && true && typeof __args[1] === 'function') {
      j_asyncMap.get(utils.convParamTypeUnknown(k), function(ar) {
      if (ar.succeeded()) {
        resultHandler(utils.convReturnTypeUnknown(ar.result()), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**
   Like {@link AsyncMap#put} but specifying a timeout. If the value cannot be put within the timeout a
   failure will be passed to the handler

   @public
   @param k {Object} the key 
   @param v {Object} the value 
   @param timeout {number} the timoeout, in ms 
   @param completionHandler {function} the handler 
   */
  this.put = function() {
    var __args = arguments;
    if (__args.length === 3 && true && true && typeof __args[2] === 'function') {
      j_asyncMap.put(utils.convParamTypeUnknown(__args[0]), utils.convParamTypeUnknown(__args[1]), function(ar) {
      if (ar.succeeded()) {
        __args[2](null, null);
      } else {
        __args[2](null, ar.cause());
      }
    });
    }  else if (__args.length === 4 && true && true && typeof __args[2] ==='number' && typeof __args[3] === 'function') {
      j_asyncMap.put(utils.convParamTypeUnknown(__args[0]), utils.convParamTypeUnknown(__args[1]), __args[2], function(ar) {
      if (ar.succeeded()) {
        __args[3](null, null);
      } else {
        __args[3](null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**
   Link {@link AsyncMap#putIfAbsent} but specifying a timeout. If the value cannot be put within the timeout a
   failure will be passed to the handler

   @public
   @param k {Object} the key 
   @param v {Object} the value 
   @param timeout {number} the timeout, in ms 
   @param completionHandler {function} the handler 
   */
  this.putIfAbsent = function() {
    var __args = arguments;
    if (__args.length === 3 && true && true && typeof __args[2] === 'function') {
      j_asyncMap.putIfAbsent(utils.convParamTypeUnknown(__args[0]), utils.convParamTypeUnknown(__args[1]), function(ar) {
      if (ar.succeeded()) {
        __args[2](utils.convReturnTypeUnknown(ar.result()), null);
      } else {
        __args[2](null, ar.cause());
      }
    });
    }  else if (__args.length === 4 && true && true && typeof __args[2] ==='number' && typeof __args[3] === 'function') {
      j_asyncMap.putIfAbsent(utils.convParamTypeUnknown(__args[0]), utils.convParamTypeUnknown(__args[1]), __args[2], function(ar) {
      if (ar.succeeded()) {
        __args[3](utils.convReturnTypeUnknown(ar.result()), null);
      } else {
        __args[3](null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**
   Remove a value from the map, asynchronously.

   @public
   @param k {Object} the key 
   @param resultHandler {function} - this will be called some time later to signify the value has been removed 
   */
  this.remove = function(k, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && true && typeof __args[1] === 'function') {
      j_asyncMap.remove(utils.convParamTypeUnknown(k), function(ar) {
      if (ar.succeeded()) {
        resultHandler(utils.convReturnTypeUnknown(ar.result()), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**
   Remove a value from the map, only if entry already exists with same value.

   @public
   @param k {Object} the key 
   @param v {Object} the value 
   @param resultHandler {function} - this will be called some time later to signify the value has been removed 
   */
  this.removeIfPresent = function(k, v, resultHandler) {
    var __args = arguments;
    if (__args.length === 3 && true && true && typeof __args[2] === 'function') {
      j_asyncMap.removeIfPresent(utils.convParamTypeUnknown(k), utils.convParamTypeUnknown(v), function(ar) {
      if (ar.succeeded()) {
        resultHandler(ar.result(), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**
   Replace the entry only if it is currently mapped to some value

   @public
   @param k {Object} the key 
   @param v {Object} the new value 
   @param resultHandler {function} the result handler will be passed the previous value 
   */
  this.replace = function(k, v, resultHandler) {
    var __args = arguments;
    if (__args.length === 3 && true && true && typeof __args[2] === 'function') {
      j_asyncMap.replace(utils.convParamTypeUnknown(k), utils.convParamTypeUnknown(v), function(ar) {
      if (ar.succeeded()) {
        resultHandler(utils.convReturnTypeUnknown(ar.result()), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**
   Replace the entry only if it is currently mapped to a specific value

   @public
   @param k {Object} the key 
   @param oldValue {Object} the existing value 
   @param newValue {Object} the new value 
   @param resultHandler {function} the result handler 
   */
  this.replaceIfPresent = function(k, oldValue, newValue, resultHandler) {
    var __args = arguments;
    if (__args.length === 4 && true && true && true && typeof __args[3] === 'function') {
      j_asyncMap.replaceIfPresent(utils.convParamTypeUnknown(k), utils.convParamTypeUnknown(oldValue), utils.convParamTypeUnknown(newValue), function(ar) {
      if (ar.succeeded()) {
        resultHandler(ar.result(), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**
   Clear all entries in the map

   @public
   @param resultHandler {function} called on completion 
   */
  this.clear = function(resultHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_asyncMap.clear(function(ar) {
      if (ar.succeeded()) {
        resultHandler(null, null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**
   Provide the number of entries in the map

   @public
   @param resultHandler {function} handler which will receive the number of entries 
   */
  this.size = function(resultHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_asyncMap.size(function(ar) {
      if (ar.succeeded()) {
        resultHandler(ar.result(), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_asyncMap;
};

// We export the Constructor function
module.exports = AsyncMap;