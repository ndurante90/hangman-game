const open = require("open");

(async () => {
  // Opens the image in the default image viewer and waits for the opened app to quit.
  //await open("unicorn.png", { wait: true });
  //console.log("The image viewer app quit");

  // Opens the URL in the default browser.
  await open("http://127.0.0.1:5500/index.html");

  // Opens the URL in a specified browser.
  //await open("https://sindresorhus.com", { app: "firefox" });

  // Specify app arguments.
  /* await open("https://sindresorhus.com", {
    app: ["google chrome", "--incognito"],
  });*/
})();
