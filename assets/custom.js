const hljs_script = document.createElement("script");
hljs_script.setAttribute("src", "assets/highlight/highlight.min.js");
document.body.appendChild(hljs_script);

const hljs_style = document.createElement("link");
hljs_style.setAttribute("href", "assets/highlight/styles/default.min.css");
hljs_style.setAttribute("rel", "stylesheet");
document.body.appendChild(hljs_style);

setTimeout(() => {
  hljs.highlightAll();
}, 100);
