import { join } from "path";
import config from "../vite.config";
export const path = join(__dirname, "hosted");
export const isProduction = false;
console.log(config);
export const port = config.server.port;
