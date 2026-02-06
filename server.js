// Simple Bun dev server for static files
const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    let pathname = url.pathname;

    // Default to index.html for root
    if (pathname === "/") {
      pathname = "/index.html";
    }

    // Remove leading slash for file system
    const filePath = `.${pathname}`;
    
    try {
      const file = Bun.file(filePath);
      if (file.size === 0) {
        return new Response("File not found", { status: 404 });
      }
      return new Response(file);
    } catch (error) {
      return new Response("File not found", { status: 404 });
    }
  },
});

console.log(`🚀 Server running at http://localhost:${server.port}`);
