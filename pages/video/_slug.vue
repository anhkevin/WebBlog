<template>
  <div>
    <Siderbar />
    <HomeTopbar :pageName="tagName" :showHome="true" :isHideSearch="true" />
    <div id="main-wrapper">
        <div id="main">
            <div class="row">
              <br><br><br>
            </div>
            <div class="row">
                <div class="col-12 d-flex align-items-center justify-content-center">
                    <iframe width="720" height="405" :src="linkVideo" :title="tagName" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <Footer />
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const tagName = params.slug
      const linkVideo = "https://www.youtube.com/embed/" + tagName
      return { 
            tagName,
            linkVideo
        }
    }
  }
</script>