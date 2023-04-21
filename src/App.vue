<template>
    <div id="app">
        <SearchView/>
        <HomeView :nav-list="navList"/>
    </div>
</template>

<script>
import HomeView from "@/components/HomeView";
import SearchView from "@/components/SearchView";
import yaml from "js-yaml";

export default {
    name: 'App',
    components: {
        HomeView,
        SearchView
    },
    data(){
        return{
            navList:[]
        }
    },
    created() {
        this.created()
    },
    methods:{
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
        
            this.navList=data.nav
        },
    }
}
</script>

<style>
body{
    background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
}
</style>
