<template>
    <div>
        <Siderbar />
        <div class="main-wrapper page-products">
            <section class="blog-list py-2 p-md-4">
                <div class="container">
                    <div class="page-header">
                        <h1 class="page-title">Discover the Product</h1>
                    </div>
                    <div class="page-content mb-5">
                        <p>Welcome to our Products page! Discover high-quality, innovative solutions designed to meet your needs. Explore our offerings today for exceptional value and satisfaction.</p>
                    </div>
                    <div class="row gy-5 mb-5 loadmore">
                        <div class="col-12 col-lg-6 col-xl-12">
                            <div class="template-card d-xl-flex">
                                <picture class="flex-shrink-0">
                                    <img src="/img/product/banner_feedback.jpg" class="img-fluid" alt="iLanding - Bootstrap Landing Page Template" width="800" height="600"> 
                                </picture>
                                <div class="details">
                                    <h2><a href="https://45.76.19.61/demo-feedback" target="_blank" rel="bookmark">WP Plugin: Website Feedback Optimizer Plugin</a></h2>
                                    <div>Enhance your website's user experience with the "Website Feedback Optimizer" plugin</div>
                                    <ul>
                                        <li>Filter and Sort Feedback Data</li>
                                        <li>Configure Plugin Settings</li>
                                        <li>Customize Feedback Display Locations</li>
                                    </ul>
                                    <div>With this tool, receiving and managing user feedback has never been easier!</div>
                                    <div class="buttons mt-4">
                                        <a href="https://45.76.19.61/demo-feedback" rel="nofollow" class="demo me-5 ms-5" target="_blank"><span title="Live Demo">Live Demo</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 col-xl-12">
                            <div class="template-card d-xl-flex">
                                <picture class="flex-shrink-0">
                                    <img src="/img/product/banner_food.jpg" class="img-fluid" alt="iLanding - Bootstrap Landing Page Template" width="800" height="600"> 
                                </picture>
                                <div class="details">
                                    <h2><a href="https://lapos.io.vn/food-app" target="_blank" rel="bookmark">Office Lunch Ordering App</a></h2>
                                    <div>Order office meals quickly and easily, with convenient online payment options!</div>
                                    <ul>
                                        <li>Easy Group Ordering and Tracking</li>
                                        <li>Fast and Secure Payments</li>
                                        <li>Flexible Restaurant Selection</li>
                                    </ul>
                                    <div>Keep your team well-fed and focused by streamlining lunch orders, receiving timely notifications, and enjoying hassle-free payments. Make lunchtime the easiest part of the workday!</div>
                                    <div class="buttons mt-4">
                                        <a href="javascript:void(0);" @click="showImagePopup('/img/product/lapos_food_app.png')" rel="nofollow" class="demo me-5 ms-5"><span title="View Design">View Design</span></a>
                                        <a href="https://lapos.io.vn/food-app" rel="nofollow" class="demo" target="_blank"><span title="Go to Product">Go to Product</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 col-xl-12">
                            <div class="template-card d-xl-flex">
                                <picture class="flex-shrink-0">
                                    <img src="/img/product/banner_fund.jpg" class="img-fluid" alt="iLanding - Bootstrap Landing Page Template" width="800" height="600"> 
                                </picture>
                                <div class="details">
                                    <h2><a href="https://lapos.io.vn/funds-app" target="_blank" rel="bookmark">Transparent &amp; Secure Fund Management</a></h2>
                                    <div>Our app provides a transparent and secure fund management experience</div>
                                    <ul>
                                        <li>Intuitive interface</li>
                                        <li>Top-notch data security</li>
                                        <li>Detailed activity reports</li>
                                    </ul>
                                    <div>Experience professional and reliable fund management today!</div>
                                    <div class="buttons mt-4">
                                        <a href="javascript:void(0);" @click="showImagePopup('/img/product/lapos_fund_app.png')" rel="nofollow" class="demo me-5 ms-5"><span title="View Design">View Design</span></a>
                                        <a href="https://lapos.io.vn/funds-app" rel="nofollow" class="demo" target="_blank"><span title="Go to Product">Go to Product</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ImagePopup ref="imagePopup" :imageSrc="currentImage" />
        </div>
        <Footer />
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const tagName = "Products"

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
            listProducts: {},
            currentImage: '',
        };
    },
    async fetch() {
        this.listPost = await this.$content('articles')
            .only(['title', 'description', 'date', 'slug'])
            .sortBy('date', 'desc')
            .fetch()
        if (this.listPost) {
            this.listProducts = this.groupYear(JSON.parse(JSON.stringify(this.listPost)));
        }
    },
    methods: {
        groupYear(listData) {
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
            sortTags.sort(function (a, b) {
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
        },
        showImagePopup(imageSrc) {
            this.currentImage = imageSrc;
            this.$refs.imagePopup.openModal();
        }
    },

    head() {
        const title = "Products | " + process.env.namePage
        const description = process.env.description
        return {
            title,
            link: [{ hid: 'canonical', rel: 'canonical', href: process.env.baseUrl + "/products/" }],
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
                    content: process.env.baseUrl + "/products/",
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
<style scoped>
    .template-card {
            transition: .3s ease-in-out;
            height: 100%;
            background: #fff;
            border-radius: 10px;
            overflow: hidden;
            position: relative;
            z-index: 1;
            border: 1px solid #eee;
        }
    .flex-shrink-0 {
        flex-shrink: 0 !important;
    }
    .template-card picture {
        width: 100%;
        overflow: hidden;
    }

        .img-fluid {
        max-width: 100%;
        height: auto;
    }
    .template-card .details {
        padding: 20px;
        border-left: 1px solid #eee;
    }
    .template-card .details ul {
        margin: 0;
    }
    .template-card h2 {
        margin: 0;
        padding: 0 0 10px 0;
        font-size: 20px;
        font-weight: 600;
        font-family: Poppins, sans-serif;
    }
    .template-card h2 a {
        color: #035195;
        transition: .3s;
        text-decoration: none;
    }
    .template-card p {
        color: #555;
        margin: 0 0 25px 0;
        overflow: hidden;
    }
    .template-card .buttons {
        position: relative;
        z-index: 2;
    }
    .template-card .buttons a {
        display: inline-flex;
        align-items: center;
        padding: 10px 30px;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: .3px;
        border-radius: 4px;
        color: #023b6d;
        transition: all .3s;
        flex-grow: 1;
        flex-basis: auto;
        justify-content: center;
        border: 1px solid #cfd4e4;
        margin: 0 2px 12px 2px;
        text-decoration: none;
    }

    .template-card .buttons a:hover {
        border-color: #009bd9;
        color: #009bd9;
        text-decoration: none;
    }
    .template-card:hover {
        box-shadow: 0 0 40px rgba(2, 59, 109, .1);
    }
    .page-products a {
        outline: 0;
        text-decoration: none;
    }

@media (min-width: 1200px) {
    .template-card picture {
        max-width: 300px;
    }
    .template-card .buttons a:first-child {
        margin-left: 0;
    }
}
</style>