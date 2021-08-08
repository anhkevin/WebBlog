<template>
    <div class="row">
        <div v-for="article of articles" :key="article.slug" class="col-md-4 mb-3">
            <div class="card blog-post-card">
                <div class="card-body">
                    <h5 class="card-title"><a class="theme-link" :href="setUrlPost(article.slug)">{{ article.title }}</a></h5>
                    <p class="card-text">{{ article.description }}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted"><i class="inline--fa fa fa-clock" aria-hidden="true"></i>
                        {{ formatDateByLocale(article.date) }}</small>
                    <nuxt-link :to="{ path: '/tags/' + article.tags[0] + '/'}" class="box-tags">
                        <span class="badge bg-light text-dark">{{article.tags[0]}}</span>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Article',
    props: {
        articles: {
            type: Array,
            required: true
        }
    },
    methods: {
        formatDateByLocale(d) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
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
}
</script>