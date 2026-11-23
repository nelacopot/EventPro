
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const prismaClientModule = require("@prisma/client") as typeof import("@prisma/client");

export const prisma = new prismaClientModule.PrismaClient();
