<template>
    <div class="main-wrapper">
        <article class="blog-post px-3 py-5 p-md-5">
            <div class="container single-col-max-width">
                <header class="blog-post-header">
                    <h2 class="title mb-2">{{ post.title }}</h2>
                    <div class="meta mb-3">
                        <span class="date">Posted: {{ formatDateByLocale(post.date) }}</span> by <span class="author"> {{ post.authors[0].name }} </span></div>
                </header>
                <div class="blog-post-body">
                    <NuxtContent :document="post" />
                </div>
                <div class="blog-nav nav nav-justified my-5">
                    <div v-if="hasTags" class="post-tags mb-3">
                        <span class="fw-bold">Tags: </span> 
                        <nuxt-link 
                        v-for="(tag, id) in post.tags"
                        :key="id" 
                        :to="{ path: '/tags/' + tag}" 
                        class="post-tag no-text-decoration"
                        ><span class="badge bg-light text-dark">{{ tag }}</span></nuxt-link>
                    </div>
                </div>
                <div class="blog-comments-section">
                    <Disqus />
                </div>
            </div>
        </article>
        <Footer />
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
                url: process.env.baseUrl + "/" + this.post.slug + "/",
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