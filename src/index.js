const uniqueRandomArray = require('unique-random-array');

const all = [
    'react',
    'angular',
    'vue',
    'polymer',
    'meteor'
];
const random = () => uniqueRandomArray(all);

module.exports = {
    all,
    random
};