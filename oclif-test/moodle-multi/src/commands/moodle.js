const { Command, flags } = require('@oclif/command')
const puppeteer = require('puppeteer');


class MoodleCommand extends Command {
    static args = [
        { name: 'firstArg' },
        { name: 'secondArg' },
        { name: 'thirdArg' }
    ]

    async run() {

        const { flags, argv } = this.parse(MoodleCommand);

        async function launch() {
            const browser = await puppeteer.launch({
                headless: false,
                    defaultViewport: null,
                      args: ['--start-maximized']
            });

            const page = await browser.newPage({});

            await page.goto('http://moodle.bandtec.com.br/login/index.php');

            await page.waitForSelector('#username');

            await page.focus('#username');
            await page.keyboard.type(flags.username);

            await page.focus('#password');
            await page.keyboard.type(flags.password);



            await page.click("#loginbtn");
            // setTimeout(() => { }, 2000)
            await page.waitForSelector("#site-news-forum > div:nth-child(4)")
            await page.waitForXPath('//*[@id="page"]/div[2]/div/div[3]');
            await page.screenshot({ path: 'example.png' });
            await browser.close();


            //this.error(argv.toString())
            //this.warn(metadata.flags)
            //this.warn(raw.toString())
        };

        launch();
    }
}


MoodleCommand.description = `To make login on moodle`

MoodleCommand.flags = {
    password: flags.string({ char: 'p', description: 'password on moodle' }),
    username: flags.string({ char: 'u', description: 'username on moodle' })
}

module.exports = MoodleCommand