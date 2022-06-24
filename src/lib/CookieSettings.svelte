<script>
    import {nonTrackingConsent, showModal, hasAnswered} from "../stores/cookie-consent";
    let nonTrackConsent = false;

    function handleSubmit() {
        if (nonTrackConsent) {
            $nonTrackingConsent = 'true';
        } else {
            $nonTrackingConsent = 'false';
        }
        $showModal = false;
        $hasAnswered = true;
    }
</script>

{#if $showModal === true}
    <div class="backdrop">
        <div class="modal">
            <h2>За какво се използват бисквитките?</h2>
            <p>Бисквитките в този уебсайт се използват за функционалност (напр. карта вградена от Google Maps). Този уебсайт не събира ваши дани като имейли, пароли и т.н.</p>
            <p><strong>Ваше неприкосновено право</strong> е възможността да се откажете от каквито и да е бисквитки, които не са необходими да функционалността на сайта.</p>
            <a href="/articles/privacy.svelte" target="_blank">Повече информация</a> <br><br>
            <form on:submit|preventDefault={handleSubmit}>
                <input type="checkbox" bind:checked={nonTrackConsent}>Бисквитки от Google Maps <br>
                <button type="submit">Приеми избраните бисквитки</button>
            </form>
        </div>
    </div>    
{/if}



<style lang="scss">
    @import "../style.scss";

    // #denied {
    //     background-color: $soft_text_white;
    //     color: $bg_black;
    //     padding: 5px;
    //     border: none;
    //     margin-top: 20px;
    //     font-size: 0.9rem;
    //     display: inline-block;
    //     cursor: pointer;

    //     &:hover {
    //         background-color: $softer_text_white;
    //     }
    // }
    .backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
        z-index: 1;
    }

    h2 {
        @include nomargpad();
        font-size: 1.4rem;
        color: hsl(212, 50%, 37%);
    }

    p {
        font-style: italic;
    }

    .modal {
        font-family: "Open Sans", sans-serif;
        padding: 10px;
        border-radius: 10px;
        width: auto;
        max-width: 600px;
        padding: 30px 50px;
        margin: 10% auto;
        background-color: rgb(14, 12, 13);
        color: aliceblue;
        z-index: 2;
    }
    button {
        margin-top: 20px;
        padding: 10px;
        border: none;
        color: whitesmoke;
        font-weight: 600;
        font-size: 1rem;
        background-color: $soft_button;
        cursor: pointer;
    }

    button:hover {
        background-color: $soft_button_hover;
    }
</style>