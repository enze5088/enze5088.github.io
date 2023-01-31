export const categoryMap = {"category":{"/":{"path":"/category/","map":{"博文":{"path":"/category/%E5%8D%9A%E6%96%87/","keys":["v-e1e3da16"]},"香蕉":{"path":"/category/%E9%A6%99%E8%95%89/","keys":["v-6a4cc795"]},"水果":{"path":"/category/%E6%B0%B4%E6%9E%9C/","keys":["v-6a4cc795"]},"那些关于发财的白日梦":{"path":"/category/%E9%82%A3%E4%BA%9B%E5%85%B3%E4%BA%8E%E5%8F%91%E8%B4%A2%E7%9A%84%E7%99%BD%E6%97%A5%E6%A2%A6/","keys":["v-7dba5346","v-7f6f2be5","v-fdb7f6f8"]},"苹果":{"path":"/category/%E8%8B%B9%E6%9E%9C/","keys":["v-5a4b3ca0"]}}},"/en/":{"path":"/en/category/","map":{}}},"tag":{"/":{"path":"/tag/","map":{"黄":{"path":"/tag/%E9%BB%84/","keys":["v-6a4cc795"]},"弯曲的":{"path":"/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/","keys":["v-6a4cc795"]},"长":{"path":"/tag/%E9%95%BF/","keys":["v-6a4cc795"]},"红":{"path":"/tag/%E7%BA%A2/","keys":["v-5a4b3ca0"]},"大":{"path":"/tag/%E5%A4%A7/","keys":["v-5a4b3ca0"]},"圆":{"path":"/tag/%E5%9C%86/","keys":["v-5a4b3ca0"]}}},"/en/":{"path":"/en/tag/","map":{}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


