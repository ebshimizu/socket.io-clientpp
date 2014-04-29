# Socket.IO Client++
A [websocket++](https://github.com/zaphoyd/websocketpp) and [rapidjson](http://code.google.com/p/rapidjson/) based C++ client for [Socket.IO](https://github.com/LearnBoost/socket.io).
This library is able to connect to a Socket.IO server, and then send and receive messages.

## Usage
1. Make sure you have the boost libararies installed.
2. Include websocket++, rapidjson and `socket_io_client.cpp` in your project.
3. Include `socket_io_client.hpp` where you want to use it.

### Example Code
The minimal amount of code needed to make a connection to a Socket.IO server is as follows:

	socketio_client_handler_ptr handler(new socketio_client_handler());
	client endpoint(handler);
	client::connection_ptr con = endpoint.get_connection(handler->perform_handshake("ws://localhost:8080"));
 
 For examples of event binding and additional settings, see the sample code in the msvc folder.

### Namespaces and Endpoints
To connect to a namespace, after doing the handshake and when the handler is ready, call `connect_endpoint("\endpointName")`. See the example for more details.
 
## Notes
This client isn't a full port of the Socket.IO client at this point. It doesn't handle reconnection events, fire off default events, maintain any status indicators, or do things as elegantly as the javascript client. If you'd like to help make this a full implementation of the Socket.IO client, fork away!

Socket.io-client++-specific source is released under the BSD license.