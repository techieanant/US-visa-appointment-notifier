const config = require('./config');
const fetch = require('node-fetch');

const debug = async (page, logName, saveScreenShot) => {
  if(saveScreenShot){
    await page.screenshot({path: `${logName}.png`});
  }

  await page.evaluate(() => {
    debugger;
  });
};

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const sendPush = async (formattedDate) => {
  try {
    let l = await fetch("https://api.pushbullet.com/v2/pushes", {
      body: JSON.stringify({
        "body": `Earliest date available ${formattedDate}`,
        "title": "US Visa",
        "type": "note"
      }),
      headers: {
      "Access-Token": config.PUSHBULLET_ACCESS_TOKEN,
      "Content-Type": "application/json"
      },
      method: "POST"
    });
    if(!l.ok) {
      throw new Error(l.body);
    }
  } catch(e) {
    logStep("Error", e)
  }
};

const logStep = (stepTitle) => {
  console.log("=====>>> Step:", stepTitle);
}

module.exports = {
  debug,
  delay,
  sendPush,
  logStep
}
