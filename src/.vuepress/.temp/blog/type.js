export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-e1e3da16","v-6a4cc795","v-5a4b3ca0","v-febea908","v-fb54f7ca","v-f7eb468c","v-f481954e","v-d36e3386","v-08a78e0d","v-7c057aa7","v-7dba5346","v-7f6f2be5","v-fdb7f6f8","v-0942cca8","v-21b96758","v-210caa54"]},"/en/":{"path":"/en/article/","keys":[]}},"star":{"/":{"path":"/star/","keys":["v-e1e3da16"]},"/en/":{"path":"/en/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-6a4cc795","v-5a4b3ca0"]},"/en/":{"path":"/en/timeline/","keys":[]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

