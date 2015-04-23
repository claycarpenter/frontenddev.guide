var Metalsmith = require('metalsmith'),
    markdown = require('metalsmith-markdown'),
    jadeTemplater = require('metalsmith-jade-templater'),
    drafts = require('metalsmith-drafts');

var isDraftMode = Boolean(process.argv[2]);

var metalsmith = Metalsmith(__dirname)
                    .source('./src/')
                    .destination('./output/');

if (!isDraftMode) {
    // Draft mode is disabled, use drafts plugin to excise draft articles.
    metalsmith.use(drafts())
}

// Continue constructing the build pipeline.
metalsmith
    .use(markdown())
    .use(jadeTemplater({baseTemplatesDir: __dirname + '/templates'}));

// Execute the build process.
metalsmith.build(function(err, files) {
    console.log('Building in', (isDraftMode ? 'draft' : 'production'), 'mode.');
    
    if (err) throw err;
    
    console.log('Build successful.');
    console.log('Output files:', Object.keys(files));
});