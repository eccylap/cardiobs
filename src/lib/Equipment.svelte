<script>
    export let imageSource;
</script>

    <div class="equipment">
        <img src={imageSource} alt="">
        <div id="text">
            <hr>
            <h2>Апаратура</h2>
            <p>Кардиологичен Център Бургас е оборудван с много висок клас апаратура, подбрана взискателно и безкомпромисно. В сайта има информация и снимки за апарати, уреди и пособия, с които разполагаме.</p>
            <a id="button" href="/">Разгледай</a>
        </div>
    </div>

<style lang="scss">
    @import "../style.scss";
    .equipment {
        display: grid;
        grid-template: 300px / 1fr 3fr 1fr;
    }

    #button {
        @include noanchor();
        background-color: $soft_button;
        padding: 10px 14px;
        border-radius: 3px;
        display: inline-block;
        margin-top: 10px;
        font-size: 1.1rem;
        color: $light_white;
        font-family: sans-serif;
    }

    #text {
        padding: 10px 0px;
    }

    img {
        height: 100%;
    }

    p {
        @include paragraphtext();
        font-family: "Open Sans", sans-serif;
        color: $text_black;
        text-align: justify;
        font-size: 1vw;
    }

    h2 {
        font-family: "Open Sans", sans-serif;
        font-weight: 600;
        font-size: 2.4rem;
        color: $darker_blue;
    }

    hr {
        color: $accent_red;
        width: 30%;
        margin-top: 20px;
        float: left;
    }

    @media only screen and (max-width: 1600px) {
        hr {
            margin-top: 15px;
            width: 35%;
        }
        h2 {
            font-size: 2rem;
        }
        p {
            font-size: 1rem;
        }
    }

    @media only screen and (max-width: 1600px) {
        img {
            display: none;
        }

        #text {
            grid-area: 1 / 1 / span 1 / span 3;
        }
    }

    @media only screen and (max-width: 490px) {
        .equipment {
            grid-template: 400px / 1fr;
        }
    }
</style>