console.log("Injected Script loaded...");
if (typeof require === "undefined") var require = () => null;
if (require && require('PolarisPost')) {
  const componentPrototypes = require('PolarisPost').prototype;
  console.log(componentPrototypes.componentDidMount);
  const oldComponentDidMount = componentPrototypes.componentDidMount;
  const oldRender = componentPrototypes.render;
  require('PolarisPost').prototype.componentDidMount = function () {
    oldComponentDidMount.bind(this)();
    console.log(this.props);
  }
  require('PolarisPost').prototype.render = function (props) {
    console.log("on render");
    return oldRender.bind(this)(props);
  }
  // require('PolarisPost').prototype.render = () => 'ádfksald';
  // const oldWillUpdates = componentPrototypes.componentDidMount;
  // componentPrototypes.componentDidMount = (props) => {
  //   return oldWillUpdates(props);
  // }

  // Modifying Video
  const videoComponentPrototypes = require('PolarisDeclarativeVideo').prototype;
  const oldVideoRender = videoComponentPrototypes.render;
  require('PolarisDeclarativeVideo').prototype.render = function (props) {
    // console.log('render video', this.props);
    const _props = this.props;
    const j = require('react');
    let a = this.props, b = a.alt, d = a.className, e = a.dashInfo, f = a.hideRightClickMenu, g = a.loop, h = a.muted,
      i = a.onFormatChanged, k = a.playsInline, l = a.poster, m = a.preload, n = a.src, o = a.type;
    a = a.useBrowserControls;
    const c = require;
    let p = !this.props.playing && !this.props.paused;
    p = !a && p;
    let q = {
      className: "_ab1d",
      controls: a,
      controlsList: a ? "nodownload" : void 0,
      crossOrigin: c("PolarisgetCrossOriginAttribute")(),
      muted: h,
      onContextMenu: f ? this.$17 : void 0,
      playsInline: k,
      loop: g,
      poster: l,
      preload: m,
      type: o
    };
    return j.jsx("div", {
      className: c("joinClasses")("_acam", d),
      children: j.jsxs("div", {
        className: "_ab1c",
        children: [this.isDashEligible() && e ? j.jsx(c("PolarisDeclarativeOzVideo"), {
          dashInfo: e,
          fallbackSrc: n,
          onFormatChanged: i,
          onPlayerReady: this.onPlayerReady,
          videoRef: this.$4,
          children: function (a) {
            return j.jsx("video", babelHelpers["extends"]({}, q, {
              ref: a
            }))
          }
        }) : j.jsx("video", babelHelpers["extends"]({}, q, {
          ref: this.$4,
          src: n
        })), p && l && j.jsx("img", {
          alt: b || void 0,
          className: "_ab1e",
          crossOrigin: c("PolarisgetCrossOriginAttribute")(),
          src: l
        }), j.jsx('button', {
          children: 'Download',
          className: 'custom-instagram-download-btn',
          onClick: function () {
            console.log(_props);
            const src = _props.src;
            const anchor = document.createElement('a');
            anchor.href = src;
            anchor.target = "_blank";
            anchor.click();
          }
        })]
      })
    })
  }


}
