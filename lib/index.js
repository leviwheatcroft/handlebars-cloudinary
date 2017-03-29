import { v2 as cloudinary } from 'cloudinary'
import { parse } from 'hjson'

/**
 * ## Anonymous Default export
 * thin wrapper around handlebars helper to allow cloudinary init
 *
 * @param {String|Object} opts cloud_name as string or options hash
 */
export default function (opts) {
  if (typeof opts === 'string') opts = { cloud_name: opts }
  cloudinary.config(opts)
  // return helper
  return (id, params) => cloudinary.url(id, parse(params.replace(/'/g, '"')))
}
