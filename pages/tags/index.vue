<template>
  <div>
    <Siderbar />
    <HomeTopbar :pageName="tagName" :showHome="true" />
    <div id="main-wrapper">
        <div id="main" :class="isHideMain == true?'hidden':''">
            <div class="row">
                <div class="col-12 col-lg-11 col-xl-8">
                    <div id="page" class="post pb-5 pl-1 pr-1 pl-sm-2 pr-sm-2 pl-md-4 pr-md-4 mb-md-4">
                        <h1 class="dynamic-title">Tags</h1>
                        <div class="post-content">
                            <div id="tags" class="d-flex flex-wrap ml-xl-2 mr-xl-2">
                                <div v-for="(tag, id) in listTags" :key="id"> 
                                    <nuxt-link 
                                        :to="{ path: '/tags/' + tag[0]}" 
                                        class="tag"
                                        >
                                        {{ tag[0] }}
                                            <span class="text-muted">({{ tag[1] }})</span>
                                    </nuxt-link>
                                </div>
                            </div>
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