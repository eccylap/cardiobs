<script>
    import {nonTrackingConsent, showModal, hasAnswered} from "../stores/cookie-consent";
    import { fade } from "svelte/transition"
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
    <div class="backdrop" transition:fade={{duration: 150}}>
        <div class="modal">
            <h2>За какво се използват бисквитките?</h2>
            <p>Бисквитките в този уебсайт се използват за функционалност (напр. карта, вградена от Google Maps). Този уебсайт не събира Ваши лични дани като имейли и пароли.</p>
            <p><strong>Ваше неприкосновено право</strong> е възможността да се откажете от каквито и да е бисквитки, които не са необходими за функционалността на сайта.</p>
            <p>За да промените избора си по-късно, цъкнете върху "Настройки за бисквитки" най-долу на страницата.</p>
            <a href="/articles/privacy.svelte" target="_blank">Повече информация</a> <br><br>
            <form on:submit|preventDefault={handleSubmit}>
                <label class="switch" for="googleConsent">
                    <input id="googleConsent" type="checkbox" bind:checked={nonTrackConsent}>
                    <span class="slider round"></span>
                </label>Бисквитки от Google Maps <br>
                <button type="submit">Приеми избраните бисквитки</button>
            </form>
        </div>
    </div>    
{/if}



<style lang="scss">
    @import "../style.scss";

    .switch {
        position: relative;
        display: inline-block;
        width: 45px;
        height: 23px;
        margin-right: 5px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 19px;
        width: 19px;
        top: 2px;
        left: 2px;
        background-color: $bg_black;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: $accent_red;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px $accent_red;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(22px);
        -ms-transform: translateX(22px);
        transform: translateX(22px);
    }
    
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

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