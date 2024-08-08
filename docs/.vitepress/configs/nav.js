export const nav = [
  // {
  //   text: '首页',
  //   link: '/'
  // },
  {
    text: '前端',
    link: '/front-dev/index',
    activeMatch: '/front-dev/'
  },
  {
    text: '后端',
    link: '/back-dev/index',
    activeMatch: '/back-dev/'
  },
  {
    text: '我的项目',
    link: '/my-project/index',
    activeMatch: '/my-project/'
  },
  {
    text: 'AI相关',
    link: '/new-study/index',
    activeMatch: '/new-study/'
  },
  {
    text: '其他',
    activeMatch: '/tools-dev|browser-plugin',
    items: [ // 子菜单项
      {
        text: '实用工具',
        link: '/tools-dev/index',
        activeMatch: '/tools-dev/'
      },
      {
        text: 'Chrome插件',
        link: '/browser-plugin/index',
        activeMatch: '/browser-plugin/'
      },
      {
        text: 'VSCode插件',
        link: '/vscode-plugin/index',
        activeMatch: '/vscode-plugin/'
      }
    ],
  },
  {
    text: '关于',
    link: '/about-me/index',
    activeMatch: '/about-me/'
  },
]
