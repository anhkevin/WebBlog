<template>
    <div id="panel-wrapper" class="col-xl-3 pl-2 text-muted topbar-down">
        <div id="toc-wrapper" class="pl-2 pr-4 mb-5">
            <div id="access-tags">
              <h3 class="pl-3 pt-2 mb-2">Trending Tags</h3>
              <div class="d-flex flex-wrap mt-3 mb-1 mr-3"> 
                <nuxt-link 
                  v-for="(tag, id) in listTags"
                  :key="id" 
                  :to="{ path: '/tags/' + tag[0] + '/'}" 
                  class="post-tag"
                  >
                  {{ tag[0] }}
                    <span class="text-muted">({{ tag[1] }})</span>
                  </nuxt-link>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'NavRight',
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

        sortTags.sort(function(a, b) {
            return b[1] - a[1];
        });

        // Trending Tags
        var resultTags = [];
        var countTags = 0;
        for (var tags in sortTags) {
            if(countTags == 10) break;
            countTags++;
            resultTags.push([sortTags[tags][0], sortTags[tags][1]]);
        }

        return resultTags;
      }
    }
  }
</script>