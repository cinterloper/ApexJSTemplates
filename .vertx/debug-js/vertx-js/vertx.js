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

/** @module vertx-js/vertx */
var utils = require('vertx-js/util/utils');
var DatagramSocket = require('vertx-js/datagram_socket');
var HttpServer = require('vertx-js/http_server');
var Context = require('vertx-js/context');
var Future = require('vertx-js/future');
var SharedData = require('vertx-js/shared_data');
var DnsClient = require('vertx-js/dns_client');
var TimeoutStream = require('vertx-js/timeout_stream');
var EventBus = require('vertx-js/event_bus');
var Measured = require('vertx-js/measured');
var NetServer = require('vertx-js/net_server');
var FileSystem = require('vertx-js/file_system');
var NetClient = require('vertx-js/net_client');
var HttpClient = require('vertx-js/http_client');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JVertx = io.vertx.core.Vertx;
var VertxOptions = io.vertx.core.VertxOptions;
var VertxOptions = io.vertx.core.VertxOptions;
var NetServerOptions = io.vertx.core.net.NetServerOptions;
var NetClientOptions = io.vertx.core.net.NetClientOptions;
var HttpServerOptions = io.vertx.core.http.HttpServerOptions;
var HttpClientOptions = io.vertx.core.http.HttpClientOptions;
var DatagramSocketOptions = io.vertx.core.datagram.DatagramSocketOptions;
var DeploymentOptions = io.vertx.core.DeploymentOptions;
var DeploymentOptions = io.vertx.core.DeploymentOptions;

