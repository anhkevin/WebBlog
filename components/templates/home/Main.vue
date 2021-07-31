<template>
<div>
    <HomeTopbar :pageName="slogan" :showHome="false" />
    <div id="main-wrapper">
        <div id="main" :class="isHideMain == true?'hidden':''">
            <div class="row">
                <div class="col-12 col-lg-11 col-xl-8">
                    <div id="page" class="post pb-5 pl-1 pr-1 pl-sm-2 pr-sm-2 pl-md-4 pr-md-4 mb-md-4">
                        <div id="post-list">
                            <div v-for="article of articles" :key="article.slug" class="post-preview">
                                <div class="d-flex justify-content-between pr-xl-2">
                                    <h1><a :href="article.path.replace('/articles', '')">{{ article.title }}</a></h1>
                                </div>
                                <div class="post-content">
                                    <p>{{ article.description }}</p>
                                </div>
                                <div class="post-meta text-muted">
                                    <i class="far fa-clock fa-fw"></i> <span class="timeago">{{ formatDateByLocale(article.date) }}</span>
                                </div>
                            </div>
                        </div>
                        
                        <Pagination
                            :current-page="currentPage"
                            :total="total"
                            v-if="totalPages > 1" />
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
    name: 'HomeMain',
    props: {
        articles: {
            type: Array,
            required: true
        },
        total: {
            type: Number,
            default: 0,
        },
        perPage: {
            type: Number,
            default: 5,
        },
    },
    methods: {
        formatDateByLocale(d) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(d).toLocaleDateString('en', options)
        },
    },
    computed: {
        baseUrl() {
            return process.env.baseUrl
        },
        slogan() {
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
    }
}
</script>