'use strict'

/**
 * Dependencies
 */

const styled_components = require('styled-components')

/**
 * Constants
 */

const styled = styled_components.default

/**
 * Define style component
 */

let LazyContentStyle = styled.div(() => `
  background-color: #DDD;
`)

/**
 * Export style component
 */

module.exports = LazyContentStyle