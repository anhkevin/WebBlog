<template>
  <div>
    <Siderbar />
    <HomeTopbar :pageName="tagName" :showHome="true" />
    <div id="main-wrapper">
        <div id="main" :class="isHideMain == true?'hidden':''">
            <div class="row">
                <div class="col-12 col-lg-11 col-xl-8">
                    <div id="page" class="post pb-5 pl-1 pr-1 pl-sm-2 pr-sm-2 pl-md-4 pr-md-4 mb-md-4">
                        <h1 class="dynamic-title">Archives</h1>
                        <div class="post-content">
                            <div id="archives" class="pl-xl-2">
                                <div v-for="(archives, id) in listArchives" :key="id">
                                  <span class="lead">{{archives[0]}}</span>
                                  <ul class="list-unstyled">
                                      <li v-for="(item, id2) in archives[1]" :key="id2">
                                        <div> <span class="date day">{{formatDateByLocale(item.date, { day: 'numeric' })}}</span> <span class="date month small text-muted">{{formatDateByLocale(item.date, { month: 'short' })}}</span> <a :href="setUrlPost(item.slug)">{{ item.title }}</a></div>
                                      </li>
                                  </ul>
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
        const tagName = "Archives"

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
        listArchives: {},
      };
    },
    async fetch() {
      this.listPost = await this.$content('articles')
        .only(['title', 'description', 'date', 'slug'])
        .sortBy('date', 'desc')
        .fetch()
      if(this.listPost) {
        this.listArchives = this.groupYear(JSON.parse(JSON.stringify(this.listPost)));
      }
    },
    methods:{
      groupYear(listData){
        let result = [];
        listData.forEach(data => {
          let year = this.formatDateYear(data.date);
          if (typeof result[year] === 'undefined') {
            result[year] = [];
          }
          result[year].push(data);
        });
        var sortTags = [];
        for (var vehicle in result) {
            sortTags.push([vehicle, result[vehicle]]);
        }
        sortTags.sort(function(a, b) {
            return b[0] - a[0];
        });
        return sortTags;
      },
      formatDateYear(d) {
          var date = new Date(d)
          var year = date.getFullYear();
          return year
      },
      formatDateByLocale(d, options) {
            return new Date(d).toLocaleDateString('en', options)
        },
        setUrlPost(path) {
            if (!path) {
                return path;
            }
            const url = "/" + path + "/"
            return url;
        }
    }, 

    head() {
      const title = "Archives | " + process.env.namePage
      const description = process.env.description
      return {
        title,
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
            content: process.env.baseUrl + "/archives/",
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