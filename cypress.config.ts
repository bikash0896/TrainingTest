import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "8svzz9",
  e2e: {
    env: {
      RECORD_KEY: "4a33a589-67ae-4e75-8e06-a19c2ab21037",
    },
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      let value:any;

      on("task", {
        log(message) {
          console.log(message);

          return null;
        },

        save(v) {
          value = v;

          return null;
        },

        load() {
          return value || null;
        },
      });
      // implement node event listeners here
    },
  },
});
