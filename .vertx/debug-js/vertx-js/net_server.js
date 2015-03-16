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

/** @module vertx-js/net_server */
var utils = require('vertx-js/util/utils');
var NetSocketStream = require('vertx-js/net_socket_stream');
var Measured = require('vertx-js/measured');
var NetSocket = require('vertx-js/net_socket');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JNetServer = io.vertx.core.net.NetServer;

/**
 Represents a TCP server

 @class
*/
var NetServer = function(j_val) {

  var j_netServer = j_val;
  var that = this;
  Measured.call(this, j_val);

  /**
   The metric base name

   @public

   @return {string} the metric base name
   */
  this.metricBaseName = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_netServer.metricBaseName();
    } else utils.invalidArgs();
  };

  /**
   Return the connect stream for this server. The server can only have at most one handler at any one time.
   As the server accepts TCP or SSL connections it creates an instance of {@link NetSocket} and passes it to the
   connect stream .

   @public

   @return {NetSocketStream} the connect stream
   */
  this.connectStream = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return new NetSocketStream(j_netServer.connectStream());
    } else utils.invalidArgs();
  };

  /**
   Supply a connect handler for this server. The server can only have at most one connect handler at any one time.
   As the server accepts TCP or SSL connections it creates an instance of {@link NetSocket} and passes it to the
   connect handler.

   @public
   @param handler {function} 
   @return {NetServer} a reference to this, so the API can be used fluently
   */
  this.connectHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return new NetServer(j_netServer.connectHandler(function(jVal) {
      handler(new NetSocket(jVal));
    }));
    } else utils.invalidArgs();
  };

  /**
   Like {@link NetServer#listen} but providing a handler that will be notified when the server is listening, or fails.

   @public
   @param port {number} the port to listen on 
   @param host {string} the host to listen on 
   @param listenHandler {function} handler that will be notified when listening or failed 
   @return {NetServer} a reference to this, so the API can be used fluently
   */
  this.listen = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_netServer.listen();
      return that;
    }  else if (__args.length === 1 && typeof __args[0] === 'function') {
      j_netServer.listen(function(ar) {
      if (ar.succeeded()) {
        __args[0](new NetServer(ar.result()), null);
      } else {
        __args[0](null, ar.cause());
      }
    });
      return that;
    }  else if (__args.length === 1 && typeof __args[0] ==='number') {
      j_netServer.listen(__args[0]);
      return that;
    }  else if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'string') {
      j_netServer.listen(__args[0], __args[1]);
      return that;
    }  else if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'function') {
      j_netServer.listen(__args[0], function(ar) {
      if (ar.succeeded()) {
        __args[1](new NetServer(ar.result()), null);
      } else {
        __args[1](null, ar.cause());
      }
    });
      return that;
    }  else if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_netServer.listen(__args[0], __args[1], function(ar) {
      if (ar.succeeded()) {
        __args[2](new NetServer(ar.result()), null);
      } else {
        __args[2](null, ar.cause());
      }
    });
      return that;
    } else utils.invalidArgs();
  };

  /**
   Like {@link NetServer#close} but supplying a handler that will be notified when close is complete.

   @public
   @param completionHandler {function} the handler 
   */
  this.close = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_netServer.close();
    }  else if (__args.length === 1 && typeof __args[0] === 'function') {
      j_netServer.close(function(ar) {
      if (ar.succeeded()) {
        __args[0](null, null);
      } else {
        __args[0](null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**
   The actual port the server is listening on. This is useful if you bound the server specifying 0 as port number
   signifying an ephemeral port

   @public

   @return {number} the actual port the server is listening on.
   */
  this.actualPort = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_netServer.actualPort();
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_netServer;
};

// We export the Constructor function
module.exports = NetServer;