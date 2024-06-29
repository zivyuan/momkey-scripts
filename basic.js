/**
 * 油猴脚本脚本
 */

/**
 *
 * @param {string} url 脚本文本或 url
 * @param {string} position 注入位置, 默认: head
 *
 * | 位置 | 说明 |
 * | --- | --- |
 * | head | <head> 尾部 |
 * | head-start | <head> 尾部 |
 * | body | <head> 尾部 |
 * | body-start | <head> 开始 |
 *
 *
 *
 */
const injectScript = (url, position) => {
  position = position || "head";
  const tag = position.indexOf("head") > -1 ? "head" : "body";
  const start = position.indexOf("start") > -1;
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  // script.innerHtml = ''
  const container = document.querySelector(tag);
  if (start) {
    container.insertBefore(script, container.children[0])
  } else {
    container.appendChild(script);
  }
};
