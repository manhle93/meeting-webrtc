<template>
  <div class="flex flex-row w-screen h-screen flex-wrap">
    <div class="flex flex-col w-2/6 h-full items-center justify-center">
      <div class="w-6/12">
        <input
          class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
          type="text"
          aria-label="Filter projects"
          placeholder="Nhập tên tham gia"
        />
      </div>
      <div class="w-6/12">
        <button
          class="w-full flex items-center justify-center bg-green-700 hover:bg-green-800 text-white h-full px-3 mt-6"
          type="submit"
        >
          Bắt đầu
        </button>
      </div>
    </div>

    <div class="flex w-4/6 h-screen items-center justify-center px-8">
      <video
        width="1024"
        height="720"
        ref="myvideo"
        style="background: gray"
      ></video>
    </div>
  </div>
</template>

<script>
import Peer from "simple-peer";
const peer = new Peer({initiator: true, trickle: false});

export default {
  data: () => ({}),
  mounted() {
    this.initUser();
    this.getMedia();
  },
  methods: {
    initUser() {
      console.log(peer)
      peer.on("signal", function (id) {
        console.log(23232)
        console.log(id);
      });
    },

    async getMedia() {
      let config = { audio: false, video: { width: 1280, height: 720 } };
      try {
        let mediaStream = await navigator.mediaDevices.getUserMedia(config);
        var video = this.$refs.myvideo;
        video.srcObject = mediaStream;
        video.onloadedmetadata = function () {
          video.play();
        };
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>