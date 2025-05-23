<template>
    <div class="sidebar">
        <div class="header">
            <p @click="onClickHeader">{{ title }}</p>
        </div>
        <ul>
            <li class="li" v-for="(item, index) in items" :key="index">
                <a :href="'#'+item.navTab">{{ item.navTab }}</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "SideBar",
    props: {
        title: {
            type: String,
            required: true,
        },
        items: {
            type: Array,
            required: true,
        },
    },
    methods: {
        onClickHeader() {
            location.replace("/")
        }
    }
    
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.sidebar {
    height: 100vh; /* 全屏高 */
    width: 150px;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: auto;
    scrollbar-width: none; /* Firefox 隐藏滚动条 */
    -ms-overflow-style: none; /* IE/Edge 隐藏滚动条 */
}

.sidebar::-webkit-scrollbar {
    display: none; /* Chrome/Safari 隐藏滚动条 */
}

@media screen and (max-width: 980px) {
    .sidebar {
        display: none;
    }
}

.header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
}

.header > p {
    font-size: 20px;
    font-weight: bolder;
}

ul {
    flex: 1;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    list-style: none;
}

.li {
    margin: 5px 0;
    line-height: 25px;
    border-radius: 5px;
    text-align: center;
    transition: all 0.2s ease;
}

.li:hover {
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(128, 189, 151, 0.4),
                0 1px 20px rgba(201, 96, 208, 0.3);
    transform: translateY(-2px);
}

.li:active {
    transform: translateY(-1px);
}

.li a {
    color: #333;
    text-decoration: none;
    display: block;
    padding: 5px 10px;
}

</style>
