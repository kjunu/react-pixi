import { BitmapFont } from 'pixi.js'
import { emptyTexture } from '../__fixtures__/textures'

const parseBitmapFontData = (data, type = 'text/xml', texture = emptyTexture) => {
  const parsed = new window.DOMParser().parseFromString(data, type)

  // broken in jsdom!
  if (!(parsed instanceof XMLDocument)) {
    parsed.__proto__ = XMLDocument.prototype
  }

  BitmapFont.install(parsed, texture)
}

export default parseBitmapFontData
