<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {};
    },
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
