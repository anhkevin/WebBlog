<template>
  <div>
    <Siderbar />
    <div id="main-wrapper">
      <div id="main-about">
        <div class="row">
<!-- <div class="containers col-lg-6 col-md-6">
  
  <div class="pic"></div>
  
  <div class="box1"></div>
  <div class="box2"></div>
  
  <div class="social1">
    <i class="fa fa-facebook" aria-hidden="true"></i> 
  </div>
  <div class="social2">
  <i class="fa fa-dribbble" aria-hidden="true"></i>
  </div>
  <div class="social3">
    <i class="fa fa-codepen" aria-hidden="true"></i>
  </div>
</div> -->

<!-- <div class="content col-md-offset-6 col-lg-offset-6"> -->
  <div class=" col-lg-6 col-md-6 offset-md-3 offset-lg-3">
  <center><h1 class="contentHead">ABOUT ME</h1></center>
  
  <h2>Hi, you guys <br/><br/>
    My name is TianDev. 
    <br>I live and work in VietNam
    <br>I describe myself as a passionate developer who loves coding on the web platform ❤️.
    <br><br>
  </h2>
</div>

  <div class="col-md-11 main-about-youtube">
<div class="container">
   <div class="row no-gutters justify-content-between align-items-center mt-3">
      <div class="profile-image">
         <img src="/img/tiandev_logo.png" alt="">
      </div>
      <div class="col-3 profile-name">
         TianDev
      </div>
      <div class="col profile-recomended">
         Recommended channel for you
      </div>
      <div class="col-2">
         <a href="https://www.youtube.com/c/TianDev?sub_confirmation=1" target="_blank"><div class="subscribe">Subscribe</div></a>
      </div>
      <div class="profile-delete col-1">
         <button><img src="data:image/svg+xml;base64,
            PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDM1NyAzNTciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM1NyAzNTc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48Zz4KCTxnIGlkPSJjbGVhciI+CgkJPHBvbHlnb24gcG9pbnRzPSIzNTcsMzUuNyAzMjEuMywwIDE3OC41LDE0Mi44IDM1LjcsMCAwLDM1LjcgMTQyLjgsMTc4LjUgMCwzMjEuMyAzNS43LDM1NyAxNzguNSwyMTQuMiAzMjEuMywzNTcgMzU3LDMyMS4zICAgICAyMTQuMiwxNzguNSAgICIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojOTA5MDkwIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wb2x5Z29uPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=" /></button>
      </div>
   </div>
   <div class="row no-gutters mt-4">
      <div class="col">
         <a href="https://www.youtube.com/watch?v=HzwkID6Pzlg" target="_blank"><img src="https://img.youtube.com/vi/HzwkID6Pzlg/maxresdefault.jpg" class="profile-video" alt=""></a>
         <div id="profile-video_title1" class="profile-video_title mt-2">
            Bphone Icon - HTML & CSS
         </div>
         <!-- <div class="profile-video_name">ASAPROCKYUPTOWN</div>
         <div class="profile-video_stats">9.6M views 	
            &#183; 2 months ago
         </div> --><br>
      </div>
      <div class="col">
         <a href="https://www.youtube.com/watch?v=PFTv6O0cOwQ" target="_blank"><img src="https://img.youtube.com/vi/PFTv6O0cOwQ/maxresdefault.jpg" class="profile-video" alt=""></a>
         <div id="profile-video_title2" class="profile-video_title mt-2">
            Xiaomi Logo - HTML & CSS
         </div>
         <!-- <div class="profile-video_name">ASAPROCKYUPTOWN</div>
         <div class="profile-video_stats">9.6M views 	
            &#183; 2 months ago
         </div> --><br>
      </div>
      <div class="col">
         <a href="https://www.youtube.com/watch?v=oXrQvYoUXis" target="_blank"><img src="https://img.youtube.com/vi/oXrQvYoUXis/maxresdefault.jpg" class="profile-video" alt=""></a>
         <div id="profile-video_title3" class="profile-video_title mt-2">
            Youtube Logo - HTML & CSS
         </div>
         <!-- <div class="profile-video_name">ASAPROCKYUPTOWN</div>
         <div class="profile-video_stats">9.6M views 	
            &#183; 2 months ago
         </div> --><br>
      </div>
      <div class="col">
         <a href="https://www.youtube.com/watch?v=oe3-MLVg4eI" target="_blank"><img src="https://img.youtube.com/vi/oe3-MLVg4eI/maxresdefault.jpg" class="profile-video" alt=""></a>
         <div id="profile-video_title4" class="profile-video_title mt-2">
            Twitter - HTML & CSS
         </div>
         <!-- <div class="profile-video_name">ASAPROCKYUPTOWN</div>
         <div class="profile-video_stats">9.6M views 	
            &#183; 2 months ago
         </div> -->
         <br>
      </div>
   </div>
    </div> </div>
</div>   

<Footer />
</div>   

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
            content: process.env.baseUrl + "/about",
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
  @import 'assets/css/about.css';
  @import 'assets/css/youtube.css';
</style>