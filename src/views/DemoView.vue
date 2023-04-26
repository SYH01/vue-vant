<template>
    <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item icon="home-o">标签 1</van-tabbar-item>
        <van-tabbar-item icon="search">标签 2</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签 3</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签 4</van-tabbar-item>
    </van-tabbar>
    <user-info v-if="showComponent4"></user-info>
</template>


<script>
import UserInfo from '@/components/UserInfo.vue';
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
    setup() {
    const active = ref(0);
    const showComponent4 = ref(false);
    const onChange = (index) =>{ 
        if(index===3){
            showComponent4.value = true;
        }
        else{
            showComponent4.value = false;
            showToast(`标签 ${index+1}`);
        }
    }
    return {
        showComponent4,
        active,
        onChange,
        };
  },
    components: { UserInfo }
};

</script>
