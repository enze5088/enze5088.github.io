module.exports = {
  theme:"antdocs",
  title: "炼丹拾遗",
  description: "一个码农的自我修养",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/1.jpg" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    logo: "/assets/1.jpg",
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "mp5088643/mp5088643.github.io",
    editLinks: false,
  },
  plugins: [
    [
        // 支持数学公式
        // https://vuepress.github.io/zh/plugins/mathjax/
        // npm install -D vuepress-plugin-mathjax
        'vuepress-plugin-mathjax',
        {}
    ]
]
};