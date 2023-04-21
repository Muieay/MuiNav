<template>
    <div>
        <!--    <form target="_blank" method="get" action="https://www.baidu.com/s">
                <input type="text" placeholder="请输入关键词" name="word" class="text" />
                <input type="submit" value="搜索" class="search">
            </form>
            -->
        <div class="box">
            <form class="form" target="_blank" method="get" action="https://bing.com/search">
                <button>
                    <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                        <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <input class="input" placeholder="快捷搜索"  autocomplete="off" name="q" type="text">
                <button class="reset">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchView"
}
</script>

<style scoped>

.box {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
.form button {
    border: none;
    background: none;
    color: #8b8ba7;
}
/* styling of whole input container */
.form {
    --timing: 0.3s;
    --width-of-input: 200px;
    --height-of-input: 40px;
    --border-height: 2px;
    --input-bg: #fff;
    --border-color: #2f2ee9;
    --border-radius: 30px;
    --after-border-radius: 1px;
    position: relative;
    width: var(--width-of-input);
    height: var(--height-of-input);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-inline: 0.8em;
    border-radius: var(--border-radius);
    -webkit-transition: border-radius 0.5s ease;
    transition: border-radius 0.5s ease;
    background: var(--input-bg,#fff);
}
/* styling of Input */
.input {
    font-size: 0.9rem;
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding-inline: 0.5em;
    padding-block: 0.7em;
    border: none;
}
/* styling of animated border */
.form:before {
    content: "";
    position: absolute;
    background: var(--border-color);
    -webkit-transform: scaleX(0);
    -ms-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
    width: 100%;
    height: var(--border-height);
    left: 0;
    bottom: 0;
    border-radius: 1px;
    -webkit-transition: -webkit-transform var(--timing) ease;
    transition: -webkit-transform var(--timing) ease;
    transition: transform var(--timing) ease;
    transition: transform var(--timing) ease, -webkit-transform var(--timing) ease;
}
/* Hover on Input */
.form:focus-within {
    border-radius: var(--after-border-radius);
}

input:focus {
    outline: none;
}
/* here is code of animated border */
.form:focus-within:before {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
}
/* styling of close button */
/* == you can click the close button to remove text == */
.reset {
    border: none;
    background: none;
    opacity: 0;
    visibility: hidden;
}
/* close button shown when typing */
input:not(:-moz-placeholder-shown) ~ .reset {
    opacity: 1;
    visibility: visible;
}
input:not(:-ms-input-placeholder) ~ .reset {
    opacity: 1;
    visibility: visible;
}
input:not(:placeholder-shown) ~ .reset {
    opacity: 1;
    visibility: visible;
}
/* sizing svg icons */
.form svg {
    width: 17px;
    margin-top: 3px;
}
</style>
