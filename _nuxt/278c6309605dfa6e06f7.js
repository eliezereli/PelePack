(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{321:function(t,n,e){"use strict";e.r(n);var o={data:function(){return{story:{content:{}}}},mixins:[{mounted:function(){var t=this;this.$storybridge.on(["published","change"],(function(n){n.slugChanged||t.$nuxt.$router.go({path:t.$nuxt.$router.currentRoute,force:!0})}))}}],asyncData:function(t){var n=t.query._storyblok||t.isDev?"draft":"published";return t.app.$storyapi.get("cdn/stories/home",{version:n}).then((function(t){return t.data})).catch((function(n){t.error({statusCode:n.response.status,message:n.response.data})}))}},r=e(4),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("section",{staticClass:"util__container"},[this.story.content.component?n(this.story.content.component,{key:this.story.content._uid,tag:"component",attrs:{blok:this.story.content}}):this._e()],1)}),[],!1,null,null,null);n.default=component.exports}}]);