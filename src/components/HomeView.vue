<template>
    <div>
        <div v-for="(item, index1) in navList" :key="index1">
            <h4 class="text-gray" style="display: inline-block;">
                <i class="icon-io-tag" style="margin-right: 27px;" :id="item.navTab"></i>
                {{ item.navTab }}
            </h4>
            <div class="row">
                <div class="card" v-for="(item2, index2) in item.tabList" :key="index2" @click="goTo(item2.url)"
                    @mouseenter="hoverIndex = `${index1}-${index2}`" @mouseleave="hoverIndex = null">
                    <img class="img" :src="item2.img" />
                    <div class="textBox">
                        <h3 class="title-text">{{ item2.title }}</h3>
                    </div>

                    <!-- Tooltip -->
                    <div class="tooltip"  v-if="item2.desc && item2.desc.length > 2 && hoverIndex === `${index1}-${index2}`">
                        {{ item2.desc }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "HomeView",
    props: ["navList"],
    created() {
    },
    data() {
        return {
            hoverIndex: null
        };
    },
    methods: {
        goTo(url) {
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

.row {
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
    background: linear-gradient(#ebf3cc, #b2b7ee);
}

.card:hover>.img {
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

.title-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    margin: 0;
    padding: 0;
    width: 100%;
}

.tooltip {
    position: absolute;
    top: 75px;
    /* 距离 card 底部 */
    left: 0;
    width: max-content;
    max-width: 200px;
    background-color: rgba(10, 10, 1, 0.5);
    color: #fff;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 14px;
    z-index: 999;
    white-space: normal;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.2s ease-in-out;
    pointer-events: none;
    overflow: hidden;
}


/* 动画 */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(4px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
