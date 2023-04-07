# WhatsApp Bulk Messenger

WhatsApp Bulk Messenger is a script that allows you to send bulk personalized messages with attachments to individual contacts or groups via WhatsApp using the `wbm` library. You can schedule messages to be sent at a specific time and use command line arguments to specify attachments.

## Installation

Before running the script, you need to install the `wbm` and `yargs` libraries. You can do this by running the following command:

`npm install wbm yargs`

## Usage

To use the script, you need to define an array of contacts and a message template. The contacts should be in the following format:

```javascript
const contacts = [
    { phone: '1234567890', name: '1', age: 1 },
    { phone: '1234567890', name: '2', age: 2 },
    { phone: '1234567890', name: '3', age: 3 }
];

The message template should be a string that includes placeholders for the contact’s information. For example:

`const message = 'Hi {{name}}, your age is {{age}}';`

You can also specify a time at which the messages should be sent by defining a sendTime variable. For example:

`const sendTime = new Date(2023, 11, 24, 10, 33, 30, 0); // Schedule message for December 24th 2023 at 10:33:30`

To send messages with attachments, you can use the -f (or --file) command line argument to specify the path of a file to be sent as an attachment with the message. For example:

`node index.js -f /path/to/file`

To send messages to a WhatsApp group, you need to define a groupName variable that specifies the name of the group to which the message should be sent. For example:

const groupName = 'My Group';

You can then call the `sendMessageToGroup` function to send the message to the group.

## Contributions

Contributions are welcome! If you find any bugs or have suggestions for improving the script, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
