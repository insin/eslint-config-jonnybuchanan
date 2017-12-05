// @flow
import {ErrBack} from './types'

export function doThing(config: Object, cb: ErrBack) {
  console.log(config)
  cb(null)
}
