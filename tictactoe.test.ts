import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    // let button = await (await driver).findElement(By.id('start-game'));
    // await button.click();
    let button = await driver.findElement(By.xpath('//button'))
    await button.click
    await driver.sleep(1000)
});

// test('Should check that clicking the upper left square adds an X to the square', async () => {
//     await 
// })
