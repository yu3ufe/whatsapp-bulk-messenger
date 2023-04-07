const wbm = require('wbm');
const yargs = require('yargs');

async function sendMessageToContacts(contacts, message, sendTime, files) {
    if (contacts.length === 0) {
        throw new Error('Contacts array is empty');
    }
    const currentTime = new Date();
    const timeDiff = sendTime.getTime() - currentTime.getTime();
    if (timeDiff > 0) {
        await new Promise(resolve => setTimeout(resolve, timeDiff));
    }
    await wbm.send(contacts, message, files);
}

async function sendMessageToGroup(groupName, message, sendTime, files) {
    const currentTime = new Date();
    const timeDiff = sendTime.getTime() - currentTime.getTime();
    if (timeDiff > 0) {
        await new Promise(resolve => setTimeout(resolve, timeDiff));
    }
    await wbm.sendToGroup(groupName, message, files);
}

async function main() {
    try {
        const options = yargs
            .usage("Usage: -f <file>")
            .option("f", { alias: "file", describe: "File path", type: "string", demandOption: false })
            .argv;
        const filePath = options.file;
        const files = filePath ? [filePath] : undefined;

        await wbm.start({showBrowser: false, qrCodeData: false, session: true});
        const contacts = [
            { phone: '1234567890', name: '1', age: 1 },
            { phone: '1234567890', name: '2', age: 2 },
            { phone: '1234567890', name: '3', age: 3 }
        ];
        const groupName = 'My Group';
        const message = 'Hi {{name}}, your age is {{age}}';
        const sendTime = new Date(2023, 11, 24, 10, 33, 30, 0); // Schedule message for December 24th 2023 at 10:33:30
        await sendMessageToContacts(contacts, message, sendTime, files);
        await sendMessageToGroup(groupName, message, sendTime, files);
        await wbm.end();
    } catch (err) {
        console.error(err);
    }
}

main();