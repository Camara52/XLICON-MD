const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "2250704036031"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '2250704036031' 
global.devs = '2250704036031';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUVscmhjWnlnTlFDNGk2YzZYV0RtaXAycDZMSThZRlNuTHNqaHNqckZYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVo2TUs2c0ZTS1FLUjM0enBJeWdxRkVDZUlqdlcxdjBSWFNkMzdtSUR5dz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJR1hnZG1EdXlteTQ5MElSS0VQeThaa0FsbjY2c1JUMmJsNHcrbWE3eDFzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0bDg0RzY0UGxsbHlyVDdUUXRNU3NNNzZ6Yzg1ZkQrbHBEeUlZeU9ZS3pFPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlEMU5acUZuMjc0aVUxOG52UmFEMkd2SE0xMEFkbjRnNlkvUDBUYVh6bmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZVcEZFTGJhbWZ4Rk5rZHMxRUc0VnE2VTZGeGVhbCtadEptdmFsaFpLRHM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWcVZnWWFuU202aVlkY3J1Q2FjY3lJTUNUd1hxdWpmTXU0WU1QZlNHNytFaEVwcFZ4ZXhQSFhSVHd3Nk8vMVNMajlHL240R01IQjMxSWFNeTlPMm1odz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjMxLCJhZHZTZWNyZXRLZXkiOiI3WGw3MEVVUEZIenBTOWRabVFTZVdMRlhmcUpleWNkSVZtY0xYWlFWZWtzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxX3dDRXp5alNKNmR1V3FGdVRYUjN3IiwicGhvbmVJZCI6ImU0ZGExZGMxLTMxNDEtNDAxNi05YTZjLTM0NWU5M2Y1ZThiZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPUktiUDZMUnhSZnp5TVpzOE40TmNBYWh4Q1U9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImcrL1ZaTFNyZE9XMHU2MGdpeVBNWTBEYW1XYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ08vYTlyb0hFSVB1eU1FR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImJMdGFMNWh1RnM4d0VmVzBRcXJuSWJ4UlIranBUMUJka1JTNnZGY3V6anc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjRWbTVxWXRjTVg1NzVwb1hkMDhpZFA5VWxXTmdTSHRERXFoVmo5RGUyby9JVUJaakhuZkNxZGFDdVJBcmgzV0EzNTA2WkNZR3E4UVU3SXNvMGtjTUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBalRkZ1JmLzRQZktCaGFwQ0U1bURIVldVSjdUdWhiSmVTUmtldnFaN0gvT1N5bzk1aHhsY0IyYzEzNVVmWEtKKzNHT1ozY01zbHZ6cW00b0dZTWtndz09In0sIm1lIjp7ImlkIjoiMjI1MDcwNDAzNjAzMToyMkBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjUwNzA0MDM2MDMxOjIyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQld5N1dpK1liaGJQTUJIMXRFS3E1eUc4VVVmbzZVOVFYWkVVdXJ4WExzNDgifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0ODEyMTM1NH0= ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'MHD',
  packname:  process.env.PACK_NAME || 'CRM',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
