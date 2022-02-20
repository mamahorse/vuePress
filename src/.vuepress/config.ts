import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  title: 'Coding饭儿',
  description: '越来越有范儿',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  base:'/vuePress/',
  dest:'dist',
  themeConfig: {
    logo: '/images/logo.jpg',
    sidebar: {
        '/guide/': [
          {
            text: 'Guide',
            children: ['/guide/README.md', '/guide/getting-started.md'],
          }
        ],
    }
  },
 
})