import { env } from "@env/index";
import { Page } from "@playwright/test";

export async function doLogin(page: Page) {
  await page.goto(env.APP_BASE_URL);
  await page.getByTestId("email").fill(env.APP_EMAIL);
  await page.getByTestId("password").fill(env.APP_PASSWORD);
  await page.getByTestId("button").click();
}
