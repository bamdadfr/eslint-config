'use strict';

module.exports = {
  'overrides': [
    {
      'extends': ['./config-js.js'],
      'files': ['*.js']
    },
    {
      'extends': ['./config-jsx.js'],
      'files': ['*.jsx']
    },
    {
      'extends': ['./config-tsx.js'],
      'files': ['*.tsx']
    }
  ]
};
