import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "博文",
    icon: "note",
    prefix: "/posts/",
    children: [
      { text: "随笔", link: "", icon: "note", activeMatch: "^/posts/$" },
      {
        text: "炼丹心得",
        icon: "note",
        children: ["paper/", "articles/"],
      },
      {
        text: "代码笔记",
        icon: "note",
        children: ["code/"],
      },
      {
        text: "其他",
        children: ["note/", "other/"],
      },
    ],
  },

  { 
    text: "杂谈", icon: "discover", 
    prefix: "/content/",
    children: [
      {
        text: "谈天说地",
        icon: "software",
        link: "",
        activeMatch: "^/content/$",
      },
    ]
  },
  {
    text: "关于我",
    icon: "note",
    link: "/aboutme/",
  },
]);
