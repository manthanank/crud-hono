import { serve } from "@hono/node-server";
import { Hono } from "hono";
import userRoutes from "./routes/user.routes.js";
import connectDB from "./config/db.js";

const app = new Hono();

app.get("/", (c) => {
  return c.text("API is running");
});

app.route("/users", userRoutes);

connectDB();

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
