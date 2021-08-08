<template>
  <div>
    <Siderbar />
    <div class="main-wrapper">
        <article class="blog-post px-3 py-5 p-md-5">
            <div class="container single-col-max-width">
                <header class="blog-post-header">
                    <h2 class="title mb-5">{{ video.title }}</h2>
                </header>
                <div class="blog-post-body">
                    <div class="col-12 d-flex align-items-center justify-content-center mb-5">
                      <iframe width="720" height="405" :src="linkVideo" :title="tagName" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <NuxtContent :document="video" />
                </div>
                <div class="blog-comments-section">
                    <Disqus />
                </div>
            </div>
        </article>
        <Footer />
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params, redirect }) {
      const get_slug = params.slug
      const slug_split = get_slug.split("-iud");
      const tagName = slug_split[1]
      const linkVideo = "https://www.youtube.com/embed/" + tagName

      let video
      try {
        video = await $content('video', params.slug).fetch()
      } catch (e) {
        redirect('/404/')
      }

      return { 
            tagName,
            linkVideo,
            video
        }
    },
    head() {
      const title = this.video.title
      const description = this.video.description
      return {
        title,
        link: [{ hid: 'canonical', rel: 'canonical', href: process.env.baseUrl + "/video/" + this.video.slug + "/" }],
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
            content: process.env.baseUrl + "/video/" + this.video.slug + "/",
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