// @input Component.ScriptComponent baseScript
// @input Component.MaterialMeshVisual parrotMeshVisual

/* eslint-disable no-undef */

script.baseScript.api.PrintTest('Console logging test')

script.baseScript.api.PromiseTest()

const decodedImage = script.baseScript.api.GetParrotImage()

if (script.parrotMeshVisual && script.parrotMeshVisual.mainPass) {
  const swappableTexture = ProceduralTextureProvider.create(decodedImage.width, decodedImage.height, Colorspace.RGBA)
  script.parrotMeshVisual.mainPass.baseTex = swappableTexture
  swappableTexture.control.setPixels(0, 0, decodedImage.width, decodedImage.height, decodedImage.data)
}
