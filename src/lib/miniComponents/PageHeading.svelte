<script>
    export let heading;
    export let underHeading;
</script>


<div class="heading">
    <hr>
    <h2>{heading}</h2>
    <p>{underHeading}</p>
</div>

<style lang="scss">
    @import "../../style.scss";

    .heading {
        grid-area: 1 / 2 / span 1 / span 5;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 200px;

        p {
            @include smalltext();
        }

        hr {
            width: 150px;
            color: $accent_red;
        }

        h2 {
            @include nomargpad();
            margin-top: 10px;
            font-size: 3rem;
            color: $darker_blue;
            font-family: "Open Sans", sans-serif;
        }
    }

    @media only screen and (max-width: 1150px) {
        .heading {
            h2 {
            font-size: 2.5rem;
        }
        }
    }

    @media only screen and (max-width: 500px) {
        .heading {
            h2 {
            font-size: 2rem;
        }
        }
    }

    @media only screen and (max-width: 350px) {
        .heading {
            h2 {
            font-size: 1.7rem;

            p {
                font-size: 0.4rem !important;
            }
        }
        }
    }
</style>