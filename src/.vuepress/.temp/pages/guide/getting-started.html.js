export const data = {
  "key": "v-fb0f0066",
  "path": "/guide/getting-started.html",
  "title": "进行测试啊，这个数据很号玩",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "guide/getting-started.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
