<template>
  <div>
    <Siderbar />
    <HomeTopbar :pageName="video.title" :showHome="true" :isHideSearch="true" />
    <div id="main-wrapper">
        <div id="main">
            <div class="row">
              <div id="post-wrapper" class="col-12">
                <div class="post pl-1 pb-3 pr-1 pl-sm-2 pr-sm-2 pl-md-4 pr-md-4 text-center">
                  <h1>{{video.title}}</h1>
                </div>
              </div>
            </div>
            <div class="row">
                <div class="col-12 d-flex align-items-center justify-content-center">
                    <iframe width="720" height="405" :src="linkVideo" :title="tagName" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="col-8 offset-2">
                  <div class="post pl-1 pb-3 pr-1 pl-sm-2 pr-sm-2 pl-md-4 pr-md-4">
                    <div class="post-content">
                      <NuxtContent :document="video" />
                    </div>
                  </div>
                </div>
            </div>
            <Footer />
        </div>
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