<template>
    <header class="header text-center">
        <div class="force-overflow">
            <h1 class="blog-name pt-lg-4 mb-0">
                <a class="no-text-decoration" :href="baseUrl">{{ namePage }}</a>
            </h1>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" @click="clickMenu">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navigation" class="collapse navbar-collapse flex-column" v-bind:class="{'show':isShowMenu}">
                    <div class="profile-section pt-3 pt-lg-0">
                        <img class="profile-image mb-3 rounded-circle mx-auto" src="/img/tiandev_logo.png" alt="avatar">			
                        <div class="bio mb-3">
                            Chào mừng bạn đến với blog của tôi <br>
                            Là một "Developer notes" về lập trình
                        </div>
                        <hr>
                    </div>
                    <!--//profile-section-->
                    <ul class="navbar-nav flex-column text-start">
                        <li class="nav-item">
                            <a class="nav-link" :href="baseUrl" :class="{ active: $tiandev.$route.path === '/' }">
                                <i class="inline--fa fa fa-home" aria-hidden="true"></i>
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/tags/" :class="{ active: navActiveUrl($tiandev.$route.path, '/tags/') }">
                                <i class="inline--fa fa fa-tags" aria-hidden="true"></i>
                                 Tags
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/archives/" :class="{ active: navActiveUrl($tiandev.$route.path, '/archives/') }">
                                <i class="inline--fa fa fa-briefcase" aria-hidden="true"></i>
                                Archives
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/video/" :class="{ active: navActiveUrl($tiandev.$route.path, '/video/') }">
                                <i class="inline--fa fa fa-laptop-code" aria-hidden="true"></i>
                                Video
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about/" :class="{ active: navActiveUrl($tiandev.$route.path, '/about/') }">
                                <i class="inline--fa fa fa-user" aria-hidden="true"></i>
                                About Me
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <!--//force-overflow-->
        <ul class="social-list list-inline py-2 mx-auto">
            <li class="list-inline-item">
                <a href="https://github.com/anhkevin" target="_blank">
                    <i class="inline--fa fab fa-github-alt" aria-hidden="true"></i>
                </a>
            </li>
            <li class="list-inline-item">
                <a href="javascript:window.open('mailto:' + ['anhkevin.ht','gmail.com'].join('@'))">
                    <i class="inline--fa fa fa-envelope" aria-hidden="true"></i>
                </a>
            </li>
            <li class="list-inline-item">
                <a href="https://www.youtube.com/c/tiandev" target="_blank">
                    <i class="inline--fa fab fa-youtube" aria-hidden="true"></i>
                </a>
            </li>
        </ul>
        <!--//social-list-->
    </header>
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
        isShowMenu() {
            if (this.$store.state.menu) {
                return true
            }

            return false
        }
    },
    methods: {
        clickMenu() {
            if (this.$store.state.menu) {
                this.$store.commit('setMenu', false)
            } else {
                this.$store.commit('setMenu', true)
            }
        },
        navActiveUrl(url, nav_url_active) {
            let myUrl = url.split(nav_url_active);
            if(url != myUrl) {
                return true
            }
            return false
        }
    },
}
</script>