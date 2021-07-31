<template>
    <div>
        <div id="fb-root"></div>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v11.0&appId=189649645940637&autoLogAppEvents=1" nonce="XL8ZXvsM"></script>
        <div class="fb-comments" :data-href="sharing.url" data-width="100%" data-numposts="5"></div>
    </div>
</template>

<script>
export default {
  name: 'Share',
  props: {
    sharing: {
      type: Object,
      required: true
    }
  }
}
</script>