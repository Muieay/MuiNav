<template>
    <div>
        <YamlEditor v-model="ymlData"></YamlEditor>
        <button class="button" @click="setGithubValue()">保存</button>
    </div>
</template>

<script>
import YamlEditor from "@/components/YamlEditor";
import {caesarDecrypt} from '@/utils/GithubUtil'
const env = process.env;
const myHeaders = new Headers();
const tt = caesarDecrypt(`${env.VUE_APP_TOKEN}`,`${env.VUE_APP_KEY}`)
myHeaders.append("Authorization", `token ${tt}`);
export default {
    name: 'Edit',
    components: {
        YamlEditor,
    },
    data() {
        return {
            ymlData: '',
            sha: '',
            content: ''
        }
    },
    created() {
        this.created()
    },
    methods: {
        // 转换格式
        created() {
            this.getGithubValue()
        },
        getGithubValue() {
            let requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            
            fetch(`https://api.github.com/repos/${env.VUE_APP_USER}/${env.VUE_APP_REPO}/contents/public/data.yml`, requestOptions)
                 .then(response => response.text())
                 .then(result => {
                     // 获取文件信息
                     const parseResult = JSON.parse(result);
                     // SHA 标识
                     this.sha = parseResult.sha;
                     // 将获得的base64内容解码
                     let text1 = new TextDecoder().decode(this.base64ToBytes(parseResult.content));
                     console.log(text1);
                     this.ymlData = text1
                 })
                 .catch(error => alert(error));
        },
        setGithubValue() {
            // 内容转base64
            const text2 = this.bytesToBase64(new TextEncoder().encode(this.ymlData));
            let raw = JSON.stringify({
                "message": "更新",
                "content": text2,
                "sha": this.sha
            });
            let requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            fetch(`https://api.github.com/repos/${env.VUE_APP_USER}/${env.VUE_APP_REPO}/contents/public/data.yml`, requestOptions)
                 .then(response => response.text())
                 .then(result => {
                     // SHA 标识每次更新都得重新获取
                     const parseResult = JSON.parse(result);
                     this.sha = parseResult.content.sha;
                     alert('更新成功！')
                 })
                 .catch(error => alert(error));
        },
        // 解码
        base64ToBytes(base64) {
            const binString = atob(base64);
            return Uint8Array.from(binString, (m) => m.codePointAt(0));
        },
        // 编码
        bytesToBase64(bytes) {
            const binString = Array.from(bytes, (byte) =>
                 String.fromCodePoint(byte),
            ).join("");
            return btoa(binString);
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

body {
    background-repeat: no-repeat;
    background-attachment: fixed;
    /*禁止文本选中*/
    -webkit-user-select: none;
    /* Safari */
    -moz-user-select: none;
    /* Firefox */
    -ms-user-select: none;
    /* IE10+/Edge */
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

/* inspired form gumroad website */
.button {
    display: block;
    margin: 10px auto;
    --bg: #000;
    --hover-bg: #ff90e8;
    --hover-text: #000;
    color: #fff;
    cursor: pointer;
    border: 1px solid var(--bg);
    border-radius: 4px;
    padding: 0.8em 2em;
    background: var(--bg);
    transition: 0.2s;
}

.button:hover {
    color: var(--hover-text);
    transform: translate(-0.25rem, -0.25rem);
    background: var(--hover-bg);
    box-shadow: 0.25rem 0.25rem var(--bg);
}

.button:active {
    transform: translate(0);
    box-shadow: none;
}
</style>
