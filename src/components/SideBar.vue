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
    height: 100%;
    width: 150px;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 15px;
    overflow: hidden;
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
    margin-left: 20px;
    margin-bottom: 15px;
}

.header > p {
    font-size: 20px;
    font-weight: bolder;
    /*box-shadow: 0 4px 8px 0 rgb(128, 189, 151), 0 1px 20px 0 rgb(201, 96, 208);*/
}

ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    list-style: none;
}

.li {
    margin: 5px;
    line-height: 25px;
    border-radius: 5px;
    text-align: center;
}

.li:hover {
    background-color: #64fae6;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 4px 8px 0 rgb(128, 189, 151), 0 1px 20px 0 rgb(201, 96, 208);
    transform: translateY(-2px);
}

.li:active {
    transform: translateY(-1px);
}

.li a {
    color: #333;
    text-decoration: none;
}

</style>
