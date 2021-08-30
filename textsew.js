
const Raviya = require('./config');
const fs = require('fs');
const chalk = require('chalk');

if (fs.existsSync('./textsew/' + Raviya.TEXT + '.json')) {
    console.log(
        chalk.green.bold('Loading ' + Raviya.TEXT + ' textsew...')
    );

    var json = JSON.parse(fs.readFileSync('./textsew/' + Raviya.TEXT + '.json'));
} else {
    console.log(
        chalk.red.bold('')
    );

    var json = JSON.parse(fs.readFileSync('./textsew/SEW.json'));
}

function getrule(file) {
    return json['STRINGS'][file];
}

module.exports = {
    textsew: json,
    getrule: getrule
}
