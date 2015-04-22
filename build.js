var Metalsmith = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    jadeTemplater = require('metalsmith-jade-templater'),
    drafts = require('metalsmith-drafts');

Metalsmith(__dirname)
    .source('./src/')
    .destination('./output/')
    .use(drafts())
    .use(markdown())
    .use(jadeTemplater(__dirname + '/templates'))
    .build(function(err, files) {
        console.log('Build function...');
        
        if (err) throw err;
        
        console.log('Build successful.');
        console.log('Output files:', Object.keys(files));
    });