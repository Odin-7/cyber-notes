---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
layoutClass: 'home-layout'

hero:
  name: '树懒の'
  text: '个人开发手记'
  tagline: 探索技术，记录生活，分享感悟
  image:
    src: /images/logo.png
    alt: 树懒
    class: 'home-avatar'
  actions:
    - theme: brand
      text: 快速开始
      link: /front-dev
    - theme: alt
      text: 百宝袋AI 🤖
      link: https://mrk.auroralpixel.world
    - theme: alt
      text: Github
      link: https://github.com/Odin-7/shulan-notes
features:
  - title: 前端导航
    details: 记录前端开发过程中的经验和技巧，分享学习心得。
    icon: 💻
    link: https://notes.fe-mm.com/fe/javascript/types
    linkText: 前端常用知识
  - title: 后端技术
    details: 探索后端开发的奥秘，分享技术和架构设计。
    icon: 👨‍💻
    link: https://notes.fe-mm.com/fe/javascript/types
    linkText: 后端常用知识
  - title: UI设计
    details: 关注用户体验，分享设计理念和实践经验。
    icon: 🎨
    link: https://notes.fe-mm.com/fe/javascript/types
    linkText: 设计素材
  - title: 提效工具
    details: 工欲善其事，必先利其器。<br />告别重复劳动，提升效率！
    icon: 🚀
    link: https://notes.fe-mm.com/fe/javascript/types
    linkText: 常用工具
  - title: 开源项目
    details: 拥抱开源，贡献力量！<br />分享开源项目开发经验，一起构建更美好的世界！
    icon: ⚡
    link: https://notes.fe-mm.com/fe/javascript/types
    linkText: 开源项目
  - title: 生活随笔
    details: 记录生活点滴，分享美好瞬间。<br />愿我有所发现，有所创造！
    icon: 📝
    link: https://notes.fe-mm.com/fe/javascript/types
    linkText: 生活随笔
  # - title: 关于我
  #   details: 我是一个积极乐观的人，相信未来充满无限可能。愿我有所发现，有所创造！
  # 相信代码可以改变世界，也相信生活充满诗意。喜欢阅读、旅行、音乐，享受生活中的美好。我是一个积极乐观、乐于学习的人，相信未来充满无限可能。积极乐观一名热爱技术的开发者，记录生活中的点滴感悟，分享技术学习的旅程，让我们一起成长！
  # icon: 👻
  # - title: 个人总结
  #   details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  # - title: AI相关
  #   details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  #   icon: 🚀 🐱‍🏍🕸🤼‍♂️😹👻🙈🤑🦾💪🚴‍♂️✍🤹‍♂️👓
---

<style scoped>
.home-layout .home-avatar:hover {
  background-color: pink;
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
