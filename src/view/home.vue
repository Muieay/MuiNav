<template>
    <div class="box">
        <div class="lef">
            <SideBar :title="title" :items="navList"/>
        </div>
        <div class="rig">
            <SearchView/>
            <HomeView :nav-list="navList"/>
        </div>
    </div>
</template>

<script>
import HomeView from "@/components/HomeView";
import SearchView from "@/components/SearchView";
import SideBar from "@/components/SideBar";
import yaml from "js-yaml";

export default {
    name: "Home",
    components: {
        HomeView,
        SearchView,
        SideBar
    },
    data() {
        return {
            navList: [],
            title: "Mui 导航",
        }
    },
    created() {
        this.created()
        console.log('关注：https://github.com/Muieay')
    },
    methods: {
        // 读取文件
        readFile(filePath) {
            // 创建一个新的xhr对象
            let xhr = null
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest()
            } else {
                // eslint-disable-next-line
                xhr = new ActiveXObject('Microsoft.XMLHTTP')
            }
            const okStatus = document.location.protocol === 'file' ? 0 : 200
            xhr.open('GET', filePath, false)
            xhr.overrideMimeType('text/html;charset=utf-8')
            xhr.send(null)
            return xhr.status === okStatus ? xhr.responseText : null
        },
        // 转换格式
        created() {
            let ymlData = this.readFile('./data.yml')
            // console.log(ymlData)
            
            let data = yaml.load(ymlData)
            this.navList = data.nav
        },
    }
}
</script>

<style scoped>

</style>
