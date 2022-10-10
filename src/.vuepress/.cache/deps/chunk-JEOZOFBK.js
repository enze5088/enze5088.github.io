import {
  useAutoLink,
  useThemeLocaleData
} from "./chunk-VHCPYUCC.js";
import {
  dt
} from "./chunk-VHNLTIDY.js";
import {
  AutoLink_default
} from "./chunk-SA6HJ7ZD.js";
import {
  Icon_default
} from "./chunk-KZQVGG2I.js";
import {
  ensureEndingSlash,
  isLinkExternal,
  isPlainObject
} from "./chunk-LS4IQIE6.js";
import {
  client_exports
} from "./chunk-FECFGNAG.js";
import {
  useRoute
} from "./chunk-U27KJSRC.js";
import {
  computed,
  h,
  inject,
  provide
} from "./chunk-4YVVQK3V.js";
import {
  isArray,
  isString
} from "./chunk-XYQ66V4O.js";

// node_modules/vuepress-theme-hope/lib/client/modules/sidebar/utils/isActive.js
var isActiveSidebarItem = (route, item, exact = false) => {
  if ("activeMatch" in item)
    return new RegExp(item.activeMatch).test(route.path);
  if (dt(route, item.link))
    return true;
  if (item.children && !exact)
    return item.children.some((child) => isActiveSidebarItem(route, child));
  return false;
};
var isMatchedSidebarItem = (route, item) => {
  if (item.type === "group")
    return item.children.some((child) => {
      if (child.type === "group")
        return isMatchedSidebarItem(route, child);
      return child.type === "page" && isActiveSidebarItem(route, child, true);
    }) || "prefix" in item && dt(route, item.prefix);
  return false;
};

// node_modules/vuepress-theme-hope/lib/client/modules/sidebar/composables/render.js
var renderItem = (config, props) => config.link ? h(AutoLink_default, {
  ...props,
  config
}) : h("p", props, [h(Icon_default, { icon: config.icon }), config.text]);
var renderChildren = (children) => {
  const route = useRoute();
  if (!children)
    return null;
  return h("ul", { class: "sidebar-sub-headers" }, children.map((child) => {
    const active = isActiveSidebarItem(route, child, true);
    return h("li", { class: "sidebar-sub-header" }, [
      renderItem(child, {
        class: ["sidebar-link", "heading", { active }]
      }),
      renderChildren(child.children)
    ]);
  }));
};

// node_modules/vuepress-theme-hope/lib/client/modules/sidebar/composables/utils.js
var resolvePrefix = (prefix = "", path = "") => path.startsWith("/") ? path : `${ensureEndingSlash(prefix)}${path}`;

// src/.vuepress/.temp/theme-hope/sidebar.js
var sidebarData = { "/en/": ["README.md", { "text": "Features Demo", "icon": "discover", "collapsable": true, "prefix": "demo/", "children": ["page.md", "markdown.md", "disable.md", "encrypt.md"] }, "intro.md", "slides.md"], "/aboutme/": ["README.md", "README_EN.md"], "/posts/": ["readme.md", { "text": "\u4EE3\u7801\u7B14\u8BB0", "collapsable": true, "prefix": "code/", "children": ["README.md", "1.md"] }, { "text": "\u79D1\u7814\u968F\u60F3", "collapsable": true, "prefix": "articles/", "children": ["README.md", "Untitled.md", "article-1.md", "article-2.md", "article-3.md"] }, { "text": "\u70BC\u4E39\u624B\u672D", "collapsable": true, "prefix": "paper/", "children": ["README.md", "1.md"] }, { "text": "\u968F\u624B\u8BB0\u5F55", "collapsable": true, "prefix": "note/", "children": ["README.md"] }, { "text": "\u6742\u4E03\u6742\u516B", "collapsable": true, "prefix": "other/", "children": ["README.md"] }, "cherry.md", "dragonfruit.md", "strawberry.md", "tomato.md"] };

