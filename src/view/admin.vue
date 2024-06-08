<template>
    <div style="display: flex;flex-direction: column;margin: 0 auto;width: 90%;justify-content: center;">
        <input style="margin-top: 20px;height: 25px" v-model.number="shift" placeholder="shift">
        <input style="margin-top: 20px;height: 25px" v-model:value.trim="value" placeholder="content"
               @keyup.enter="caesarEncrypt">
        <br>
        <textarea>{{text}}</textarea>
    </div>
</template>

<script>
export default {
    name: "admin",
    data() {
        return {
            value: '',
            shift: 1,
            text: ''
        }
    },
    methods: {
        caesarEncrypt() {
            this.text = this.value.split('').map(char => {
                let code = char.charCodeAt(0);
                if (code >= 65 && code <= 90) {
                    return String.fromCharCode(((code - 65 + this.shift) % 26) + 65);
                } else if (code >= 97 && code <= 122) {
                    return String.fromCharCode(((code - 97 + this.shift) % 26) + 97);
                }
                return char;
            }).join('');
        }
    }
}
</script>

<style scoped>

</style>
