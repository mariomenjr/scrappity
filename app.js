'use strict';

const { loader, config } = require("./src");

// Use a nice table to print the report or error
loader({
  url: config.URLS.congressMembers,
  queryObj: config.PAGES
})
  .then(msg => console.log(msg))
  .catch(err => console.error(err));
