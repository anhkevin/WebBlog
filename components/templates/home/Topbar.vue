<template>
    <div id="topbar-wrapper" class="row justify-content-center topbar-down">
        <div id="topbar" class="col-11 d-flex h-100 align-items-center justify-content-between">
            <span id="breadcrumb"> 
                <span v-if="showHome"> <a href="/"><i class="fa-fw fas fa-home"></i></a> </span> 
                <template v-if="linkbre">
                    <span v-for="item in linkbre" :key="item.name"> <a :href="item.link">{{ item.name }}</a> </span> 
                </template>
                <span>{{ pageName }}</span> 
            </span>
            <div v-if="!isHideSearch" id="search-wrapper" class="align-items-center"> 
                <i class="fas fa-search fa-fw"></i> 
                <input
                    class="form-control" 
                    id="search-input"
                    v-model="searchQuery"
                    type="search"
                    autocomplete="off"
                    placeholder="Search ..."
                />
                <i v-if="searchQuery != ''" class="fa fa-times-circle fa-fw visable" @click="clearInput"></i> 
                <i v-else class="fa fa-times-circle fa-fw"></i> 
            </div> 
        </div>
        <div v-if="searchQuery != ''" id="search-result-wrapper" class="d-flex justify-content-center">
            <div class="col-12 col-xl-11 post-content">
                <div v-if="articles_search.length" id="search-results" class="d-flex flex-wrap justify-content-center text-muted mt-3">
                    <div v-for="article_search of articles_search" :key="article_search.slug" class="pl-1 pr-1 pl-sm-2 pr-sm-2 pl-lg-4 pr-lg-4 pl-xl-0 pr-xl-0">
                        <a :href="setUrlPost(article_search.path)">{{ article_search.title }}</a>
                        <div class="post-meta d-flex flex-column flex-sm-row text-muted mt-1 mb-1">
                            <div><i class="fa fa-tag fa-fw"></i>{{ article_search.tags.join(", ") }}</div>
                        </div>
                        <p>{{ article_search.description }}</p>
                    </div>
                </div>
                <div v-else id="search-results" class="d-flex flex-wrap justify-content-center text-muted mt-3"><p class="mt-5">Oops! No result founds.</p></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Topbar',
    props: {
        pageName: {
            type: String,
            default: '',
        },
        showHome: {
            type: Boolean,
            default: false,
        },
        linkbre: {
            type: Array,
            default() {
                return []
            }
        },
        isHideSearch: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        clearInput: function(event) {
            this.searchQuery = '';
        },
        setUrlPost(path) {
            if (!path) {
                return path;
            }
            const url = path.replace('/articles', '')
            return url;
        }
    },
    data() {
      return {
        searchQuery: '',
        articles_search: []
      }
    },
    watch: {
      async searchQuery(searchQuery) {
        this.$store.commit('setSearch', searchQuery)
        if (!searchQuery) {
          this.articles_search = []
          return
        }
        this.articles_search = await this.$content('articles')
          .limit(6)
          .search(searchQuery)
          .fetch()
      }
    }
}
</script>