const puppeteer = require("puppeteer");
const id = "temporarymail0000000@gmail.com";
const pw = "Tempmail@001";


async function login(){
  let browser  = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ["--start-maximized"],
      slowMo : 100
    });
  let pages=await browser.pages();
  let tab=pages[0];
  await tab.goto("https://www.youtube.com");
  await tab.waitForSelector(".style-scope.ytd-masthead.style-suggestive.size-small",{visible:true});
  await tab.click('.style-scope.ytd-masthead.style-suggestive.size-small');
  await tab.waitForTimeout(2000);
  await tab.type('#identifierId', id);

  await tab.click('#identifierNext > div > button > span');
  await tab.waitForSelector("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input",{visible:true});
  await tab.type('#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input',pw);
  await tab.click('#passwordNext > div > button > span');
  
  await tab.waitForSelector("input#search",{visible:true});
  await tab.type("input#search","Pepcoding");
  await tab.click("button#search-icon-legacy");
  
  await tab.waitForSelector("#main-link",{visible:true});
  await tab.click("#main-link");
  
  await tab.waitForTimeout(3000);
  await tab.click("#tabsContent > tp-yt-paper-tab:nth-child(6)");
  await tab.waitForSelector('a[title="Recursion & Backtracking - Level 1"]');
  await tab.click('a[title="Recursion & Backtracking - Level 1"]');
  
  await tab.waitForSelector('ytd-playlist-panel-video-renderer#playlist-items' , {visible:true});
  let allVideo = await tab.$$('ytd-playlist-panel-video-renderer#playlist-items');
  let allAtag = await tab.$$('a.yt-simple-endpoint.style-scope.ytd-toggle-button-renderer');
  for(let i=0;i<allVideo.length-1;i++)
  {
      await tab.waitForSelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > a.ytp-next-button.ytp-button",{visible:true});
      tab.click("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > a.ytp-next-button.ytp-button");
      await tab.waitForTimeout(2000);
      let Like=allAtag[6];
      await Like.click();
      await tab.waitForTimeout(2000);
       if(i==allVideo.length-1)
       {
          await tab.close();
       } 
  }
}
login()