import uniqueRandomArray from 'unique-random-array';

const all = [
    'react',
    'angular',
    'vue',
    'polymer',
    'meteor',
    'aurelia',
    'backbone'
];

const randomFrameworks = uniqueRandomArray(all);
const random = function(num = 1) {
    const randomItems = [];
    for(let i = 0; i<num; i++) {
        randomItems.push(randomFrameworks());
    }
    return randomItems.length === 1 ? randomItems[0] : randomItems;
};

module.exports = {
    all,
    random
};