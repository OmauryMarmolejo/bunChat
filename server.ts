// import { Bun, Response } from "bun";

const server = Bun.serve({
  port: 8080,
  fetch(req, server) {
    console.log(req);
    if (server.upgrade(req)) {
      return;
    }
    return new Response("Upgrade failed", { status: 500 });
  },
  websocket: {
    message(ws, message) {
      console.log("websocket", message);
      ws.send(message);
    },
  },
});

console.log(`Listening on ${server.hostname}:${server.port}`);
