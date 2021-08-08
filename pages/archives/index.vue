<template>
  <div>
    <Siderbar />
    <div class="main-wrapper">
      <section class="cta-section theme-bg-light px-3 py-5 p-md-5">
        <div class="container text-left">
          <h2 class="heading"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" class="svg-inline--fa fa-briefcase fa-w-16 fa-fw me-2"><path fill="currentColor" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path></svg>
            {{ tagName }}</h2>
        </div>
      </section>
      <section class="blog-list py-2 p-md-4">
        <div class="container">
          <div class="row">
              <div class="col-12 col-lg-11 col-xl-8">
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

              <NavRight />

            </div>
          </div>
        </section>
      </div>
      <Footer />
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
        link: [{ hid: 'canonical', rel: 'canonical', href: process.env.baseUrl + "/archives/" }],
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