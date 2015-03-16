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

/** @module vertx-js/http_client */
var utils = require('vertx-js/util/utils');
var HttpClientRequest = require('vertx-js/http_client_request');
var HttpClientResponse = require('vertx-js/http_client_response');
var Measured = require('vertx-js/measured');
var WebSocketStream = require('vertx-js/web_socket_stream');
var MultiMap = require('vertx-js/multi_map');
var WebSocket = require('vertx-js/web_socket');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JHttpClient = io.vertx.core.http.HttpClient;

/**
 An asynchronous HTTP client.
 <p>
 It allows you to make requests to HTTP servers, and a single client can make requests to any server.
 <p>
 It also allows you to open WebSockets to servers.
 <p>
 The client can also pool HTTP connections.
 <p>
 @class
*/
var HttpClient = function(j_val) {

  var j_httpClient = j_val;
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
      return j_httpClient.metricBaseName();
    } else utils.invalidArgs();
  };

  /**
   Create an HTTP request to send to the server at the specified host and port, specifying a response handler to receive
   the response

   @public
   @param method {Object} the HTTP method 
   @param port {number} the port 
   @param host {string} the host 
   @param requestURI {string} the relative URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.request = function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return new HttpClientRequest(j_httpClient.request(io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1]));
    }  else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string') {
      return new HttpClientRequest(j_httpClient.request(io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1], __args[2]));
    }  else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return new HttpClientRequest(j_httpClient.request(io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1], function(jVal) {
      __args[2](new HttpClientResponse(jVal));
    }));
    }  else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'string' && typeof __args[3] === 'string') {
      return new HttpClientRequest(j_httpClient.request(io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1], __args[2], __args[3]));
    }  else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return new HttpClientRequest(j_httpClient.request(io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1], __args[2], function(jVal) {
      __args[3](new HttpClientResponse(jVal));
    }));
    }  else if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'string' && typeof __args[3] === 'string' && typeof __args[4] === 'function') {
      return new HttpClientRequest(j_httpClient.request(io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1], __args[2], __args[3], function(jVal) {
      __args[4](new HttpClientResponse(jVal));
    }));
    } else utils.invalidArgs();
  };

  /**
   Create an HTTP request to send to the server using an absolute URI, specifying a response handler to receive
   the response

   @public
   @param method {Object} the HTTP method 
   @param absoluteURI {string} the absolute URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.requestAbs = function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return new HttpClientRequest(j_httpClient.requestAbs(io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1]));
    }  else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return new HttpClientRequest(j_httpClient.requestAbs(io.vertx.core.http.HttpMethod.valueOf(__args[0]), __args[1], function(jVal) {
      __args[2](new HttpClientResponse(jVal));
    }));
    } else utils.invalidArgs();
  };

  /**
   Create an HTTP GET request to send to the server at the specified host and port, specifying a response handler to receive
   the response

   @public
   @param port {number} the port 
   @param host {string} the host 
   @param requestURI {string} the relative URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.get = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return new HttpClientRequest(j_httpClient.get(__args[0]));
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return new HttpClientRequest(j_httpClient.get(__args[0], __args[1]));
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return new HttpClientRequest(j_httpClient.get(__args[0], function(jVal) {
      __args[1](new HttpClientResponse(jVal));
    }));
    }  else if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string') {
      return new HttpClientRequest(j_httpClient.get(__args[0], __args[1], __args[2]));
    }  else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return new HttpClientRequest(j_httpClient.get(__args[0], __args[1], function(jVal) {
      __args[2](new HttpClientResponse(jVal));
    }));
    }  else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return new HttpClientRequest(j_httpClient.get(__args[0], __args[1], __args[2], function(jVal) {
      __args[3](new HttpClientResponse(jVal));
    }));
    } else utils.invalidArgs();
  };

  /**
   Create an HTTP GET request to send to the server using an absolute URI, specifying a response handler to receive
   the response

   @public
   @param absoluteURI {string} the absolute URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.getAbs = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return new HttpClientRequest(j_httpClient.getAbs(__args[0]));
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return new HttpClientRequest(j_httpClient.getAbs(__args[0], function(jVal) {
      __args[1](new HttpClientResponse(jVal));
    }));
    } else utils.invalidArgs();
  };

  /**
   Sends an HTTP GET request to the server at the specified host and port, specifying a response handler to receive
   the response

   @public
   @param port {number} the port 
   @param host {string} the host 
   @param requestURI {string} the relative URI 
   @param responseHandler {function} the response handler 
   @return {HttpClient} a reference to this, so the API can be used fluently
   */
  this.getNow = function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return new HttpClient(j_httpClient.getNow(__args[0], function(jVal) {
      __args[1](new HttpClientResponse(jVal));
    }));
    }  else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return new HttpClient(j_httpClient.getNow(__args[0], __args[1], function(jVal) {
      __args[2](new HttpClientResponse(jVal));
    }));
    }  else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return new HttpClient(j_httpClient.getNow(__args[0], __args[1], __args[2], function(jVal) {
      __args[3](new HttpClientResponse(jVal));
    }));
    } else utils.invalidArgs();
  };

  /**
   Create an HTTP POST request to send to the server at the specified host and port, specifying a response handler to receive
   the response

   @public
   @param port {number} the port 
   @param host {string} the host 
   @param requestURI {string} the relative URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.post = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return new HttpClientRequest(j_httpClient.post(__args[0]));
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return new HttpClientRequest(j_httpClient.post(__args[0], __args[1]));
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return new HttpClientRequest(j_httpClient.post(__args[0], function(jVal) {
      __args[1](new HttpClientResponse(jVal));
    }));
    }  else if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string') {
      return new HttpClientRequest(j_httpClient.post(__args[0], __args[1], __args[2]));
    }  else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return new HttpClientRequest(j_httpClient.post(__args[0], __args[1], function(jVal) {
      __args[2](new HttpClientResponse(jVal));
    }));
    }  else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return new HttpClientRequest(j_httpClient.post(__args[0], __args[1], __args[2], function(jVal) {
      __args[3](new HttpClientResponse(jVal));
    }));
    } else utils.invalidArgs();
  };

  /**
   Create an HTTP POST request to send to the server using an absolute URI, specifying a response handler to receive
   the response

   @public
   @param absoluteURI {string} the absolute URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.postAbs = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return new HttpClientRequest(j_httpClient.postAbs(__args[0]));
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return new HttpClientRequest(j_httpClient.postAbs(__args[0], function(jVal) {
      __args[1](new HttpClientResponse(jVal));
    }));
    } else utils.invalidArgs();
  };

  /**
   Create an HTTP HEAD request to send to the server at the specified host and port, specifying a response handler to receive
   the response

   @public
   @param port {number} the port 
   @param host {string} the host 
   @param requestURI {string} the relative URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.head = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return new HttpClientRequest(j_httpClient.head(__args[0]));
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return new HttpClientRequest(j_httpClient.head(__args[0], __args[1]));
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return new HttpClientRequest(j_httpClient.head(__args[0], function(jVal) {
      __args[1](new HttpClientResponse(jVal));
    }));
    }  else if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string') {
      return new HttpClientRequest(j_httpClient.head(__args[0], __args[1], __args[2]));
    }  else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return new HttpClientRequest(j_httpClient.head(__args[0], __args[1], function(jVal) {
      __args[2](new HttpClientResponse(jVal));
    }));
    }  else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return new HttpClientRequest(j_httpClient.head(__args[0], __args[1], __args[2], function(jVal) {
      __args[3](new HttpClientResponse(jVal));
    }));
    } else utils.invalidArgs();
  };

  /**
   Create an HTTP HEAD request to send to the server using an absolute URI, specifying a response handler to receive
   the response

   @public
   @param absoluteURI {string} the absolute URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.headAbs = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return new HttpClientRequest(j_httpClient.headAbs(__args[0]));
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return new HttpClientRequest(j_httpClient.headAbs(__args[0], function(jVal) {
      __args[1](new HttpClientResponse(jVal));
    }));
    } else utils.invalidArgs();
  };

  /**
   Sends an HTTP HEAD request to the server at the specified host and port, specifying a response handler to receive
   the response

   @public
   @param port {number} the port 
   @param host {string} the host 
   @param requestURI {string} the relative URI 
   @param responseHandler {function} the response handler 
   @return {HttpClient} a reference to this, so the API can be used fluently
   */
  this.headNow = function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return new HttpClient(j_httpClient.headNow(__args[0], function(jVal) {
      __args[1](new HttpClientResponse(jVal));
    }));
    }  else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return new HttpClient(j_httpClient.headNow(__args[0], __args[1], function(jVal) {
      __args[2](new HttpClientResponse(jVal));
    }));
    }  else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return new HttpClient(j_httpClient.headNow(__args[0], __args[1], __args[2], function(jVal) {
      __args[3](new HttpClientResponse(jVal));
    }));
    } else utils.invalidArgs();
  };

  /**
   Create an HTTP OPTIONS request to send to the server at the specified host and port, specifying a response handler to receive
   the response

   @public
   @param port {number} the port 
   @param host {string} the host 
   @param requestURI {string} the relative URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.options = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return new HttpClientRequest(j_httpClient.options(__args[0]));
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return new HttpClientRequest(j_httpClient.options(__args[0], __args[1]));
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return new HttpClientRequest(j_httpClient.options(__args[0], function(jVal) {
      __args[1](new HttpClientResponse(jVal));
    }));
    }  else if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string') {
      return new HttpClientRequest(j_httpClient.options(__args[0], __args[1], __args[2]));
    }  else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return new HttpClientRequest(j_httpClient.options(__args[0], __args[1], function(jVal) {
      __args[2](new HttpClientResponse(jVal));
    }));
    }  else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return new HttpClientRequest(j_httpClient.options(__args[0], __args[1], __args[2], function(jVal) {
      __args[3](new HttpClientResponse(jVal));
    }));
    } else utils.invalidArgs();
  };

  /**
   Create an HTTP OPTIONS request to send to the server using an absolute URI, specifying a response handler to receive
   the response

   @public
   @param absoluteURI {string} the absolute URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.optionsAbs = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return new HttpClientRequest(j_httpClient.optionsAbs(__args[0]));
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return new HttpClientRequest(j_httpClient.optionsAbs(__args[0], function(jVal) {
      __args[1](new HttpClientResponse(jVal));
    }));
    } else utils.invalidArgs();
  };

  /**
   Sends an HTTP OPTIONS request to the server at the specified host and port, specifying a response handler to receive
   the response

   @public
   @param port {number} the port 
   @param host {string} the host 
   @param requestURI {string} the relative URI 
   @param responseHandler {function} the response handler 
   @return {HttpClient} a reference to this, so the API can be used fluently
   */
  this.optionsNow = function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return new HttpClient(j_httpClient.optionsNow(__args[0], function(jVal) {
      __args[1](new HttpClientResponse(jVal));
    }));
    }  else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return new HttpClient(j_httpClient.optionsNow(__args[0], __args[1], function(jVal) {
      __args[2](new HttpClientResponse(jVal));
    }));
    }  else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return new HttpClient(j_httpClient.optionsNow(__args[0], __args[1], __args[2], function(jVal) {
      __args[3](new HttpClientResponse(jVal));
    }));
    } else utils.invalidArgs();
  };

  /**
   Create an HTTP PUT request to send to the server at the specified host and port, specifying a response handler to receive
   the response

   @public
   @param port {number} the port 
   @param host {string} the host 
   @param requestURI {string} the relative URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.put = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return new HttpClientRequest(j_httpClient.put(__args[0]));
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return new HttpClientRequest(j_httpClient.put(__args[0], __args[1]));
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return new HttpClientRequest(j_httpClient.put(__args[0], function(jVal) {
      __args[1](new HttpClientResponse(jVal));
    }));
    }  else if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string') {
      return new HttpClientRequest(j_httpClient.put(__args[0], __args[1], __args[2]));
    }  else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return new HttpClientRequest(j_httpClient.put(__args[0], __args[1], function(jVal) {
      __args[2](new HttpClientResponse(jVal));
    }));
    }  else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return new HttpClientRequest(j_httpClient.put(__args[0], __args[1], __args[2], function(jVal) {
      __args[3](new HttpClientResponse(jVal));
    }));
    } else utils.invalidArgs();
  };

  /**
   Create an HTTP PUT request to send to the server using an absolute URI, specifying a response handler to receive
   the response

   @public
   @param absoluteURI {string} the absolute URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.putAbs = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return new HttpClientRequest(j_httpClient.putAbs(__args[0]));
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return new HttpClientRequest(j_httpClient.putAbs(__args[0], function(jVal) {
      __args[1](new HttpClientResponse(jVal));
    }));
    } else utils.invalidArgs();
  };

  /**
   Create an HTTP DELETE request to send to the server at the specified host and port, specifying a response handler to receive
   the response

   @public
   @param port {number} the port 
   @param host {string} the host 
   @param requestURI {string} the relative URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.delete = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return new HttpClientRequest(j_httpClient.delete(__args[0]));
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return new HttpClientRequest(j_httpClient.delete(__args[0], __args[1]));
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return new HttpClientRequest(j_httpClient.delete(__args[0], function(jVal) {
      __args[1](new HttpClientResponse(jVal));
    }));
    }  else if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string') {
      return new HttpClientRequest(j_httpClient.delete(__args[0], __args[1], __args[2]));
    }  else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return new HttpClientRequest(j_httpClient.delete(__args[0], __args[1], function(jVal) {
      __args[2](new HttpClientResponse(jVal));
    }));
    }  else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return new HttpClientRequest(j_httpClient.delete(__args[0], __args[1], __args[2], function(jVal) {
      __args[3](new HttpClientResponse(jVal));
    }));
    } else utils.invalidArgs();
  };

  /**
   Create an HTTP DELETE request to send to the server using an absolute URI, specifying a response handler to receive
   the response

   @public
   @param absoluteURI {string} the absolute URI 
   @param responseHandler {function} the response handler 
   @return {HttpClientRequest} an HTTP client request object
   */
  this.deleteAbs = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return new HttpClientRequest(j_httpClient.deleteAbs(__args[0]));
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return new HttpClientRequest(j_httpClient.deleteAbs(__args[0], function(jVal) {
      __args[1](new HttpClientResponse(jVal));
    }));
    } else utils.invalidArgs();
  };

  /**
   Connect a WebSocket to the specified port, host and relative request URI, with the specified headers, using
   the specified version of WebSockets, and the specified websocket sub protocols

   @public
   @param port {number} the port 
   @param host {string} the host 
   @param requestURI {string} the relative URI 
   @param headers {MultiMap} the headers 
   @param version {Object} the websocket version 
   @param subProtocols {string} the subprotocols to use 
   @param wsConnect {function} handler that will be called with the websocket when connected 
   @return {HttpClient} a reference to this, so the API can be used fluently
   */
  this.websocket = function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return new HttpClient(j_httpClient.websocket(__args[0], function(jVal) {
      __args[1](new WebSocket(jVal));
    }));
    }  else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      return new HttpClient(j_httpClient.websocket(__args[0], __args[1], function(jVal) {
      __args[2](new WebSocket(jVal));
    }));
    }  else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'function') {
      return new HttpClient(j_httpClient.websocket(__args[0], __args[1]._jdel, function(jVal) {
      __args[2](new WebSocket(jVal));
    }));
    }  else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return new HttpClient(j_httpClient.websocket(__args[0], __args[1], __args[2], function(jVal) {
      __args[3](new WebSocket(jVal));
    }));
    }  else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'function') {
      return new HttpClient(j_httpClient.websocket(__args[0], __args[1], __args[2]._jdel, function(jVal) {
      __args[3](new WebSocket(jVal));
    }));
    }  else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      return new HttpClient(j_httpClient.websocket(__args[0], __args[1]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[2]), function(jVal) {
      __args[3](new WebSocket(jVal));
    }));
    }  else if (__args.length === 5 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'object' && __args[3]._jdel && typeof __args[4] === 'function') {
      return new HttpClient(j_httpClient.websocket(__args[0], __args[1], __args[2], __args[3]._jdel, function(jVal) {
      __args[4](new WebSocket(jVal));
    }));
    }  else if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'string' && typeof __args[4] === 'function') {
      return new HttpClient(j_httpClient.websocket(__args[0], __args[1], __args[2]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[3]), function(jVal) {
      __args[4](new WebSocket(jVal));
    }));
    }  else if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'string' && typeof __args[3] === 'string' && typeof __args[4] === 'function') {
      return new HttpClient(j_httpClient.websocket(__args[0], __args[1]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[2]), __args[3], function(jVal) {
      __args[4](new WebSocket(jVal));
    }));
    }  else if (__args.length === 6 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'object' && __args[3]._jdel && typeof __args[4] === 'string' && typeof __args[5] === 'function') {
      return new HttpClient(j_httpClient.websocket(__args[0], __args[1], __args[2], __args[3]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[4]), function(jVal) {
      __args[5](new WebSocket(jVal));
    }));
    }  else if (__args.length === 6 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'string' && typeof __args[4] === 'string' && typeof __args[5] === 'function') {
      return new HttpClient(j_httpClient.websocket(__args[0], __args[1], __args[2]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[3]), __args[4], function(jVal) {
      __args[5](new WebSocket(jVal));
    }));
    }  else if (__args.length === 7 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'object' && __args[3]._jdel && typeof __args[4] === 'string' && typeof __args[5] === 'string' && typeof __args[6] === 'function') {
      return new HttpClient(j_httpClient.websocket(__args[0], __args[1], __args[2], __args[3]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[4]), __args[5], function(jVal) {
      __args[6](new WebSocket(jVal));
    }));
    } else utils.invalidArgs();
  };

  /**
   Create a WebSocket stream to the specified port, host and relative request URI, with the specified headers, using
   the specified version of WebSockets, and the specified websocket sub protocols

   @public
   @param port {number} the port 
   @param host {string} the host 
   @param requestURI {string} the relative URI 
   @param headers {MultiMap} the headers 
   @param version {Object} the websocket version 
   @param subProtocols {string} the subprotocols to use 
   @return {WebSocketStream} a reference to this, so the API can be used fluently
   */
  this.websocketStream = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return new WebSocketStream(j_httpClient.websocketStream(__args[0]));
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return new WebSocketStream(j_httpClient.websocketStream(__args[0], __args[1]));
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel) {
      return new WebSocketStream(j_httpClient.websocketStream(__args[0], __args[1]._jdel));
    }  else if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string') {
      return new WebSocketStream(j_httpClient.websocketStream(__args[0], __args[1], __args[2]));
    }  else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && __args[2]._jdel) {
      return new WebSocketStream(j_httpClient.websocketStream(__args[0], __args[1], __args[2]._jdel));
    }  else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'string') {
      return new WebSocketStream(j_httpClient.websocketStream(__args[0], __args[1]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[2])));
    }  else if (__args.length === 4 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'object' && __args[3]._jdel) {
      return new WebSocketStream(j_httpClient.websocketStream(__args[0], __args[1], __args[2], __args[3]._jdel));
    }  else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'string') {
      return new WebSocketStream(j_httpClient.websocketStream(__args[0], __args[1], __args[2]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[3])));
    }  else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'string' && typeof __args[3] === 'string') {
      return new WebSocketStream(j_httpClient.websocketStream(__args[0], __args[1]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[2]), __args[3]));
    }  else if (__args.length === 5 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'object' && __args[3]._jdel && typeof __args[4] === 'string') {
      return new WebSocketStream(j_httpClient.websocketStream(__args[0], __args[1], __args[2], __args[3]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[4])));
    }  else if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'string' && typeof __args[4] === 'string') {
      return new WebSocketStream(j_httpClient.websocketStream(__args[0], __args[1], __args[2]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[3]), __args[4]));
    }  else if (__args.length === 6 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'object' && __args[3]._jdel && typeof __args[4] === 'string' && typeof __args[5] === 'string') {
      return new WebSocketStream(j_httpClient.websocketStream(__args[0], __args[1], __args[2], __args[3]._jdel, io.vertx.core.http.WebsocketVersion.valueOf(__args[4]), __args[5]));
    } else utils.invalidArgs();
  };

  /**
   Close the client. Closing will close down any pooled connections.
   Clients should always be closed after use.

   @public

   */
  this.close = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_httpClient.close();
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_httpClient;
};

// We export the Constructor function
module.exports = HttpClient;