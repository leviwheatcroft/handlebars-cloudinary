import { v2 as cloudinary } from 'cloudinary'
import { parse } from 'hjson'

export default function (opts) {
  if (typeof opts === 'string') opts = { cloud_name: opts }
  cloudinary.config(opts)
  return (id, params) => cloudinary.url(id, parse(params.replace(/'/g, '"')))
}
