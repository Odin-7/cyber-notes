---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
layoutClass: 'home-layout'

hero:
  name: Cyber
  text: a developer 👨‍💻
  tagline: Discover and create.
  image:
    src: /images/logo.png
    alt: Cyber
    class: 'home-avatar'
  actions:
    - theme: brand
      text: 开始
      link: /front-dev
    - theme: alt
      text: AI
      link: https://mrk.auroralpixel.world
    - theme: alt
      text: Github
      link: https://github.com/Odin-7
features:
  - title: 前端导航
    details: 分享学习路线、项目经验、学习方法等等。
    icon: 🖥
    link: /front-dev
    linkText: 从这里开始

  - title: 后端导航
    details: 用 JS 写后端。
    icon: 💻
    link: /back-dev
    linkText: 去了解一下

  - title: Cortex
    details: 我的开源项目，欢迎加入。
    icon: 🌏
    link: https://github.com/cortex-ai
    linkText: 加入我们

  - title: 写一个插件
    details: Chrome / VSCode 插件分享
    icon: 🧰
    link: /browser-plugin
    linkText: 开始探索

  - title: AI 相关
    details: 逆水行舟，不进则退。
    icon: 💡
    link: /new-study
    linkText: 去看看

  - title: 我
    details: 一个喜欢瞎折腾的人。
    icon: 🤝
    link: /about-me
    linkText: 欢迎交流

  #   icon: 🚀 🐱‍🏍🕸🤼‍♂️😹👻🙈🤑🦾💪🚴‍♂️✍🤹‍♂️👓👨‍💻🌊🌎🛰💡🎯⚡🤑🤦‍♂️👀✨💪🤝🎈👓🔗🧰🔮🧩🧿🎮💻💡🛩🌏🌫🌪🌚💢🎉📟🖥 去
---

<style scoped>
.home-avatar{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.5s ease-in-out;
}
.home-layout .home-avatar:hover {
  cursor: pointer;
  /* background-color: pink; */
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

/* .m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
} */
</style>
