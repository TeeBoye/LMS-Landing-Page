/** @type {import('next').NextConfig} */
import http from "http";

const nextConfig = {
  reactStrictMode: true,
  output: "standalone", // Let Render handle the port
};

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

export default nextConfig;