// node_modules/vuepress-theme-hope/lib/client/modules/sidebar/composables/resolveConfig.js
var headerToSidebarItem = (header, headerDepth) => {
  const page = (0, client_exports.usePageData)();
  return {
    type: "heading",
    text: header.title,
    link: `${page.value.path}#${header.slug}`,
    children: headersToSidebarItemChildren(header.children, headerDepth)
  };
};
var headersToSidebarItemChildren = (headers, headerDepth) => headerDepth > 0 ? headers.map((header) => headerToSidebarItem(header, headerDepth - 1)) : [];
var resolveHeadingSidebarItems = (headerDepth) => {
  const page = (0, client_exports.usePageData)();
  return headersToSidebarItemChildren(page.value.headers, headerDepth);
};
var resolveArraySidebarItems = (sidebarConfig, headerDepth, prefix = "") => {
  const page = (0, client_exports.usePageData)();
  const route = useRoute();
  const handleChildItem = (item, pathPrefix = prefix) => {
    var _a;
    const childItem = isString(item) ? useAutoLink(resolvePrefix(pathPrefix, item)) : item.link ? {
      ...item,
      ...!isLinkExternal(item.link) ? { link: useAutoLink(resolvePrefix(pathPrefix, item.link)).link } : {}
    } : item;
    if ("children" in childItem) {
      const prefix2 = resolvePrefix(pathPrefix, childItem.prefix);
      const children = childItem.children === "structure" ? sidebarData[prefix2] : childItem.children;
      return {
        type: "group",
        ...childItem,
        prefix: prefix2,
        children: children.map((item2) => handleChildItem(item2, prefix2))
      };
    }
    return {
      type: "page",
      ...childItem,
      children: childItem.link === route.path ? headersToSidebarItemChildren(
        ((_a = page.value.headers[0]) == null ? void 0 : _a.level) === 1 ? page.value.headers[0].children : page.value.headers,
        headerDepth
      ) : []
    };
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
var resolveMultiSidebarItems = (sidebarConfig, headerDepth) => {
  const route = useRoute();
  const keys = Object.keys(sidebarConfig).sort((x, y) => y.length - x.length);
  for (const base of keys) {
    if (decodeURI(route.path).startsWith(base)) {
      const matchedConfig = sidebarConfig[base];
      return matchedConfig ? resolveArraySidebarItems(matchedConfig === "structure" ? sidebarData[base] : matchedConfig, headerDepth, base) : [];
    }
  }
  console.warn(`${route.path} do not have valid sidebar config`);
  return [];
};
var resolveSidebarItems = () => {
  var _a, _b, _c, _d;
  const routeLocale = (0, client_exports.useRouteLocale)();
  const frontmatter = (0, client_exports.usePageFrontmatter)();
  const themeLocale = useThemeLocaleData();
  const sidebarConfig = frontmatter.value.home ? false : (_b = (_a = frontmatter.value.sidebar) != null ? _a : themeLocale.value.sidebar) != null ? _b : "structure";
  const headerDepth = (_d = (_c = frontmatter.value.headerDepth) != null ? _c : themeLocale.value.headerDepth) != null ? _d : 2;
  return sidebarConfig === false ? [] : sidebarConfig === "heading" ? resolveHeadingSidebarItems(headerDepth) : sidebarConfig === "structure" ? resolveArraySidebarItems(sidebarData[routeLocale.value], headerDepth, routeLocale.value) : isArray(sidebarConfig) ? resolveArraySidebarItems(sidebarConfig, headerDepth) : isPlainObject(sidebarConfig) ? resolveMultiSidebarItems(sidebarConfig, headerDepth) : [];
};

// node_modules/vuepress-theme-hope/lib/client/modules/sidebar/composables/setup.js
var sidebarItemsSymbol = Symbol.for("sidebarItems");
var setupSidebarItems = () => {
  const sidebarItems = computed(() => resolveSidebarItems());
  provide(sidebarItemsSymbol, sidebarItems);
};
var useSidebarItems = () => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};

export {
  isActiveSidebarItem,
  isMatchedSidebarItem,
  renderItem,
  renderChildren,
  resolvePrefix,
  sidebarItemsSymbol,
  setupSidebarItems,
  useSidebarItems
};
//# sourceMappingURL=chunk-JEOZOFBK.js.map
