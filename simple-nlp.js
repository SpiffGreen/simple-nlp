const readline = require("readline");
const chalk = require("chalk");

const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Utilities
function input(self, str = "> ") {
    prompt.question(str, (value) => {
        const result = self.process(value);
        if(result.answer) {
            process.stdout.write(chalk.yellow(result.answer) + "\n");
            if(value.includes("bye")) {
                prompt.close();
                process.exit();
            }
            input(self, str);
        } else {
            process.stdout.write("Sorry please could you rephrase that?" + "\n");
            input(self, str);
        }
    });
    // prompt.close();
}

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function flattenArray(arr) {
    let result = [];
    arr.forEach(i => {
        if(!Array.isArray(i)) {
            result.push(i);
        } else {
            result.push(...flattenArray(i));
        }
    });
    return result;
};
/** Test
const testArr = [
    [1, 2, 3, 4],
    5, 6, 7,
    [8, 9, 10, [11, 12, [13, 14, 15], 16]],
    ];
 */

// Use String.raw for strings passed to new reg.
function process(reg, str, template) {
    // const m = /hello|hi\s+([^\s]+)/g.exec(str);
    const m = reg.exec(str);
    for(let i = 1; i < m.length; i++) {
        console.log(i);
        template = template.replace(`%${i}`, m[i]);
    }
    return template;
}

/**
 *  @description A simple example of nlp functions for building chatbots
 *
 */


class Simple_Nlp {
    constructor() {
        this.__Markers = Object.create(null);
        this.__Rules = Object.create(null);
        this.__Answers = Object.create(null);

        // Bind methods
        this.addRule = this.addRule.bind(this);
        this.addAnswer = this.addAnswer.bind(this);
        this.train = this.train.bind(this);
        this.process = this.process.bind(this);
        this.converse = this.converse.bind(this);
    }

    addRule(rule, marker) {
        this.__Markers[marker] ? this.__Markers[marker] += `|${rule}` : this.__Markers[marker] = rule;
        if(!this.__Answers[marker]) this.__Answers[marker] = Array();
    }

    addAnswer(marker, answer) {
        if(!this.__Answers[marker]) throw new Error(`Sorry '${marker} does not exist`);
        this.__Answers[marker].push(answer);
    }

    train() {
        for(let marker in this.__Markers) {
            this.__Rules[marker] = new RegExp(this.__Markers[marker], "gim");
        }
    }

    process(str) {
        const result = Object.create(null);
        result.utterance = str;
        result.possibleAnswers = Array();
        result.classifications = Object.create(null);
        for(let marker in this.__Rules) {
            let match = str.match(this.__Rules[marker]);
            if(match) {
                result.classifications[marker] = match;
                result.possibleAnswers.push(this.__Answers[marker])
            }
        }
        result.possibleAnswers = flattenArray(result.possibleAnswers);
        result.answer = result.possibleAnswers[randomBetween(0, result.possibleAnswers.length - 1)];
        return result;
    }

    converse() {
        input(this);
    }
}

const nlp = new Simple_Nlp();
module.exports = nlp;