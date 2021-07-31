<template>
  <div>
      <HomeTopbar :pageName="post.title" :showHome="true" />
      <div id="main-wrapper">
          <div id="main" :class="isHideMain == true?'hidden':''">
              <div class="row">
                  <div id="post-wrapper" class="col-12 col-lg-11 col-xl-8">
                      <div class="post pl-1 pr-1 pl-sm-2 pr-sm-2 pl-md-4 pr-md-4">
                          <h1>{{ post.title }}</h1>
                          <div class="post-meta text-muted d-flex flex-column">
                              <div>
                                  Posted <span class="timeago">{{ formatDateByLocale(post.date) }}</span> by <span class="author"> {{ post.authors[0].name }} </span>
                              </div>
                          </div>
                          <div class="post-content">
                              <nuxt-content :document="post" />
                          </div>

                          <div class="text-muted">
                              <div v-if="hasTags" class="post-tags mb-3">
                                  <i class="fa fa-tags fa-fw mr-1"></i> 
                                  <nuxt-link 
                                  v-for="(tag, id) in post.tags"
                                  :key="id" 
                                  :to="{ path: '/tags/' + tag}" 
                                  class="post-tag no-text-decoration"
                                  >{{ tag }}</nuxt-link>
                              </div>
                              <Share :sharing="data.sharing" />
                          </div>
                          <PostComment :sharing="data.sharing" />
                      </div>
                  </div>
                  <NavRight />
              </div>
              <Footer />
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PostContent',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasTags() {
      return this.post.tags
    },
    data() {
        return {
            sharing: {
                url: process.env.baseUrl + this.$route.fullPath,
                title: this.post.title,
                description: this.post.description,
                quote: '',
                hashtags: this.post.tags.join(", "),
            }
        }
    },
    breadcrumb() {
        return process.env.slogan
    },
    totalPages() {
        return Math.floor(this.total / this.perPage);
    },
    currentPage() {
        return parseInt($nuxt.$route.query.page) || 1;
    },
    isHideMain() {
        if (this.$store.state.search) {
            return true;
        }
        return false;
    }
  },
  methods: {
    formatDateByLocale(d) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(d).toLocaleDateString('en', options)
    }
  }
}
</script>