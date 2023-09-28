import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  APP_BASE_URL: z.string(),
  APP_EMAIL: z.string(),
  APP_PASSWORD: z.string(),
});

const _env = envSchema.safeParse(process.env);

const isInvalidEnvironmentVariables = _env.success === false;

if (isInvalidEnvironmentVariables) {
  console.error("Invalid environment variables", _env.error.format());

  throw new Error("❌ Invalid environment variables.");
}

export const env = _env.data;
