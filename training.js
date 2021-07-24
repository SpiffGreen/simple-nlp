const bot = require("./simple-nlp");

// Possible questions
bot.addRule("hi", "greeting.hi");
bot.addRule("hey", "greeting.hi");
bot.addRule("hello", "greeting.hi");
bot.addRule("how are you", "ask.about");
bot.addRule("whatsup", "ask.about");
bot.addRule("howfar", "ask.about");
bot.addRule("your name", "ask.self");
bot.addRule("sex", "ask.sex");
bot.addRule("bye", "greeting.bye");
bot.addRule("fine", "answer.greeting");
bot.addRule("great", "answer.greeting");
bot.addRule("good", "answer.greeting");
bot.addRule("sorry", "answer.plead");

bot.addRule("order", "business.order");
bot.addRule("purchase", "business.order");
bot.addRule("i want", "business.order");
bot.addRule("i need", "business.order");
bot.addRule("Menu", "business.menu");
bot.addRule("List", "business.menu");
bot.addRule("Products", "business.menu");

// Answers
bot.addAnswer("greeting.hi", "Hello dear how are you?");
bot.addAnswer("greeting.hi", "How are you?");
bot.addAnswer("greeting.hi", "Hi, how can i help you?");
bot.addAnswer("greeting.bye", "Ok see you around");
bot.addAnswer("greeting.bye", "It was nice talking with you");
bot.addAnswer("ask.about", "I'm doing great, how can I help you?");
bot.addAnswer("ask.self", "I am a bot Created by Spiff");
bot.addAnswer("ask.sex", "😂 Hey I am a bot");
bot.addAnswer("ask.sex", "😂 Ha thats funny, you know i'm not human right?");
bot.addAnswer("answer.greeting", "That's good to know");
bot.addAnswer("answer.greeting", "That's great");
bot.addAnswer("answer.plead", "It's all good.");

bot.addAnswer("business.order", "You want to place an order, Contact +234 701 0990 0405");
bot.addAnswer("business.order", "You want to make a purchase, Contact +234 701 0990 0405");
bot.addAnswer("business.menu", "We sell eggs, milk, chickens, chicken feed, fish, etc");

// Train bot
bot.train();

module.exports = bot;