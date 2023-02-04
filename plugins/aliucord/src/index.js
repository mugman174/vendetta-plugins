import { logger } from "@vendetta";

export default {
  onLoad: () => {
    fetch("https://github.com/Aliucord/AliucordRN/raw/builds/Aliucord.js")
      .then((response) =>
        response.text().then((text) => {
          eval(text);
        })
      )
      .catch((error) => {
        logger.error("Failed to fetch Aliucord.js", error);
      });
  },
  onUnload: () => {
    logger.log("Goodbye, world.");
  },
};
