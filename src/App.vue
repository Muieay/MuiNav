<template>
    <div id="app">
        <div class="box">
            <div class="lef">
                <SideBar :title="title" :items="navList"/>
            </div>
            <div class="rig">
                <SearchView/>
                <HomeView :nav-list="navList"/>
            </div>
        </div>
    
    
    </div>
</template>

<script>
import HomeView from "@/components/HomeView";
import SearchView from "@/components/SearchView";
import SideBar from "@/components/SideBar";
import yaml from "js-yaml";

export default {
    name: 'App',
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

<style>
* {
    margin: 0;
    padding: 0;
}

body {
    background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
    /*禁止文本选中*/
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none;
}

.box {
    display: flex;
}
@media screen and (max-width: 980px) {
    .lef {
        display: none;
    }
}
.lef {
    height: 100vh;
    flex: 1;
}

.rig {
    margin-left: 10px;
    flex: 8;
}

</style>
