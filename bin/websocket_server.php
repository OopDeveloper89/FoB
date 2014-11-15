<?php
use Ratchet\Server\IoServer;
use FoB\Websocket\Websocket;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;

require '../vendor/autoload.php';

$port = 1414;
$address = 'fob.dev';

$server = IoServer::factory ( new HttpServer ( new WsServer ( new Websocket () ) ), $port, $address );

$server->run ();