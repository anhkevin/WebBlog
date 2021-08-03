<template>
  <div>
    <Siderbar />
    <HomeTopbar :pageName="tagName" :showHome="true" />
    <div id="main-wrapper">
        <div id="main" :class="isHideMain == true?'hidden':''">
            <div class="row">
                <div class="col-12 col-lg-11 col-xl-8">
                    <div id="page" class="post pb-5 pl-1 pr-1 pl-sm-2 pr-sm-2 pl-md-4 pr-md-4 mb-md-4">
                        <div id="page-tag">
                        <h1 class="pl-lg-2"> <i class="fa fa-tag fa-fw text-muted"></i> {{ tagName }} </h1>
                        <ul class="post-content pl-0">
                            <li v-for="video of listPost" :key="video.slug" class="d-flex justify-content-between pl-md-3 pr-md-3"> 
                                <nuxt-link :to="{ path: '/video/' + video.slug + '/'}" >{{ video.title }}</nuxt-link>
                                <span class="dash flex-grow-1"></span>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <NavRight />
            </div>
            <Footer />
        </div>
    </div>
    <Bottom />
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
        const tagName = "Video"

        return { 
            tagName,
        }
    },
    computed: {
        isHideMain() {
            if (this.$store.state.search) {
                return true;
            }
            return false;
        }
    },
    data() {
      return {
        listPost: {}
      };
    },
    async fetch() {
      this.listPost = await this.$content('video')
        .only(['title', 'slug'])
        .fetch()
    },
    head() {
      const title = "Video | " + process.env.namePage
      const description = process.env.description
      return {
        title,
        link: [{ hid: 'canonical', rel: 'canonical', href: process.env.baseUrl + "/video/" }],
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: description
          },
          // Open Graph
          {
            hid: "og:url",
            property: "og:url",
            content: process.env.baseUrl + "/video/",
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: title
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: description
          },
          // // Twitter Card
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: title
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: description
          }
        ]
      }
    }
  }
</script>