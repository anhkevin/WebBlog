<template>
    <div id="sidebar" class="d-flex flex-column" v-bind:class="{'sidebar-sp':isShowMenu}">{{isShowMenu}}
        <div id="nav-wrapper">
            <div id="profile-wrapper" class="d-flex flex-column">
                <div id="avatar" class="d-flex justify-content-center"> <a :href="baseUrl" alt="avatar"> <img src="/img/tiandev_logo.png" alt="avatar"> </a></div>
                <div class="profile-text mt-3">
                    <div class="site-title"><h1><a :href="baseUrl">{{ namePage }}</a></h1></div>
                    <div class="site-subtitle font-italic">Developer notes</div>
                </div>
            </div>
            <ul class="nav flex-column nav-siderbar-left">
                <li v-for="tab of tabs" :key="tab.name" class="nav-item d-flex justify-content-center"> 
                    <a :href="tab.link" class="nav-link d-flex justify-content-center align-items-center w-100"> 
                        <i :class="tab.icon_class"></i> <span>{{ tab.name }}</span> 
                    </a>
                </li>
            </ul>
        </div>
        <div class="sidebar-bottom d-flex flex-wrap justify-content-around mt-4">
            <a  v-for="info of listInfo" :key="info.name" :href="info.link" :target="info.target"> 
                <i :class="info.icon_class"></i> 
            </a> 
        </div>
    </div>
</template>

<script>
export default {
  name: 'Siderbar',
  computed: {
    baseUrl() {
      return process.env.baseUrl
    },
    namePage() {
      return process.env.namePage
    },
    tabs() {
        return [
            { name: 'HOME', link: process.env.baseUrl, icon_class: 'fa-fw fas fa-home' },
            { name: 'TAGS', link: '/tags/', icon_class: 'fa-fw fas fa-tags' },
            { name: 'ARCHIVES', link: '/archives/', icon_class: 'fa-fw fas fa-archive' },
            // { name: 'YOUTUBE', link: '/video/', icon_class: 'fa-fw fab fa-youtube' },
            { name: 'ABOUT', link: '/about/', icon_class: 'fa-fw fas fa-info' },
        ]
    },
    listInfo() {
        return [
            { name: 'github', link: 'https://github.com/anhkevin', target: '_blank', icon_class: 'fab fa-github-alt' },
            { name: 'mail', link: "javascript:window.open('mailto:' + ['anhkevin.ht','gmail.com'].join('@'))", target: '_self', icon_class: 'fas fa-envelope' },
            { name: 'Youtube', link: 'https://www.youtube.com/c/tiandev', target: '_blank', icon_class: 'fab fa-youtube' },
            // { name: 'feed', link: '/feed.xml', target: '_self', icon_class: 'fas fa-rss' },
        ]
    },
    isShowMenu() {
        if (this.$store.state.menu) {
            return true
        }

        return false
    }
  },
}
</script>