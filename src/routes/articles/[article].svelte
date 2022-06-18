
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
        case "privacy.svelte": 
            itemsToDisplay = [];
            itemsToDisplay.push( {
                type: 'heading',
                heading: 'Поверителност на данните (НЕДОВЪРШЕН)'
            },{
                type: 'text',
                heading: 'Определения и важна информация',
                paragraphs: ['ВНИМАНИЕ: ТОЗИ УЕБСАЙТ Е ВСЕ ОЩЕ В ТЕСТОВА ФАЗА. МОЛИМ ДА НЕ ГО ПОЛЗВАТЕ, МОЖЕ ДА ИМА НЕСЪОТВЕТСВИЯ В ИНФОРМАЦИЯТА', 'На тази страница ще откриете информация относно защитата на вашите лични данни, ДОБИТИ ПРЕЗ САЙТА. Имайте предвид, че тази информация и условията за използване на нашия сайт могат да бъдат променяни, за да отразяваме всички изменения на начина, по който обработваме/събираме личните Ви данни, като промените ще бъдат известявани в заглавната страница на сайта. Любезно Ви молим да проверявате периодично за промени и на тази страница.' , 'Ние сме Кардиологичн център Бургас на адрес йбесжпивсйбсибгспбуисйжилср.' , '- Под "Вас/Ви/Вие" имаме предвид потребителите на сайта.', '- Под "Ние/Нас/Ни" имаме предвид Кардиологичен Център Бургас.', '- Споменатите "лични данни" по-нататък в страницата са тези лични данни, които можем да добием през сайта', 'Когато за първи път или след изчистване на локалната памет на браузъра влезете в сайта, Ви се показва поле, което ви уведомява, че трябва да дадете съгласия за функцалността на някои от частите на уебсайта. Когато кликнете върху бутона ще ви се отвори диалогов прозорец, в който да въведете своите предпочитания. Ако желаете да промените предпочитанията си, можете да го направите през връзката в най-долната част на уебсайта като кликнете върху "Настройки за бисквитки"'],
                supplementPhoto: ''
            },{
                type: 'text',
                heading: 'Какви данни обработваме ние',
                paragraphs: ['Когато посетите нашия уебсайт, Ние можем да получим следната инфромация: IP адрес, използвана операционна система, изполван браузър, дата и време на посещението' , 'Освен това този уебсайт запазва две настройки в локалната памет на браузъра ви: "cookie-pref" и "has-answ" (съответно: за предпочитания при бисквитки и за това дали сте отговорили на запитването за бисквитките)', '' , 'Като изключим тези настройки (променливи) и горепосочената информация, която получавама след като посетите сайта, Ние не събираме друга информация (напр. лични данни) чрез сайта. Това не важи, когато записвате час при нас (което не става през сайта) - тогава ще трябва да предоставите имена и номер.'],
                supplementPhoto: ''
            },{
                type: 'text',
                heading: 'Цели и основания на обработване',
                paragraphs: ['Този уебсайт използва вмъкнат Google Maps с цел зареждане местоположението на нашата клиника върху карта (напр. в заглавната страница). С използването на тази услуга от Google ние се съгласяваме с техните условия, които могат да се намерят при връзките в тази страница.', 'Google могат да събират и получават данни от Нас (Кардио Център Бургас) и от Вас (потребителите на този уебсайт), включващи: IP адреси, координати, думи за търсене. Чрез използване на тези услуги, Вие (портебителите на този уебсайт) предоставяте информация, която може да ви идентифицира, и лични данни директно на Google. Тези данни са обект на Условията за Поверителност на Google.', 'Ние от Кардиологичен Център Бургас уважаваме вашето право на поверителност, затова ви предоставяме възможността да изберете дали искате да ползвате вградения Google Maps. За да не губите възможността си да ни намерите, при отказване използването на Google Maps Ви се показва линк към местоположението и точен адрес (ако искате да използате друг GPS доставчик).', 'Данните за посещения на уебсайта биват използвани, за да можем да знаем колко трафик минава през сайта ни.'],
                supplementPhoto: ''
            },{
                type: 'links',
                heading: 'Препратки',
                links: [{
                    text: 'Условия за ползване на Google Maps при имплементиране в сайт',
                    href: 'https://cloud.google.com/maps-platform/terms/'
                }, {
                    text: 'Условия на поверителност на Google',
                    href: 'https://policies.google.com/privacy'
                }
                ],
                
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
            {:else if item.type === "heading"}
                <h1>{item.heading}</h1>
            {:else if item.type === "links"}
                <div class="linkers">
                    <div>
                        <hr>
                        <h2>{item.heading}</h2>
                    </div>
                    <div class="linkage">
                        {#each item.links as link}
                            <a class="links" target="_blank" href={link.href}>{link.text}</a>
                        {/each}
                    </div>
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
        max-width: 150px;
    }

    .links {
        font-size: 1.1rem;
        color: $main_blue;
        display: inline;
        width: auto;
        margin-bottom: 5px;
    }

    .linkers {
        margin-bottom: 50px;
    }

    .linkage {
        display: flex;
        flex-direction: column;
        justify-content: start;
    }

    p {
        font-family: "Open Sans", sans-serif;
        color: hsl(0, 0%, 30%);
        font-weight: 400;
    }

    h1 {
        margin-bottom: 70px;
        color: $darker_blue;
        font-size: 3rem;
        font-family: "Open Sans", sans-serif;
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