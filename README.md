## Simple-NLP

A simple regex based Q&A bot library.

### Example
```js
const {bot, r} = require("simple-nlp");

bot.addRule(r`My name is ([^\s]+)`, "intro.name");
bot.addAnswer("intro.name", "Hello %1");

const result = bot.process("Hello, my name is John");
console.log(result.answer) // Outputs -> Hello John
```

