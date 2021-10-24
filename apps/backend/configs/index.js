'use strict'

// Dev:
const protocol = 'http'
const host = 'localhost'

// Cross domain ports - http.
const portsHttp = {
  local: '5000',
  remote: '3000'
}

export default {
  server: {
    port: portsHttp.local
  },
  static_dir: {
    static: './static',
    data: './data',
  },
  cors: {
    origin: protocol + '://' + host + ':' + portsHttp.remote,
    allowHeaders: [
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    ]
  },
}
