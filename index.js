const Builder = require('./lib/Builder');
const {writeFile, copyFile} = require('./utils/generate-site')
const generatePage = require('./src/generate-page')

new Builder().initializeBuilder();