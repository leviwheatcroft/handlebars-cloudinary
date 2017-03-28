import { v2 as cloudinary } from 'cloudinary'
import config from 'config'
import { parse } from 'hjson'

cloudinary.config(config.get('metalsmithCloudinary'))
cloudinary.config({ secure: true })

function helper (path, options) {
  options = options.replace(/'/g, '"')
  return cloudinary.url(path, parse(options))
}
export default helper
export { helper, cloudinary }
