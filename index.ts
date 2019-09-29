// Allows me to run a tiny server locally to test
import { createServer, IncomingMessage, ServerResponse } from 'http';
import * as nodeStatic from 'node-static';
import path from 'path';

const files = new nodeStatic.Server(path.join(__dirname));
const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    req.addListener('end', () => {
        files.serve(req, res);
    }).resume();
});

server.listen(3000, () => {
    console.log("Listening on port 3000");
});