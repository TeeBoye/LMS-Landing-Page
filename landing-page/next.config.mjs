/** @type {import('next').NextConfig} */
import { createServer } from "http";

const server = createServer((req, res) => {
  res.end("Hello World");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

const nextConfig = {};

export default nextConfig;
