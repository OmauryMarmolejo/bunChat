import { Bun, Response } from "bun";

const server = Bun.serve({
  fetch(req, server) {
    if (server.upgrade(req)) {
      return;
    }
    return new Response("Upgrade failed", { status: 500 });
  },
  websocket: {
    message(ws, message) {
      ws.send(message);
    },
  },
});

console.log(`Listening on ${server.hostname}:${server.port}`);
