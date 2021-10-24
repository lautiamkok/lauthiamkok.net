'use strict'

import markdownJson from 'markdown-json'
import fs from 'fs'
import path from 'path'

function pushKeys (object, type) {
  // Loop the object.
  // https://mrfrontend.org/2017/09/3-ways-to-loop-over-object-properties-with-vanilla-javascript/
  Object.keys(object).map(key => {
    // console.log(key)
    // Split: posts/sample-project-1.html
    let array = key.split('/')
    let directory = array[0]

    // Split: sample-project-1.html
    // let slug = [...array].pop().split('.')[0]

    // Remove the last item and join the array.
    array.pop()
    let path = array.join('/')

    // Get the last item.
    // https://www.designcise.com/web/tutorial/how-to-replace-all-occurrences-of-a-word-in-a-javascript-string
    let last = [...array].pop()
    let slug = last.toLowerCase().replace(/ /g, '-')

    // Remove the first item then get the new first item.
    array.shift()
    let category = [...array].shift()

    // require file as string
    // https://stackoverflow.com/a/49838608/413225
    if (object[key].include !== undefined) {
      var filePath = './data/' + path + '/' + object[key].include
      var contents = fs.readFileSync(filePath, 'utf8')
      object[key]['contents'] = contents
    }

    // Push keys to the object.
    object[key]['path'] = path
    object[key]['type'] = type
    object[key]['directory'] = directory
    object[key]['category'] = category === 'published' ? '' : category
    object[key]['slug'] = slug

  })
}

async function jsonifyMarkDown (type, filepath) {
  let array = filepath.split('/')
  let source = array[0]
  let directory = array[1]

  // Markdown to json.
  // https://github.com/klaytonfaria/markdown-json
  const settings = {
    name: type,
    cwd: './',
    src: source + '/',
    filePattern: directory + '/**/*.md',
    ignore: '**/*(drafts|archive)/**',
    dist: filepath + type + '.json',
  }
  let data = await markdownJson(settings)

  // Add more keys to the data.
  pushKeys(data, type)

  // Get the object values only.
  return Object.values(data)
}

export { jsonifyMarkDown }
