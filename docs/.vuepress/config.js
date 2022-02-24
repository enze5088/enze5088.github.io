const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "算法吐槽菌",
  description: "一个炼丹码农的自我修养",

  dest: "./dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src:
          "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN"
    },
  },

  themeConfig: {
    logo: "/logo_o.png",
    hostname: "https://enze5088.github.io/",

    author: "吐槽菌",
    repo: "https://github.com/enze5088/enze5088.github.io",

    nav: [
      { text: "主页", link: "/", icon: "home" },
      { text: "博客", link: "/home/", icon: "page" },
      {
        text: "博文",
        icon: "article",
        link: "/content/",
      },
      {
        text: "杂谈",
        link: "/articles/",
        icon: "note",
      },
      {
        text: "关于我",
        icon: "info",
        items: [
          { text: "zhihu", link: "https://www.zhihu.com/people/algorithm-supplement", icon: "support" },
          { text: "github", link: "https://github.com/enze5088", icon: "github" },
          { text: "博客园", link: "https://www.cnblogs.com/baiyunwanglai/", icon: "blog" },
          { text: "About Me", link: "/aboutme/",  icon: "locate"}
        ],
      },

    ],

    sidebar: {

      "/content/": ["article-1","article-2","article-3","article-4","article-5"],

      "/articles/":[
        "article-1" /* /baz.html */,
        "article-2" /* /baz.html */,
        "article-3",
        {
        title: "琐记",
        prefix: "notion/",
        children: ["article-1",
            "article-2",
            "article-3",
            "article-4",
        ],
        },
      ]

    },



    blog: {
      intro: "/intro/",
      sidebarDisplay: "mobile",
      links: {
        Zhihu: "https://www.zhihu.com/people/algorithm-supplement",
        Email: "pu.miao@foxmail.com",
        Github: "https://github.com/enze5088",
      },
    },

    footer: {
      display: true,
      content: "默认页脚",
    },

    comment: {
      type: "valine",
      appId: "2vSLKb0SqFKKWEgrOPGy3sp1-gzGzoHsz",
      appKey: "vma8Ewk61WeNkI81O3CGpT2i",
    },

    copyright: true,

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
