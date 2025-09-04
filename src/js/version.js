const version = require('../../package.json').version;
const buildDate = new Date().toLocaleString('en-GB', { 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
});

module.exports = { version, buildDate };
