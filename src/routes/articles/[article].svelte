
<script>
    import { page } from '$app/stores';
    let itemsToDisplay = [];
    
    //Available item types
    // text (heading '', paragraphs[], supplementPhoto '')
    // photos (sources [], heading '', paragraph '')
    
    switch ($page.params.article) {
        case "covid.svelte":
            itemsToDisplay = [];
            itemsToDisplay.push({
                type: 'text',
                heading: 'Ковид',
                paragraphs: ['Прегледите в Кардиологичен Център Бургас са разпределени през голям интервал, осигуряващ възможност за проветряване и дезинфекция на помещенията и апаратурата след всеки преглед, както и избягване засичането на пациентите един с друг.', 'Прегледите в Кардиологичен Център Бургас са разпределени през голям интервал, осигуряващ възможност за проветряване и дезинфекция на помещенията и апаратурата след всеки преглед, както и избягване засичането на пациентите един с друг. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure dolorum corporis odit ea ut fuga minus non omnis amet a harum, temporibus, necessitatibus fugiat, quia aut eaque iste tempore assumenda.'],
                supplementPhoto: '/covid3.png'
            });
            break;
        case "photos.svelte":
            itemsToDisplay = [];
            itemsToDisplay.push({
                type: 'photos',
                heading: 'Снимки',
                paragraph: 'Ето снимки от върховния кабинет',
                sources: ['/clin1.png', '/clin2.png', '/clin3.png']
            });
            break;
        default:
            itemsToDisplay = [];
            itemsToDisplay.push({
                type: 'error',
                heading: 'Опа, такава статия не същестува',
                paragraph: 'Към началото'
            })
            break;
    }
</script>

<div class="sex">
    <div class="center_controller">
        {#each itemsToDisplay as item }
            {#if item.type === 'text'}
                <div class="textbox">
                    <div class="text">
                        <hr>
                        <h2>{item.heading}</h2>
                        {#each item.paragraphs as paragraph}
                            <p>{paragraph}</p>
                        {/each}
                    </div>
                    <img class="supplementImg" src={item.supplementPhoto} alt="">
                </div>
            {:else if item.type === "photos"}
                <div class="photobox">
                    <hr>
                    <h2>{item.heading}</h2>
                    <p>{item.paragraph}</p>
                    <div class="photos">
                        {#each item.sources as src}
                            <img on:click={() => alert('adw')} class="photo" src={src} alt="">
                        {/each}
                    </div>
                </div>
            {:else if item.type === "error"}
                <div class="err">
                    <h2>{item.heading}</h2>
                    <img src="/404.png" alt="">
                    <a href="/">{item.paragraph}</a>
                </div>
            {/if}
        {/each}
    </div>
</div>

<style lang="scss">
    @import "../../style.scss";
    .center_controller {
        margin: 100px 15vw;
        min-height: 45vh;
    }

    hr {
        color: $accent_red;
        display: inline-block;

        width: 20%;
    }

    p {
        font-family: "Open Sans", sans-serif;
        color: $text_black;
        font-weight: 300;
    }

    h2 {
        margin-top: 0px;
        margin-bottom: 30px;
        color: $darker_blue;
        font-size: 2rem;
        font-family: "Open Sans", sans-serif;
    }
    
    .text {
        text-align: justify;
        width: 60%;
        height: 100%;
    }

    .textbox {
        display: flex;
        justify-content: space-between;

        img {
            justify-self: flex-end;
            max-width: 30%;
            max-height: 400px;
        }
    }

    .photos {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 50px;
    }

    .photo {
        border-radius: 15px;
        max-height: 250px;
        cursor: pointer;
    }

    .err {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            display: block;
            width: 300px;
        }

        h2 {
            color: $soft_button;
        }
    }
</style>