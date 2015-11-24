/* eslint no-console: 0 */
import R from 'ramda'
import React from 'react'

const namespace = (typeof window !== 'undefined') ? window : global

namespace.R = R
namespace.React = React
namespace.logger = {
  log: R.curry((key, value) => {
    console.log(key, value)
    return value
  }),
  error: R.curry((key, value) => {
    console.error(key, value)
    return value
  }),
  table: R.curry((key, value) => {
    console.log(key)
    console.table(value)
    return value
  })
}
