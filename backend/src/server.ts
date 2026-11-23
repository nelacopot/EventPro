import express from "express";
import cors from "cors";
import "dotenv/config";
import path from "node:path";

import { prisma } from "./lib/prisma.js";

import authRoutes from "./routes/auth.routes.js";
import conferenceRoutes from "./routes/conference.routes.js";
import talkRoutes from "./routes/talk.routes.js";
import scheduleRoutes from "./routes/schedule.routes.js";
import reservationRoutes from "./routes/reservation.routes.js";
import profileRoutes from "./routes/profile.routes.js";
import statisticsRoutes from "./routes/statistics.routes.js";
import fs from "node:fs";
import { uploadsDirectory } from "./lib/uploads.js";

const app = express();
fs.mkdirSync(path.join(uploadsDirectory, "avatars"), { recursive: true });
app.use("/uploads", express.static(uploadsDirectory));
const PORT = Number(process.env.PORT) || 3001;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/conferences", conferenceRoutes);
app.use("/api/talks", talkRoutes);
app.use("/api/schedule", scheduleRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/statistics", statisticsRoutes);

app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "ok", message: "EventPro API is running" });
});

app.get("/api/health/db", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({ status: "ok", message: "EventPro database connection is working" });
  } catch (error) {
    console.error("Database connection failed:", error);
    res.status(503).json({ status: "error", message: "Cannot connect to database" });
  }
});

const frontendDirectory = path.resolve(process.cwd(), "public");
app.use(express.static(frontendDirectory));
app.get(/.*/, (req, res, next) => {
  if (req.path.startsWith("/api/")) {
    next();
    return;
  }
  res.sendFile(path.join(frontendDirectory, "index.html"));
});

app.listen(PORT, () => {
  console.log(`EventPro API running at http://localhost:${PORT}`);
});
