<script>
    export let marginalTop = "100px";
    import {showModal} from "../stores/cookie-consent";

    function openModal() {
        $showModal = true;
    }
</script>

<div id="iframe_rep" style="margin-top: {marginalTop};" title="empty" src="" frameborder="0"><span>Изключили сте бисквитките за карта. Може да ги включите обратно <u on:click={openModal}>тук</u></span> 
    <p>Вместо да включвате картата може да отворите този линк тук:</p> <a target="about:blank" href="https://g.page/CardiologicalCenter?share">Към Карта</a>
</div>


<style lang="scss">
    @import "../style.scss";

    #iframe_rep {
        width: 100vw;
        height: 40vh;
        background-color: whitesmoke;
        display: flex;
        gap: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: sans-serif;
        color: $gray;

        u {
            cursor: pointer;
            color: $accent_red;
        }
    }
</style>