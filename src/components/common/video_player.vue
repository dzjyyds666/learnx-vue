<template>
  <div :style="{ width: props.width, height: props.height }">
    <video ref="videoPlayer" class="video-js" style="width: 100%; height: 100%"></video>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

const videoPlayer = ref(null)
const myPlayer = ref(null)

// 接受props
const props = defineProps({
  videoUrl: {
    type: String,
    default:
      'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8',
  },
  videoType: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '100%',
  },
})

onMounted(() => {
  myPlayer.value = videojs(
    videoPlayer.value,
    {
      poster: '//vjs.zencdn.net/v/oceans.png',
      controls: true,
      sources: [
        {
          src: props.videoUrl,
          type: props.videoType,
        },
      ],
      controlBar: {
        remainingTimeDisplay: {
          displayNegative: false,
        },
      },
      playbackRates: [0.5, 1, 1.5, 2],
    },
    () => {
      myPlayer.value.log('play.....')
    },
  )
})

onUnmounted(() => {
  if (myPlayer.value) {
    myPlayer.value.dispose()
  }
})
</script>

<style lang="scss" scoped></style>
