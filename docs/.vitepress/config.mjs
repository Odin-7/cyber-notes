import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ShuLan",
  description: "个人开发手记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'public/images/title-logo.png', //标题logo
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/markdown-examples' },
      { text: '后端', link: '/markdown-examples' },
      { text: '我', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  }
})
