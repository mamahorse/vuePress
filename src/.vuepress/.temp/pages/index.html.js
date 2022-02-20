export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Home",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "title": "Home",
    "heroImage": "./logo.png",
    "actions": [
      {
        "text": "开始",
        "link": "/guide/getting-started.html",
        "type": "primary"
      },
      {
        "text": "介绍",
        "link": "/guide/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "Coding范儿",
        "details": "不怕在自己的梦想里跌倒，只怕在别人的奇迹中迷路。只做自己梦想的主人，不做别人奇迹的听众"
      },
      {
        "title": "Coding范儿饭儿",
        "details": "若不是百炼成钢，谁能饱经风霜；若不是咬紧牙关，谁能一路向前。"
      },
      {
        "title": "Coding范儿饭儿",
        "details": "没有不劳而获的工作，更没有坐享其成的收获，若比别人贪心，请比别人用心。"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2022-present Evan You"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "As Easy as 1, 2, 3",
      "slug": "as-easy-as-1-2-3",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "README.md"
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
