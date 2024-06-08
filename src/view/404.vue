<template>
    <div class="container">
        <p class="small">扫描二维码关注公众号</p>
        <img @dblclick="checkLogin"
             src="https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=258&__biz=MzkwNjU0ODY0Mw==&mid=2247483757&idx=1&sn=9dd0988cd8972a42b37f52998dfaef15&send_time="
             alt="扫描二维码关注公众号" class="image">
        <h1 class="heading">404</h1>
        <p class="message">对不起，您请求的页面不存在。</p>
        <a href="/" class="button">返回首页</a>
    </div>
</template>

<script>
export default {
    name: "404",
    data() {
        return {}
    },
    methods: {
        checkLogin() {
            let userInput = prompt("Please enter your name:");
            let pwdInput = prompt("Please enter your password:");
            if (userInput && pwdInput) {
                sessionStorage.setItem('check', userInput + pwdInput)
                this.$router.replace('/edit')
            }
        }
    }
}
</script>

<style scoped>
.container {
    width: 90%;
    height: 80vh;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.image {
    width: 200px;
}

.small {
    font-size: 12px;
    margin: 3px;
    color: #8b8ba7;
}

.heading {
    font-size: 30px;
    font-weight: bold;
    margin: 10px;
}

.message {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 10px;
}

.button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: #fff;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.button:hover {
    background-color: #45a049;
}
</style>
