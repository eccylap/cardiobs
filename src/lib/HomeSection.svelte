<script>
    
    export let heading = "WARNING: NO HEADING SPECIFIED";
    export let headingSize = '2.4rem';
    export let additionaltext1; // first text do be displayed
    export let additionaltext2; // second text to be displayed
    export let imageSource = ' '; // source for supplementary image
    export let infobutton; // text in the pinkish red button
    export let routeTo; // href for the anchor tag which holds the pinkish red button

</script>

<!-- ! IMPORTANT: Images used here in the right part must be 751x741 -->

<div id="containter">
    <div class="left_part">
        <hr>
        <h2 style="font-size: {headingSize};">{heading}</h2>
        <div id="idnent">
            <p>{additionaltext1}</p>
            <p>{additionaltext2}</p>
            {#if infobutton !== ''}
                <a id="button" href={routeTo} class="gap_up little_gap_down">{infobutton} <i style="margin-left:5px;" class="fa fa-angle-right"></i></a>    
            {/if}
        </div>
    </div>
    {#if imageSource !== ' '}
        <div class="right_part">
            <img src={imageSource} alt="">
        </div>
    {/if}
</div>


<style lang="scss">
    @import "../style.scss";

    #button {
        background-color: $soft_button;
        padding: 10px 14px;
        border-radius: 3px;
        display: inline-block;
        margin-top: 20px;
        font-size: 1.1rem;
        color: $light_white;
        font-family: sans-serif;
    }

    #containter {
        display: flex;
        justify-content: space-between;
        align-content: center;
        width: 100%;
        margin: 100px 0vw 50px 15vw;
        height: auto;
    }

    a {
        text-decoration: none;
    }

    #idnent {
        margin-left: 30px
    }

    p {
        @include paragraphtext();
        font-family: "Open Sans", sans-serif;
        color: $text_black;
        text-align: justify;
    }
    
    h2 {
        font-family: "Open Sans", sans-serif;
        font-weight: 600;
        font-size: 2.4rem;
        color: $darker_blue;
    }

    .left_part {
        width: 45%;
        height: auto;
        hr {
            color: $accent_red;
            width: 40%;
            float: left;
        }
    }

    .right_part {
        width: 50%;
        position: relative;
        height: 420px;
        img {
            height: 100%;
        }
    }

    @media only screen and (max-width: 1420px) {
        #containter {
            margin: 50px 15vw;
            height: auto;
        }

        h2 {
            font-size: 1.7rem;
        }
    }

    @media only screen and (max-width: 1320px) {
        #containter {
            flex-direction: column;
            gap: 30px;
            width: auto;
        }

        .left_part {
            width: auto;
        }

        .right_part {
            display: none;
        }
    }

    @media only screen and (max-width: 740px) {
        #idnent {
            margin-left: 0px;
        }

        h2 {
            font-size: 1.5em;
        }

        p {
            font-size: 1em;
        }
    }
    
</style>