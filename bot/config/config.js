require("dotenv").config();
const settings = {
  API_ID:
    process.env.API_ID && /^\d+$/.test(process.env.API_ID)
      ? parseInt(process.env.API_ID)
      : process.env.API_ID && !/^\d+$/.test(process.env.API_ID)
      ? "N/A"
      : undefined,
  API_HASH: process.env.API_HASH || "",

  AUTO_CLAIM_CHECKIN: process.env.AUTO_CLAIM_CHECKIN
    ? process.env.AUTO_CLAIM_CHECKIN.toLowerCase() === "true"
    : true,

  AUTO_COMPLETE_MISSIONS: process.env.AUTO_COMPLETE_MISSIONS
    ? process.env.AUTO_COMPLETE_MISSIONS.toLowerCase() === "true"
    : true,

  USE_PROXY_FROM_FILE: process.env.USE_PROXY_FROM_FILE
    ? process.env.USE_PROXY_FROM_FILE.toLowerCase() === "true"
    : false,
};

module.exports = settings;
