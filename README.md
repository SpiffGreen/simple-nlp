## Bot-Talk

A simple regex based Q&A bot library.

### Installation
Using npm
```sh
$ npm install bot-talk
```

### Basic Usage
```js
const {bot, r} = require("bot-talk");

bot.addRule(r`My name is ([^\s]+)`, "intro.name");
bot.addAnswer("intro.name", "Hello %1");
bot.train();
const result = bot.process("Hello, my name is John");
console.log(result.answer) // Outputs -> Hello John
```

### License
[MIT](./LICENSE)

