'use strict'

/**
 * Dependencies
 */

const fs = require('fs')
const url = require('url')
const meow = require('meow')
const ytdl_core = require('ytdl-core')

/**
 * Parse args
 */

const cli = meow(`
  Usage
    $ cast youtube
`)

/**
 * Define script
 */

function youtube(link) {
  const youtube_url = url.parse(link)

  ytdl_core(link).pipe(fs.createWriteStream(`${(youtube_url.query || 'youtube')}.flv`))
}

/**
 * Export script
 */

module.exports = (argv) => {
  if (argv.length >= 4) {
    youtube(argv[3])
  } else {
    throw new Error("Missing link to youtube video.")
  }
}
