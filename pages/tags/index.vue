<template>
  <div>
    <Siderbar />
      <div class="main-wrapper">
          <section class="cta-section theme-bg-light py-5">
              <div class="container text-center single-col-max-width">
                  <h2 class="heading">Tags</h2>
                  <div class="intro">
                  <p>Welcome to Hashtags for #development </p>
                  
                  </div>
                  <div class="list-tags mt-5">
                    <nuxt-link 
                        v-for="(tag, id) in listTags" 
                        :key="id"
                        :to="{ path: '/tags/' + tag[0] + '/'}" 
                        class="btn btn-outline-primary position-relative me-4 mb-3"
                        >
                        {{ tag[0] }}
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{ tag[1] }}</span>
                    </nuxt-link>
                  </div>
              </div>
              <!--//container-->
          </section>
          <Footer />
      </div>
    </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
        const tagName = "Tags"

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
        listPost: {},
        listTags: {},
      };
    },
    async fetch() {
      this.listPost = await this.$content('articles')
        .only(['tags'])
        .fetch()
      if(this.listPost) {
        this.listTags = this.groupFunc(JSON.parse(JSON.stringify(this.listPost)), "tags");
      }
    },
    methods:{
      groupFunc(listData, props){
        let result = [];
        listData.forEach(data => {
          let tags = data.tags;
          tags.forEach(tag => {
            if(tag){
              if (typeof result[tag] === 'undefined') {
                result[tag] = 1;
              } else {
                result[tag]++;
              }
            }
          });
        });
        
        var sortTags = [];
        for (var vehicle in result) {
            sortTags.push([vehicle, result[vehicle]]);
        }

        return sortTags;
      }
    },
    head() {
      const title = "Tags | " + process.env.namePage
      const description = process.env.description
      return {
        title,
        link: [{ hid: 'canonical', rel: 'canonical', href: process.env.baseUrl + "/tags/" }],
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
            content: process.env.baseUrl + "/tags/",
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