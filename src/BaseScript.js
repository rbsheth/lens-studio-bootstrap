import './polyfills/lens-studio-console-polyfill'
import './polyfills/lens-studio-setTimeout-polyfill'
// Free to use image from
// https://www.pexels.com/photo/close-up-photo-of-parakeet-1059823/
import { getParrotImageBase64 } from './assets/parrot-image-base64'

const Promise = require('es6-promise-polyfill').Promise

// From https://www.tutorialspoint.com/es6/es6_promises.htm
/* eslint-disable */
function PromiseTest () {
  function add_positivenos_async (n1, n2) {
    const p = new Promise(function (resolve, reject) {
      if (n1 >= 0 && n2 >= 0) {
        // do some complex time consuming work
        resolve(n1 + n2)
      } else { reject('NOT_Postive_Number_Passed') }
    })
    return p
  }

  add_positivenos_async(10, 20)
    .then(successHandler) // if promise resolved
    .catch(errorHandler)// if promise rejected

  add_positivenos_async(-10, -20)
    .then(successHandler) // if promise resolved
    .catch(errorHandler)// if promise rejected

  function errorHandler (err) {
    console.log('Handling error', err)
  }
  function successHandler (result) {
    console.log('Handling success', result)
  }

  console.log('end')
}
/* eslint-enable */

script.api.PromiseTest = PromiseTest

function PrintTest (stringInput) {
  console.log(stringInput)
}

script.api.PrintTest = PrintTest

// a bit more complex of an example

const base64 = require('base-64')
const jpeg = require('jpeg-js')

function GetParrotImage () {
  const parrotImageBase64 = getParrotImageBase64()
  const decodedImageStr = base64.decode(parrotImageBase64)
  const decodedImageStrLength = decodedImageStr.length
  const decodedImageArray = new Uint8Array(new ArrayBuffer(decodedImageStrLength))

  for (let i = 0; i < decodedImageStrLength; i++) {
    decodedImageArray[i] = decodedImageStr.charCodeAt(i)
  }

  const decodedImage = jpeg.decode(decodedImageArray, { useTArray: true, formatAsRGBA: true })

  // Need to flip the image data, too...
  const width = decodedImage.width
  const height = decodedImage.height
  const stride = 4 * width // RGBA
  for (let j = 0; j < height / 2; j++) {
    for (let i = 0; i < width; i++) {
      for (let k = 0; k < 4; k++) {
        const tmpPixelValue = decodedImage.data[j * stride + i * 4 + k]
        decodedImage.data[j * stride + i * 4 + k] = decodedImage.data[(height - 1 - j) * stride + i * 4 + k]
        decodedImage.data[(height - 1 - j) * stride + i * 4 + k] = tmpPixelValue
      }
    }
  }

  return decodedImage
}

script.api.GetParrotImage = GetParrotImage
