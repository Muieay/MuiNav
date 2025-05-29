<!-- Home.vue -->
<template>
    <div class="box">
        <div class="lef">
            <SideBar :title="title" :items="navList" />
        </div>
        <div class="rig">
            <SearchView @search="handleSearch" />
            <HomeView :nav-list="filteredNavList" />
        </div>
    </div>
</template>

<script>
import HomeView from "@/components/HomeView"
import SearchView from "@/components/SearchView"
import SideBar from "@/components/SideBar"
import yaml from "js-yaml"

export default {
    name: "Home",
    components: { HomeView, SearchView, SideBar },
    data() {
        return {
            navList: [],
            filteredNavList: [],
            title: "Mui 导航",
        }
    },
    created() {
        this.loadData()
        console.log("✅关注我：https://github.com/Muieay ")
    },
    methods: {
        readFile(filePath) {
            let xhr = new XMLHttpRequest()
            const okStatus = document.location.protocol === 'file:' ? 0 : 200
            xhr.open('GET', filePath, false)
            xhr.overrideMimeType('text/html;charset=utf-8')
            xhr.send(null)
            return xhr.status === okStatus ? xhr.responseText : null
        },
        async loadData() {
            try {
                const [ymlData, ymlData2, ymlData3] = await Promise.all([
                    fetch('/data.yml').then(res => res.text()),
                    fetch('/edge.yml').then(res => res.text()),
                    fetch('/google.yml').then(res => res.text())
                ]);
                const data = yaml.load(ymlData);
                const data2 = yaml.load(ymlData2);
                const data3 = yaml.load(ymlData3);
                this.navList = [...data.nav, ...data2.nav, ...data3.nav];
                this.filteredNavList = this.navList;
            } catch (error) {
                console.error('加载 YAML 文件失败:', error);
            }
        },
        handleSearch(keyword) {
            if (!keyword) {
                this.filteredNavList = this.navList
                return
            }

            const lowerKeyword = keyword.toLowerCase()

            const filtered = this.navList.map(group => {
                const matchedTabs = group.tabList.filter(item => {
                    const title = item.title?.toLowerCase() || ''
                    const desc = item.desc?.toLowerCase() || ''
                    const navTab = group.navTab?.toLowerCase() || ''

                    return title.includes(lowerKeyword) ||
                        desc.includes(lowerKeyword) ||
                        navTab.includes(lowerKeyword)
                })

                return matchedTabs.length > 0
                    ? { ...group, tabList: matchedTabs }
                    : null
            }).filter(Boolean)

            if (filtered.length === 0) {
                const encodedQuery = encodeURIComponent(keyword)
                window.open(`https://www.bing.com/search?q=${encodedQuery}`, '_blank')
                return
            }

            this.filteredNavList = filtered
        }
    }
}
</script>


<style scoped></style>
