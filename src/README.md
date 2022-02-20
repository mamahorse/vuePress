---
home: true
title: Home
heroImage: ./logo.png
actions:
  - text: 开始
    link: /guide/getting-started.html
    type: primary
  - text: 介绍
    link: /guide/
    type: secondary
features:
  - title: Coding范儿
    details: 不怕在自己的梦想里跌倒，只怕在别人的奇迹中迷路。只做自己梦想的主人，不做别人奇迹的听众
  - title: Coding范儿饭儿
    details: 若不是百炼成钢，谁能饱经风霜；若不是咬紧牙关，谁能一路向前。
  - title: Coding范儿饭儿
    details: 没有不劳而获的工作，更没有坐享其成的收获，若比别人贪心，请比别人用心。

footer: MIT Licensed | Copyright © 2022-present Evan You
---

### As Easy as 1, 2, 3

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
# install in your project
yarn add -D vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
yarn vuepress dev

# build to static files
yarn vuepress build
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">
  
```bash
# install in your project
npm install -D vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
npx vuepress dev

# build to static files
npx vuepress build
```

  </CodeGroupItem>
</CodeGroup>
