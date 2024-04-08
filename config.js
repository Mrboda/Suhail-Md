const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "S
 UHAIL_03_44_04_08_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZUFoWnZ3bnpPVkkxSVc0UHI4WVppYkxmam9ScFUySXdGbW0rVmowM09GYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInNScFdncStpdm02UzZaMXhVL3UwcXV1TGx3VGR2bmxhMUs4Q2ZjclQ5bEk9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiS044S3FQanZoaTJVT0lSQzJsZVFJandGMDVsY29OMENpL1YrYVMzbUZXcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlVlYlJvaXZoeUVpYkV6cDNaOVJOYTFiQ0pIRlRxbGhPMzliMk1SS0lsam89XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQ0NrSWxmc3h0WWxLSDN3WUNLdGJvQjdkUzhsVTgzcGJQZmxOT21lTWRXOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImdnajVjLzBiVVFnUFlla1hFeEIxMmtXSzdMNVRUUG9PUnRUUWxGZ0N5QzQ9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJNSWpvMTFMS2pPemxvK2JoQmVkTVI5SURVcjh0NldEcjFibWpSODNpb2xBPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYXUrT2FrZGpZY3I3UExEWkV0OUFKR2RYcmNIb0lxYUF1WGJCR3RIVFFXbz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCTDN4bnhyUmpzSVhjanRtMXlnb0JUc0s2djh6UVVha3JNcEVBQ0NNVG1uNHRNNml1ZGhXRXl6YlJjWEdZNWtpbTVQUGlVL1NRekxVY1RiTDViNGtpdz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTY3LFwiYWR2U2VjcmV0S2V5XCI6XCJmZC9LZDJGSXpaRFJLdkVTZUNMUHJPYldwQmFEZkZXenRnTVJ1OXd6WG1VPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzNDA3ODk3NDcxQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjc4N0EzODQwRjNENzQ4OEU4M0ZFN0EyQzg5MjVCMDIzXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTI1NDc4NDJ9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTIzNDA3ODk3NDcxQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjg1MDhGOTgyODFBNkExNkQwRkExMzQ1RkI3N0M1MTI2XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTI1NDc4NDR9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCI0cW1VeWhOWlExMnZnbGZjWlU2WVV3XCIsXCJwaG9uZUlkXCI6XCJkNTIyMjU5Ni1kMGJiLTRiNjYtYTcwNy1lNTc2MGQ2MjU0ODVcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImdPaGlZTlV0aTExemtTeVUzNXJlcHROd0toYz1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ6ZmliT3lYWHpLOThpeHdGbkhBODd6ZVN0d1E9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiR1o5TEdLWjdcIixcIm1lXCI6e1wiaWRcIjpcIjkyMzQwNzg5NzQ3MToxNEBzLndoYXRzYXBwLm5ldFwiLFwibmFtZVwiOlwi4bSNyoDclCAgIOGXt0/hl6rhl6kgICDiiIZcIixcImxpZFwiOlwiMjMxODE2OTUwNzQ3Mjc5OjE0QGxpZFwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDSy91bG1vUSs4L05zQVlZQXlBQUtBQT1cIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcImphU1F3MjQyWks0U3VKalZucW1yMzRlb1BlRFdZTC9PTTducDNMek1LR1k9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJHUWVIYUkzd1ViNTFhWGFGZVhMMVA5bldRREFMamtVVkt0Y2xVZ0N6MFhDUFp5NlNtazkvaFV3Z1VMQ3BXc0F0RFMwYTJYSHBNb0xvTC9ibmQ4bUJEdz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcImJ2MTRXVjkrVDFLWXFsa3doYlFuZitEeTIxekphRUZndHpRYWZ2NGdnTDVqOHliZFhZZGtLYTdVYndydUxZVkNNQkZ3SGN5WWhiZ2E3WnlQNEVmRWhRPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5MjM0MDc4OTc0NzE6MTRAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCWTJra01OdU5tU3VFcmlZMVo2cHE5K0hxRDNnMW1DL3pqTzU2ZHk4ekNobVwifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTI1NDc4MzksXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBQlFzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlFzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiN05wMldRZnRLM2xzWlhDWTBacDNRcVlwSDVxbTE4RDV2clA1dFhqVDRNcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjI2NzI2ODUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzExMzQ1NDU1NDE5XCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "BODA-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "BODA-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x BODA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