/**
 The entry point into the Vert.x Core API.
 <p>
 You use an instance of this class for functionality including:
 <ul>
   <li>Creating TCP clients and servers</li>
   <li>Creating HTTP clients and servers</li>
   <li>Creating DNS clients</li>
   <li>Creating Datagram sockets</li>
   <li>Setting and cancelling periodic and one-shot timers</li>
   <li>Getting a reference to the event bus API</li>
   <li>Getting a reference to the file system API</li>
   <li>Getting a reference to the shared data API</li>
   <li>Deploying and undeploying verticles</li>
 </ul>
 <p>
 Most functionality in Vert.x core is fairly low level.
 <p>
 @class
*/
var Vertx = function(j_val) {

  var j_vertx = j_val;
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
      return j_vertx.metricBaseName();
    } else utils.invalidArgs();
  };

  /**
   Gets the current context, or creates one if there isn't one

   @public

   @return {Context} The current context (created if didn't exist)
   */
  this.getOrCreateContext = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return new Context(j_vertx.getOrCreateContext());
    } else utils.invalidArgs();
  };

  /**
   Create a TCP/SSL server using the specified options

   @public
   @param options {Object} the options to use 
   @return {NetServer} the server
   */
  this.createNetServer = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return new NetServer(j_vertx.createNetServer());
    }  else if (__args.length === 1 && typeof __args[0] === 'object') {
      return new NetServer(j_vertx.createNetServer(__args[0] != null ? new NetServerOptions(new JsonObject(JSON.stringify(__args[0]))) : null));
    } else utils.invalidArgs();
  };

  /**
   Create a TCP/SSL client using the specified options

   @public
   @param options {Object} the options to use 
   @return {NetClient} the client
   */
  this.createNetClient = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return new NetClient(j_vertx.createNetClient());
    }  else if (__args.length === 1 && typeof __args[0] === 'object') {
      return new NetClient(j_vertx.createNetClient(__args[0] != null ? new NetClientOptions(new JsonObject(JSON.stringify(__args[0]))) : null));
    } else utils.invalidArgs();
  };

  /**
   Create an HTTP/HTTPS server using the specified options

   @public
   @param options {Object} the options to use 
   @return {HttpServer} the server
   */
  this.createHttpServer = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return new HttpServer(j_vertx.createHttpServer());
    }  else if (__args.length === 1 && typeof __args[0] === 'object') {
      return new HttpServer(j_vertx.createHttpServer(__args[0] != null ? new HttpServerOptions(new JsonObject(JSON.stringify(__args[0]))) : null));
    } else utils.invalidArgs();
  };

  /**
   Create a HTTP/HTTPS client using the specified options

   @public
   @param options {Object} the options to use 
   @return {HttpClient} the client
   */
  this.createHttpClient = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return new HttpClient(j_vertx.createHttpClient());
    }  else if (__args.length === 1 && typeof __args[0] === 'object') {
      return new HttpClient(j_vertx.createHttpClient(__args[0] != null ? new HttpClientOptions(new JsonObject(JSON.stringify(__args[0]))) : null));
    } else utils.invalidArgs();
  };

  /**
   Create a datagram socket using the specified options

   @public
   @param options {Object} the options to use 
   @return {DatagramSocket} the socket
   */
  this.createDatagramSocket = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return new DatagramSocket(j_vertx.createDatagramSocket());
    }  else if (__args.length === 1 && typeof __args[0] === 'object') {
      return new DatagramSocket(j_vertx.createDatagramSocket(__args[0] != null ? new DatagramSocketOptions(new JsonObject(JSON.stringify(__args[0]))) : null));
    } else utils.invalidArgs();
  };

  /**
   Get the filesystem object. There is a single instance of FileSystem per Vertx instance.

   @public

   @return {FileSystem} the filesystem object
   */
  this.fileSystem = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedfileSystem == null) {
        that.cachedfileSystem = new FileSystem(j_vertx.fileSystem());
      }
      return that.cachedfileSystem;
    } else utils.invalidArgs();
  };

  /**
   Get the event bus object. There is a single instance of EventBus per Vertx instance.

   @public

   @return {EventBus} the event bus object
   */
  this.eventBus = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedeventBus == null) {
        that.cachedeventBus = new EventBus(j_vertx.eventBus());
      }
      return that.cachedeventBus;
    } else utils.invalidArgs();
  };

  /**
   Create a DNS client to connect to a DNS server at the specified host and port

   @public
   @param port {number} the port 
   @param host {string} the host 
   @return {DnsClient} the DNS client
   */
  this.createDnsClient = function(port, host) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'string') {
      return new DnsClient(j_vertx.createDnsClient(port, host));
    } else utils.invalidArgs();
  };

  /**
   Get the shared data object. There is a single instance of SharedData per Vertx instance.

   @public

   @return {SharedData} the shared data object
   */
  this.sharedData = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedsharedData == null) {
        that.cachedsharedData = new SharedData(j_vertx.sharedData());
      }
      return that.cachedsharedData;
    } else utils.invalidArgs();
  };

  /**
   Set a one-shot timer to fire after <code>delay</code> milliseconds, at which point <code>handler</code> will be called with
   the id of the timer.

   @public
   @param delay {number} the delay in milliseconds, after which the timer will fire 
   @param handler {function} the handler that will be called with the timer ID when the timer fires 
   @return {number} the unique ID of the timer
   */
  this.setTimer = function(delay, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'function') {
      return j_vertx.setTimer(delay, function(jVal) {
      handler(jVal);
    });
    } else utils.invalidArgs();
  };

  /**
   Returns a one-shot timer as a read stream. The timer will be fired after <code>delay</code> milliseconds after
   the  has been called.

   @public
   @param delay {number} the delay in milliseconds, after which the timer will fire 
   @return {TimeoutStream} the timer stream
   */
  this.timerStream = function(delay) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return new TimeoutStream(j_vertx.timerStream(delay));
    } else utils.invalidArgs();
  };

  /**
   Set a periodic timer to fire every <code>delay</code> milliseconds, at which point <code>handler</code> will be called with
   the id of the timer.

   @public
   @param delay {number} the delay in milliseconds, after which the timer will fire 
   @param handler {function} the handler that will be called with the timer ID when the timer fires 
   @return {number} the unique ID of the timer
   */
  this.setPeriodic = function(delay, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'function') {
      return j_vertx.setPeriodic(delay, function(jVal) {
      handler(jVal);
    });
    } else utils.invalidArgs();
  };

  /**
   Returns a periodic timer as a read stream. The timer will be fired every <code>delay</code> milliseconds after
   the  has been called.

   @public
   @param delay {number} the delay in milliseconds, after which the timer will fire 
   @return {TimeoutStream} the periodic stream
   */
  this.periodicStream = function(delay) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return new TimeoutStream(j_vertx.periodicStream(delay));
    } else utils.invalidArgs();
  };

  /**
   Cancels the timer with the specified <code>id</code>.

   @public
   @param id {number} The id of the timer to cancel 
   @return {boolean} true if the timer was successfully cancelled, or false if the timer does not exist.
   */
  this.cancelTimer = function(id) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_vertx.cancelTimer(id);
    } else utils.invalidArgs();
  };

  /**
   Puts the handler on the event queue for the current context so it will be run asynchronously ASAP after all
   preceeding events have been handled.

   @public
   @param action {function} - a handler representing the action to execute 
   */
  this.runOnContext = function(action) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_vertx.runOnContext(action);
    } else utils.invalidArgs();
  };

  /**
   Like {@link Vertx#close} but the completionHandler will be called when the close is complete

   @public
   @param completionHandler {function} The handler will be notified when the close is complete. 
   */
  this.close = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_vertx.close();
    }  else if (__args.length === 1 && typeof __args[0] === 'function') {
      j_vertx.close(function(ar) {
      if (ar.succeeded()) {
        __args[0](null, null);
      } else {
        __args[0](null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**
   Like {@link Vertx#deployVerticle} but <a href="../../cheatsheet/DeploymentOptions.html">DeploymentOptions</a> are provided to configure the
   deployment.

   @public
   @param name {string} the name 
   @param options {Object} the deployment options. 
   @param completionHandler {function} a handler which will be notified when the deployment is complete 
   */
  this.deployVerticle = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_vertx.deployVerticle(__args[0]);
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_vertx.deployVerticle(__args[0], function(ar) {
      if (ar.succeeded()) {
        __args[1](ar.result(), null);
      } else {
        __args[1](null, ar.cause());
      }
    });
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'object') {
      j_vertx.deployVerticle(__args[0], __args[1] != null ? new DeploymentOptions(new JsonObject(JSON.stringify(__args[1]))) : null);
    }  else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && typeof __args[2] === 'function') {
      j_vertx.deployVerticle(__args[0], __args[1] != null ? new DeploymentOptions(new JsonObject(JSON.stringify(__args[1]))) : null, function(ar) {
      if (ar.succeeded()) {
        __args[2](ar.result(), null);
      } else {
        __args[2](null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**
   Like [#undeploy(String)] {@link Vertx} but the completionHandler will be notified when the undeployment is complete.

   @public
   @param deploymentID {string} the deployment ID 
   @param completionHandler {function} a handler which will be notified when the undeployment is complete 
   */
  this.undeploy = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_vertx.undeploy(__args[0]);
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_vertx.undeploy(__args[0], function(ar) {
      if (ar.succeeded()) {
        __args[1](null, null);
      } else {
        __args[1](null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**
   Return a Set of deployment IDs for the currently deployed deploymentIDs.

   @public

   @return {Array.<string>} Set of deployment IDs
   */
  this.deploymentIDs = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnSet(j_vertx.deploymentIDs());
    } else utils.invalidArgs();
  };

  /**
   Safely execute some blocking code.
   <p>
   Executes the blocking code in the handler <code>blockingCodeHandler</code> using a thread from the worker pool.
   <p>
   When the code is complete the handler <code>resultHandler</code> will be called with the result on the original context
   (e.g. on the original event loop of the caller).
   <p>
   A <code>Future</code> instance is passed into <code>blockingCodeHandler</code>. When the blocking code successfully completes,
   the handler should call the {@link Future#complete} or {@link Future#complete} method, or the {@link Future#fail}
   method if it failed.

   @public
   @param blockingCodeHandler {function} handler representing the blocking code to run 
   @param resultHandler {function} handler that will be called when the blocking code is complete 
   */
  this.executeBlocking = function(blockingCodeHandler, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'function' && typeof __args[1] === 'function') {
      j_vertx.executeBlocking(function(jVal) {
      blockingCodeHandler(new Future(jVal));
    }, function(ar) {
      if (ar.succeeded()) {
        resultHandler(utils.convReturnTypeUnknown(ar.result()), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_vertx;
};

/**
 Creates a non clustered instance using the specified options

 @memberof module:vertx-js/vertx
 @param options {Object} the options to use 
 @return {Vertx} the instance
 */
Vertx.vertx = function() {
  var __args = arguments;
  if (__args.length === 0) {
    return new Vertx(JVertx.vertx());
  }else if (__args.length === 1 && typeof __args[0] === 'object') {
    return new Vertx(JVertx.vertx(__args[0] != null ? new VertxOptions(new JsonObject(JSON.stringify(__args[0]))) : null));
  } else utils.invalidArgs();
};

/**
 Creates a clustered instance using the specified options.
 <p>
 The instance is created asynchronously and the resultHandler is called with the result when it is ready.

 @memberof module:vertx-js/vertx
 @param options {Object} the options to use 
 @param resultHandler {function} the result handler that will receive the result 
 */
Vertx.clusteredVertx = function(options, resultHandler) {
  var __args = arguments;
  if (__args.length === 2 && typeof __args[0] === 'object' && typeof __args[1] === 'function') {
    JVertx.clusteredVertx(options != null ? new VertxOptions(new JsonObject(JSON.stringify(options))) : null, function(ar) {
    if (ar.succeeded()) {
      resultHandler(new Vertx(ar.result()), null);
    } else {
      resultHandler(null, ar.cause());
    }
  });
  } else utils.invalidArgs();
};

/**
 Gets the current context

 @memberof module:vertx-js/vertx

 @return {Context} The current context or null if no current context
 */
Vertx.currentContext = function() {
  var __args = arguments;
  if (__args.length === 0) {
    return new Context(JVertx.currentContext());
  } else utils.invalidArgs();
};

// We export the Constructor function
module.exports = Vertx;