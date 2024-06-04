export const nav = [
  {
    text: '首页',
    link: '/'
  },
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
    text: 'UI设计',
    link: '/ui-design/index',
    activeMatch: '/ui-design/'
  },
  {
    text: '工具',
    activeMatch: '/tools-dev|open-source',
    items: [ // 子菜单项
      {
        text: '实用工具',
        link: '/tools-dev/index',
        activeMatch: '/tools-dev/'
      },
      {
        text: '开源项目',
        link: '/open-source/index',
        activeMatch: '/open-source/'
      }
    ],
  },
  {
    text: '树懒',
    link: '/about-me/index',
    activeMatch: '/about-me/'
  },
]
