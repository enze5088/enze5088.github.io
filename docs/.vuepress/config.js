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
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/mp5088643",
    editLinks: false,
  },
};