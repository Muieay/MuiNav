<template>
    <div>
        <div v-for="item in navList">
            <h4 class="text-gray" style="display: inline-block;">
                <i class="icon-io-tag" style="margin-right: 27px;" :id="item.navTab"></i>
                {{item.navTab}}
            </h4>
            <div class="row">
                <div class="card" v-for="item2 in item.tabList" @click="goTo(item2.url)" >
                    <img class="img" :src="item2.img">
                    <div class="textBox">
                        <h3>{{item2.title}}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeView",
    props:["navList"],
    created() {
    },
    methods: {
        goTo(url){
            window.open(url)
        }
    }
}
</script>

<style scoped>

.text-gray {
    font-size: 20px;
    color: #555;
    margin-top: 20px;
}
.row{
    display: flex;
    flex-wrap: wrap;
}
.card {
    width: 100%;
    max-width: 210px;
    height: 65px;
    /*padding-top: 10px;*/
    margin: 13px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 4px 8px 0 rgba(142, 140, 140, 0.2), 0 1px 20px 0 rgba(167, 164, 164, 0.19);
    border-radius: 10px;
    display: flex;
    align-items: center;
}
@media screen and (max-width: 480px) {
    .card {
        max-width: 370px;
    }
}

.card:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0 4px 8px 0 rgb(128, 189, 151), 0 1px 20px 0 rgb(201, 96, 208);
}

.img {
    width: 50px;
    height: 50px;
    margin-left: 10px;
    border-radius: 10px;
    background: linear-gradient(#d7cfcf, #9198e5);
}

.card:hover > .img {
    transition: 0.5s ease-in-out;
    background: linear-gradient(#9198e5, #64fae6);
}

.textBox {
    width: calc(100% - 90px);
    margin-left: 15px;
    color: black;
    overflow: hidden;
    display: flex;
    align-items: center;
}
</style>
