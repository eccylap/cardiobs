<script>
    import {fade} from "svelte/transition"

    export let showBanner;
</script>

{#if showBanner}
    <div transition:fade id="cookieConsent">
        <span>Този уебсайт използва бисквитки с цел подобряване използаемостта му.</span> <br>
        <a href="/articles/privacy.svelte">Още информация</a> 
        <div class="flex_cont">
            <button on:click class="cookieConsentOK">Настройки</button>
        </div>
    </div>
{/if}

<style lang="scss">
    @import "../style.scss";
    #cookieConsent {
        background-color: $text_black;
        min-height: 26px;
        width: 300px;
        font-size: 14px;
        color: #ccc;
        line-height: 26px;
        padding: 30px;
        font-family: "Open Sans",sans-serif;
        position: fixed;
        bottom: 10px;
        right: 10px;
        display: block;
        z-index: 99;

        a {
            color: #4B8EE7;
            text-decoration: none;
            display: inline;
        }
    }
    .flex_cont {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .cookieConsentOK {
        background-color: $soft_button;
        color: #000;
        display: inline-block;
        border-radius: 1px;
        padding: 15px 30px;
        border: none;
        cursor: pointer;
        width: 100%;

        &:hover {
            background-color: $soft_button_hover;
        }
    }
    
    // .cookieConsentNotOK {
    //     background-color: $soft_text_white;
    //     color: #000;
    //     display: inline-block;
    //     border-radius: 1px;
    //     padding: 15px 30px;
    //     border: none;
    //     cursor: pointer;

    //     &:hover {
    //         background-color: $softer_text_white;
    //     }
    // }
/*Cookie Consent End*/
</style>