<template>
   <div>
      <Siderbar />
      <div class="main-wrapper">
         <section class="about-me-section p-3 p-lg-5 theme-bg-light">
            <div class="container">
               <div class="profile-teaser row">
                  <div class="col">
                     <h2 class="name font-weight-bold mb-1">TianDev</h2>
                     <div class="tagline mb-3">Web Developer</div>
                     <div class="bio mb-4">
                        Xin chào!<br>
                        Tôi là Ánh (nickname khác là TianDev hoặc Ánh Kevin) và là một web developer.<br>
                        Vào thời gian rãnh rỗi tôi thích viết lại kinh nghiệm hay vấn đề đã từng vấp phải và blog này chính là một "Developer notes" của tôi
                     </div>
                     <h2 class="section-title font-weight-bold mb-3">Về blog TianDev</h2>
                     <div class="section-intro mb-5">
                        Với nhiều năm trong lĩnh vực lập trình cá nhân tôi nhận thấy kiến thức lập trình là vô hạn. Một số kiến thức và kinh nghiệm tích lũy được nếu không được ứng dụng thường xuyên sẽ dần bị phai mờ đi sau một thời gian.<br>
                        Cụ thể tôi đã từng mất rất nhiều thời gian để research lại một vấn đề gì đó đã từng gặp phải hoặc đã từng research rất lâu trước đó<br>
                        <br>
                        Đó là lý do blog này của tôi ra đời mục đích lưu trữ lại một số kiến thức research được hoặc những kinh nghiệm trải qua vào blog này, không chỉ lưu trữ lại mà còn giúp tôi một lần nữa khắc sâu hơn.
                        <br><br>
                        Tôi mong rằng đây không chỉ là "Developer notes" cho cá nhân tôi mà có thể là nguồn tham khảo cho ai đó cần.
                     </div>
                     <!--//bio-->
                     <!-- <div class="mb-4">
                        <a class="btn btn-primary me-2 mb-3" href="portfolio.html">
                           <svg class="svg-inline--fa fa-arrow-alt-circle-right fa-w-16 me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                              <path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"></path>
                           </svg>
                           <span class="d-none d-md-inline">View</span> Portfolio
                        </a>
                        <a class="btn btn-secondary mb-3" href="resume.html">
                           <svg class="svg-inline--fa fa-file-alt fa-w-12 me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg="">
                              <path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path>
                           </svg>
                           <span class="d-none d-md-inline">View</span> Resume
                        </a>
                     </div> -->
                  </div>
                  <!--//col-->
                  <div class="col-md-5 col-lg-5">
                     <img class="profile-image img-fluid mb-3 mb-lg-0 me-md-0" src="/img/avatar_tiandev2.png" alt="avatar tiandev">
                  </div>
               </div>
            </div>
         </section>
         <Footer />
      </div>
   </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
        const tagName = "About"

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
    head() {
      const title = "About | " + process.env.namePage
      const description = process.env.description
      return {
        title,
        link: [{ hid: 'canonical', rel: 'canonical', href: process.env.baseUrl + "/about/" }],
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
            content: process.env.baseUrl + "/about/",
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