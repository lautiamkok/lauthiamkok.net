'use strict'

// https://json5.org/
import JSON5 from 'json5'

export default {
  methods: {
    computeStyles (bgImage, bgStyle) {
      const styles = []
      if (bgImage) {
        styles.push({
          'background-image': 'url(' + bgImage + ')'
        })
      }
      if (bgStyle) {
        var string = '{' + bgStyle + '}'
        styles.push(JSON5.parse(string))
      }
      return styles
    }
  }
}
