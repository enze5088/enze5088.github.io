export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-e1e3da16","v-6f6b5172","v-6db678d3","v-6c01a034","v-6a4cc795","v-5f69c67d","v-5db4edde","v-5c00153f","v-5a4b3ca0","v-184f4da6","v-2e3eac9e","v-367e7be2","v-febea908","v-fb54f7ca","v-f7eb468c","v-d36e3386","v-a8fe0852","v-08a78e0d","v-0942cca8","v-210caa54","v-21b96758","v-31324a48","v-2dc8990a","v-2a5ee7cc","v-26f5368e","v-52c904c6"]},"/en/":{"path":"/en/article/","keys":["v-285adf66","v-0e4acecb","v-57615dc1","v-4fd051a1","v-fb852992","v-dd0b14b4","v-e074c5f2","v-e3de7730","v-e748286e","v-4e6ceffa","v-51d6a138","v-55405276","v-58aa03b4","v-5aa3d8ba","v-367b840a","v-70eda030","v-3777b6d3","v-4a2a37eb","v-395cd082"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]},"/en/":{"path":"/en/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":["v-2e3eac9e"]},"/en/":{"path":"/en/slide/","keys":["v-367b840a"]}},"star":{"/":{"path":"/star/","keys":["v-e1e3da16","v-6c01a034","v-5c00153f"]},"/en/":{"path":"/en/star/","keys":["v-285adf66","v-0e4acecb","v-e3de7730","v-55405276"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-6f6b5172","v-6db678d3","v-6c01a034","v-6a4cc795","v-5f69c67d","v-5db4edde","v-5c00153f","v-5a4b3ca0"]},"/en/":{"path":"/en/timeline/","keys":["v-285adf66","v-57615dc1","v-4fd051a1","v-fb852992","v-dd0b14b4","v-e074c5f2","v-e3de7730","v-e748286e","v-4e6ceffa","v-51d6a138","v-55405276","v-58aa03b4","v-0e4acecb"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
