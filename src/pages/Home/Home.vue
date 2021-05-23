<template>
  <div class="text-center bg-green-600 h-screen flex flex-col items-center">
    <div class="text-white text-4xl font-bold mt-10">Online - Meeting</div>
    <div class="py-10 w-1/2 xs:w-full bg-white mt-8 flex flex-col pl-8 items-start">
      <div class="pb-6 text-2xl font-bold">Bắt đầu cuộc họp</div>
      <div class="flex flex-row w-full">
        <div class="w-3/4">
          <input v-model="roomName" class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" aria-label="Filter projects" placeholder="Nhập tên phòng" />
        </div>
        <div class="pl-8">
          <button
            class="w-full flex items-center justify-center rounded-md bg-green-700 hover:bg-green-800 text-white h-full px-3"
            type="submit"
            @click="start()"
            :disabled="!roomName"
          >
            Bắt đầu
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: () =>({
    roomName: null
  }),
  methods: {
    start(){
      if(this.roomName){
        this.$router.push(`/meeting/${this.roomName}`)
      }
    }
  }
};
</script>

<style>
</style>