// const {Builder,By,Key,util}=require("selenium-webdriver");
// async function example(){
//     let driver=await new Builder().forBrowser("chrome").build();
//     await driver.get("http://google.com");
//     await driver.findElement(By.name("q")).sendKeys("Selenium",Key.RETURN);
// }
// example();

const { Builder, By, Key, until } = require('selenium-webdriver');

async function registerTest() {
  // Set up the WebDriver instance
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the login page
    await driver.get('https://vaccina.com/signup');

    // Find the username and password input fields and enter the credentials
    await driver.findElement(By.id('Name')).sendKeys('alina');
    await driver.findElement(By.id('Nid')).sendKeys('123');
    await driver.findElement(By.id('Address')).sendKeys('buet');
    await driver.findElement(By.id('Password')).sendKeys('123');
    await driver.findElement(By.id('Register')).click();
    
    // Wait for the registration process to complete (if there is any success message or confirmation element)
    await driver.wait(until.elementLocated(By.id('successMessage')), 5000);

    // Verify if the registration was successful by checking the presence of success message or confirmation element
    const successElement = await driver.findElement(By.id('successMessage'));
    const isRegistrationSuccessful = await successElement.isDisplayed();

    if (isRegistrationSuccessful) {
      console.log('Registration successful!');
    } else {
      console.log('Registration failed!');
    }
  } finally {
    // Quit the WebDriver instance
    await driver.quit();
  }
}

// Run the test
registerTest();
