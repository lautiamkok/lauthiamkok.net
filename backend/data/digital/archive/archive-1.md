---
title: Draft 1
description: GraphQL is awesome!
order: 2
---

# Welcome to this super example!

Hello world!
Thanks for dropping by to say hello! 🔥🔥🔥

```
export default {
  async asyncData ({ error, $axios }) {
    try {
      let { data } = await $axios.get('/wp-json/api/v1/page/about')
      return {
        post: data
      }
    } catch (err) {
      let data = err.response.data
      return error({
        statusCode: data.status,
        message: data.message
      })
    }
  },
}
```
