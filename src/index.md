---
title: Front End Development Study Guide
date: 2015-04-19
template: /article.jade
---

## HTML5

* Basics
    * Text
        * Basic text: Headers, paragraphs
        * Specially formatted text: Blockquotes, code, pre
        * Links
    * Images?
    * Borders and backgrounds
    * Non-semantic markup: divs and spans
    * Tables?
* Semantic markup
    * Intro to semantic markup
    * Overview of available semantic tags
    * Semantic markup examples?
        * Blog post with comments
        * Newspaper article
        * Product catalog
* Content-first design?
* Script loading structure (CSS in head, scripts as final children of body element)
* Multimedia
    * Audio
    * Video
    * Camera?
    * Canvas?
* Geolocation
* Local storage (this straddles both the HTML5 and JS topics)
* Accessibility

## CSS

* Basics
    * Basic syntax
        * Composition of a style rule
        * Comments
    * Units - px, em, rem, percent
    * Style rule location: internal, external, and inline
    * Rule precedence - A bit technical for a beginner, but it will help devs avoid confusion and problems later on. It's difficult to get very far in studying CSS without having a decent grasp of this algorithm.
    * IDs and classes - where does this go?
    * Selectors
        * Basic selectors
            * Universal
            * Tag
            * ID
            * Class
    * Properties
        * Basic typography
        * Box sizing
        * Colors, borders
        * Margins and padding
    * Inline and block elements
    * ???
* Intermediate
    * Rule precedence and graceful degradation
    * Selectors
        * Pseudo-classes
    * Layouts
        * Floats
        * Flexbox
        * Grid
    * Position
    * Forms?
    * Vendor prefixes, and prefix order
    * Animations
    * Transitions
* Advanced
    * CSS Resets
    * Responsive design
        * Rule precedence and responsive styles 
        * Media queries
        * Mobile-first design?
        * Responsive images
    * Best practices
        * CSS resets
        * BEM
            * http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/


## JavaScript

* Basic types
    * Strings
    * Numbers
    * Arrays
    * Type coercion
* Basic syntax
    * Loops
    * Conditionals
* Common components, objects
    * Window
    * Date
    * timers (setTimeout, etc.)
    * Error, error handling
    * Regex!
    * console and it's output options (log, dir, table, etc.)
* Misc
    * Closures, IIFEs
    * Variable scope (lexical scoping?)
    * this
    * Strict mode
    * Object properties (enumerable, editable, etc.)
    * call vs apply vs bind
    * Undefined vs null
* Data structures
* Design patterns
* OOP with JS?
* Prototypal inheritance
* Modular JS
    * AMD
    * RequireJS
* Life without jQuery
    * DOM interactions
    * Querying
    * Manipulating element styles, attributes
    * AJAX/XHR
    * Event handlers
    * Json
    * Format
    * Serializing/deserializing
* Debugging
    * Browser
        * Chrome dev tools
        * Firefox, Safari, IE dev tools?
    * Node/Backend
        * Node command line
        * Theseus?
        * Node inspector
* Logging?
    * Using console.log
    * Styling console.log?
    * Best practices?
    * Node logging frameworks?
    * Documentation
* Comments (writing good ones)
    * JS doc
    * Promises?

## Foundational JavaScript Frameworks

* jQuery
* Underscore
* Lo-Dash

## HTML Templating and Shorthand

* Markdown
* Jade
* Handlebars/Moustache
* EJS?
* Underscore's templating?
* Using JS to load templates from body script element contents
* Basic hand-rolled template to demonstrate the idea of string interpolation?

## Testing

* Testing theories
* Principles of TDD
* TDD vs BDD
* Designing for testability (using mocks, composition, smaller components)
* Unit testing vs integration testing
    * Unit testing
        * ???
    * Integration testing
        * ???
* Selenium
* PhantomJS?

## Front End Frameworks

* Angular
* Backbone
* Ember
* React?

## Platform-as-a-Service

* Parse
* Firebase

## HTTP

* Methods
* Cookies
* Sessions
* Query, form parameters
* Headers
* Status codes

## REST

* Basics - HTTP methods, data format
* Security
    * Basic authentication
    * OAuth

## Git & GitHub

* Creating a new repo?
* Cloning
* Branching and merging
* Push and pull
* Commit message etiquette
* Forking
* Pull requests
* GitHub pages (master/gh-pages combo)
* Issues - How to file a good issue, following up with PRs, etc.

## Command line

* Find
* Grep
* Vim
* Head, tail
* Sed, awk, etc.?
* less, more?
* Tree
* Network utils:
    * Verifying network connectivity with ping & nslookup
    * curl
    * wget
* Fundamental utilities: cd, pwd, which, ls, rm, rmdir, mkdir, touch
* su, sudo?
* ssh?

## Frontend utilities

* BrowserSync
* LiveReload?
* Browserify
* Yeoman?
* Bower
* Modernizr?
* webpack

## Build systems

* NPM
* Gulp
* Grunt
* Brunch?
* Metalsmith?

## Deployment

* Docker
* Vagrant
* Cloud platforms?
    * Heroku
    * Nodejitsu
    * Digital Ocean
    * Amazon?
    * OpenShift?

## Other

* Security?
* Analytics
   * Google Analytics 
* How to keep current?
