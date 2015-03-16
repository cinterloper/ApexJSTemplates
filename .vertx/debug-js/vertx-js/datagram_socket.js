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

/** @module vertx-js/datagram_socket */
var utils = require('vertx-js/util/utils');
var PacketWritestream = require('vertx-js/packet_writestream');
var Buffer = require('vertx-js/buffer');
var Measured = require('vertx-js/measured');
var DatagramPacket = require('vertx-js/datagram_packet');
var ReadStream = require('vertx-js/read_stream');
var SocketAddress = require('vertx-js/socket_address');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JDatagramSocket = io.vertx.core.datagram.DatagramSocket;

/**

 @class
*/
var DatagramSocket = function(j_val) {

  var j_datagramSocket = j_val;
  var that = this;
  ReadStream.call(this, j_val);
  Measured.call(this, j_val);

  /**
   The metric base name

   @public

   @return {string} the metric base name
   */
  this.metricBaseName = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_datagramSocket.metricBaseName();
    } else utils.invalidArgs();
  };

  /**
   Write the given  to the {@link SocketAddress} using the given encoding.
   The  will be notified once the write completes.

   @public
   @param str {string} the {@link String} to write 
   @param enc {string} the charset used for encoding 
   @param port {number} the host port of the remote peer 
   @param host {string} the host address of the remote peer 
   @param handler {function} the {@link io.vertx.core.Handler} to notify once the write completes. 
   @return {DatagramSocket} a reference to this, so the API can be used fluently
   */
  this.send = function() {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] ==='number' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      j_datagramSocket.send(__args[0]._jdel, __args[1], __args[2], function(ar) {
      if (ar.succeeded()) {
        __args[3](new DatagramSocket(ar.result()), null);
      } else {
        __args[3](null, ar.cause());
      }
    });
      return that;
    }  else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      j_datagramSocket.send(__args[0], __args[1], __args[2], function(ar) {
      if (ar.succeeded()) {
        __args[3](new DatagramSocket(ar.result()), null);
      } else {
        __args[3](null, ar.cause());
      }
    });
      return that;
    }  else if (__args.length === 5 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] ==='number' && typeof __args[3] === 'string' && typeof __args[4] === 'function') {
      j_datagramSocket.send(__args[0], __args[1], __args[2], __args[3], function(ar) {
      if (ar.succeeded()) {
        __args[4](new DatagramSocket(ar.result()), null);
      } else {
        __args[4](null, ar.cause());
      }
    });
      return that;
    } else utils.invalidArgs();
  };

  /**
   Returns a {@link PacketWritestream} able to send  to the
   {@link SocketAddress}.

   @public
   @param port {number} the port of the remote peer 
   @param host {string} the host address of the remote peer 
   @return {PacketWritestream} the write stream for sending packets
   */
  this.sender = function(port, host) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'string') {
      return new PacketWritestream(j_datagramSocket.sender(port, host));
    } else utils.invalidArgs();
  };

  /**
   Closes the {@link DatagramSocket} implementation asynchronous
   and notifies the handler once done.

   @public
   @param handler {function} the handler to notify once complete 
   */
  this.close = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_datagramSocket.close();
    }  else if (__args.length === 1 && typeof __args[0] === 'function') {
      j_datagramSocket.close(function(ar) {
      if (ar.succeeded()) {
        __args[0](null, null);
      } else {
        __args[0](null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**
   Return the {@link SocketAddress} to which
   this {@link DatagramSocket} is bound.

   @public

   @return {SocketAddress} the socket address
   */
  this.localAddress = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedlocalAddress == null) {
        that.cachedlocalAddress = new SocketAddress(j_datagramSocket.localAddress());
      }
      return that.cachedlocalAddress;
    } else utils.invalidArgs();
  };

  /**
   Joins a multicast group and listens for packets send to it on the given network interface.
   The  is notified once the operation completes.

   @public
   @param multicastAddress {string} the address of the multicast group to join 
   @param networkInterface {string} the network interface on which to listen for packets. 
   @param source {string} the address of the source for which we will listen for multicast packets 
   @param handler {function} then handler to notify once the operation completes 
   @return {DatagramSocket} a reference to this, so the API can be used fluently
   */
  this.listenMulticastGroup = function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_datagramSocket.listenMulticastGroup(__args[0], function(ar) {
      if (ar.succeeded()) {
        __args[1](new DatagramSocket(ar.result()), null);
      } else {
        __args[1](null, ar.cause());
      }
    });
      return that;
    }  else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      j_datagramSocket.listenMulticastGroup(__args[0], __args[1], __args[2], function(ar) {
      if (ar.succeeded()) {
        __args[3](new DatagramSocket(ar.result()), null);
      } else {
        __args[3](null, ar.cause());
      }
    });
      return that;
    } else utils.invalidArgs();
  };

  /**
   Leaves a multicast group and stops listening for packets send to it on the given network interface.
   The  is notified once the operation completes.

   @public
   @param multicastAddress {string} the address of the multicast group to join 
   @param networkInterface {string} the network interface on which to listen for packets. 
   @param source {string} the address of the source for which we will listen for multicast packets 
   @param handler {function} the handler to notify once the operation completes 
   @return {DatagramSocket} a reference to this, so the API can be used fluently
   */
  this.unlistenMulticastGroup = function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_datagramSocket.unlistenMulticastGroup(__args[0], function(ar) {
      if (ar.succeeded()) {
        __args[1](new DatagramSocket(ar.result()), null);
      } else {
        __args[1](null, ar.cause());
      }
    });
      return that;
    }  else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      j_datagramSocket.unlistenMulticastGroup(__args[0], __args[1], __args[2], function(ar) {
      if (ar.succeeded()) {
        __args[3](new DatagramSocket(ar.result()), null);
      } else {
        __args[3](null, ar.cause());
      }
    });
      return that;
    } else utils.invalidArgs();
  };

  /**
   Block the given address for the given multicast address on the given network interface and notifies
   the  once the operation completes.

   @public
   @param multicastAddress {string} the address for which you want to block the source address 
   @param networkInterface {string} the network interface on which the blocking should occur. 
   @param sourceToBlock {string} the source address which should be blocked. You will not receive an multicast packets for it anymore. 
   @param handler {function} the handler to notify once the operation completes 
   @return {DatagramSocket} a reference to this, so the API can be used fluently
   */
  this.blockMulticastGroup = function() {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_datagramSocket.blockMulticastGroup(__args[0], __args[1], function(ar) {
      if (ar.succeeded()) {
        __args[2](new DatagramSocket(ar.result()), null);
      } else {
        __args[2](null, ar.cause());
      }
    });
      return that;
    }  else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'function') {
      j_datagramSocket.blockMulticastGroup(__args[0], __args[1], __args[2], function(ar) {
      if (ar.succeeded()) {
        __args[3](new DatagramSocket(ar.result()), null);
      } else {
        __args[3](null, ar.cause());
      }
    });
      return that;
    } else utils.invalidArgs();
  };

  /**
   Start listening on the given port and host. The handler will be called when the socket is listening.

   @public
   @param port {number} the port to listen on 
   @param host {string} the host to listen on 
   @param handler {function} the handler will be called when listening 
   @return {DatagramSocket} a reference to this, so the API can be used fluently
   */
  this.listen = function(port, host, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] ==='number' && typeof __args[1] === 'string' && typeof __args[2] === 'function') {
      j_datagramSocket.listen(port, host, function(ar) {
      if (ar.succeeded()) {
        handler(new DatagramSocket(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public

   @return {DatagramSocket}
   */
  this.pause = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_datagramSocket.pause();
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public

   @return {DatagramSocket}
   */
  this.resume = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_datagramSocket.resume();
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param endHandler {function} 
   @return {DatagramSocket}
   */
  this.endHandler = function(endHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_datagramSocket.endHandler(endHandler);
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param handler {function} 
   @return {DatagramSocket}
   */
  this.handler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_datagramSocket.handler(function(jVal) {
      handler(new DatagramPacket(jVal));
    });
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param handler {function} 
   @return {DatagramSocket}
   */
  this.exceptionHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_datagramSocket.exceptionHandler(function(jVal) {
      handler(utils.convReturnTypeUnknown(jVal));
    });
      return that;
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_datagramSocket;
};

// We export the Constructor function
module.exports = DatagramSocket;