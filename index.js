'use strict'

var path = require('path')
var fs = require('fs')

var dest = path.join(__dirname, 'boom.txt')
var content = 'kablow'

fs.writeFile(dest, content, 'utf8', function (err) {
  if (err) {
    console.error('FAIL', err)
  } else {
    console.log('SUCCESS')
    fs.unlink(dest, function (err) {
      if (err) {
        console.error('unlink FAIL', err)
      } else {
        console.log('unlink SUCCESS')
      }
    })
  }
})
