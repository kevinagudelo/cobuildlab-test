import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    chromeWebSecurity: false
  },
  env: {
    EMAIL:"cobuildlabtest@gmail.com",
    PASSWORD:"Testeandotodocodebuild2022"
  }
});
