<template>
   <div>
      <Siderbar />
      <div class="main-wrapper">
         <section class="about-me-section p-3 p-lg-5 theme-bg-light">
            <div class="container">
               <div class="profile-teaser row">
                  <div class="col-md-6 col-lg-6">
                     <h2 class="name font-weight-bold mb-1">About Me</h2>
                     <div class="bio mb-4">
                        I’m TianDev, a developer with 9 years of experience. I specialize in creating bespoke web solutions that not only meet client expectations but also set new standards for innovation and excellence.
                     </div>
                  </div>
                  <!--//col-->
                  <div class="col-md-6 col-lg-6 mb-3">
                     <img src="/img/tiandev_card.png" alt="avatar tiandev">
                  </div>
               </div>

               <div class="profile-teaser row">
                  <h2 class="section-title font-weight-bold mb-3">Expertise</h2>
                  <div class="col-md-6 col-lg-6">
                     <div class="tagline mb-3">Web Development</div>
                     <p>Proficient in crafting responsive and interactive websites that deliver seamless user experiences across all devices.</p>
                  </div>
                  <div class="col-md-6 col-lg-6">
                     <div class="tagline mb-3">PHP Programming</div>
                     <p>Extensive experience in PHP to build robust, server-side applications that are both high-performing and scalable.</p>
                  </div>
                  <div class="col-md-6 col-lg-6">
                     <div class="tagline mb-3">WordPress Solutions</div>
                     <p>Skilled in developing custom WordPress themes and plugins to enhance functionality and cater to specific business needs.</p>
                  </div>
                  <div class="col-md-6 col-lg-6">
                     <div class="tagline mb-3">Laravel Framework</div>
                     <p>Expertise in utilizing Laravel to create elegant and efficient web applications, ensuring code quality and application reliability.</p>
                  </div>
               </div>

               <div class="profile-teaser row">
                <div class="col">
                   <h2 class="section-title font-weight-bold mb-3">Contact</h2>
                   <div class="section-intro mb-5">
                     Feel free to reach out to discuss projects, collaborations, or just to connect!<br>
                     <b>Email:</b> anhkevin.ht@gmail.com <br>
                     Let's innovate together and turn your ideas into reality!
                   </div>
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
