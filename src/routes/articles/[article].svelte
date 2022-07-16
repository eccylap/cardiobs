
<script>
    import { page } from '$app/stores';
    import { afterNavigate } from '$app/navigation';
    let itemsToDisplay = [];
    //Available item types
    // text (heading '', paragraphs[], supplementPhoto '')
    // photos (sources [], heading '', paragraph '')
    // heading (heading '')
    // links (links[ {text '', href ''}, ... ])
    afterNavigate(() => {
        switch ($page.params.article) {
            case "photos.svelte":
                itemsToDisplay = [];
                itemsToDisplay.push({
                    type: 'photos',
                    heading: 'Снимки',
                    paragraph: ' ',
                    sources: ['/clin1.png', '/clin2.png', '/clin3.png', '/clin4.png', '/clin5.png', '/clin6.png', '/clin7.png', '/clin8.png', '/clin9.png']
                });
                break;
            case "forus.svelte":
                itemsToDisplay = [];
                itemsToDisplay.push({
                    type: 'text',
                    heading: 'За нас',
                    paragraphs: ['Ние сме екип от кардиолози с дългогодишен опит в диагностицирането и лечението на сърдечно болни, придобит във водещи кардиологични и кардио-хирургични болници. Подходът ни в работата, както и цялостното ни отношение към пациентите, са формирани от съчетанието на спазването на актуалните международни препоръки за подход в конкретната проблематика, нашия професионален опит и лични ни убеждения. ', 'Кардиологичен Център Бургас е оборудван с много висок клас апаратура, подбрана взискателно и безкомпромисно.  Това ни прави напълно уверени и спокойни, че сме осигурили широко поле за действие, в което да приложим нашите знания, умения и професионален опит. Наличното оборудване ни дава свободата и сигурността да реагираме неотложно и адекватно да покрием целия кардиологичен спектър в амбулаторията.'],
                    supplementPhoto: '/logosupl.png'
                });
                break;
            case "privacy.svelte": 
                itemsToDisplay = [];
                itemsToDisplay.push( {
                    type: 'heading',
                    heading: 'Поверителност на данните'
                },{
                    type: 'text',
                    heading: 'Определения и важна информация',
                    paragraphs: ['На тази страница ще откриете информация относно защитата на вашите лични данни, ДОБИТИ ПРЕЗ САЙТА. Имайте предвид, че тази информация и условията за използване на нашия сайт могат да бъдат променяни, за да отразяваме всички изменения на начина, по който обработваме/събираме личните Ви данни, като промените ще бъдат известявани в заглавната страница на сайта. Любезно Ви молим да проверявате периодично за промени и на тази страница.' , 'Ние сме Кардиологичн център Бургас на адрес Бургас, ж.к. Перла, Бл. 1, вх. 1.' , '- Под "Вас/Ви/Вие" имаме предвид потребителите на сайта.', '- Под "Ние/Нас/Ни" имаме предвид Кардиологичен Център Бургас.', '- Споменатите "лични данни" по-нататък в страницата са тези лични данни, които можем да добием през сайта', 'Когато за първи път или след изчистване на локалната памет на браузъра влезете в сайта, Ви се показва поле, което ви уведомява, че трябва да дадете съгласия за функцалността на някои от частите на уебсайта. Когато кликнете върху бутона ще ви се отвори диалогов прозорец, в който да въведете своите предпочитания. Ако желаете да промените предпочитанията си, можете да го направите през връзката в най-долната част на уебсайта като кликнете върху "Настройки за бисквитки"'],
                    supplementPhoto: ''
                },{
                    type: 'text',
                    heading: 'Какви данни обработваме ние',
                    paragraphs: ['Когато посетите нашия уебсайт, Ние можем да получим следната инфромация: IP адрес, използвана операционна система, изполван браузър, дата и време на посещението' , 'Освен това този уебсайт запазва две настройки в локалната памет на браузъра ви: "cookie-pref" и "has-answ" (съответно: за предпочитания при бисквитки и за това дали сте отговорили на запитването за бисквитките)', '' , 'Като изключим тези настройки (променливи) и горепосочената информация, която получаваме след като посетите сайта, Ние не събираме друга информация (напр. лични данни) чрез сайта. Това не важи, когато записвате час при нас (което не става през сайта) - тогава ще трябва да предоставите имена и номер.'],
                    supplementPhoto: ''
                },{
                    type: 'text',
                    heading: 'Цели и основания на обработване',
                    paragraphs: ['Този уебсайт използва вмъкнат Google Maps с цел зареждане местоположението на нашата клиника върху карта (напр. в заглавната страница). С използването на тази услуга от Google ние се съгласяваме с техните условия, които могат да се намерят при връзките в тази страница.', 'Google могат да събират и получават данни от Нас (Кардио Център Бургас) и от Вас (потребителите на този уебсайт), включващи: IP адреси, координати, думи за търсене. Чрез използване на тези услуги, Вие (портебителите на този уебсайт) предоставяте информация, която може да ви идентифицира, и лични данни директно на Google. Тези данни са обект на Условията за Поверителност на Google.', 'Ние от Кардиологичен Център Бургас уважаваме вашето право на поверителност, затова ви предоставяме възможността да изберете дали искате да ползвате вградения Google Maps. За да не губите възможността си да ни намерите, при отказване използването на Google Maps Ви се показва линк към местоположението и точен адрес (ако искате да използате друг GPS доставчик).', 'Данните за посещения на уебсайта биват използвани, за да можем да знаем колко трафик минава през сайта ни.'],
                    supplementPhoto: ''
                },{
                    type: 'text',
                    heading: 'Как да променя избора си?',
                    paragraphs: ['Най-долу на всяка страница има текст "Настройки за бисквитки". При натискане ще Ви се отвори диалогов прозорец, в който можете да изберете кои бисквитки искате.'],
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
    });
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
                    <img class="supplementImg" src={item.supplementPhoto} alt=" ">
                </div>
            {:else if item.type === "photos"}
                <div class="photobox">
                    <hr>
                    <h2>{item.heading}</h2>
                    <p>{item.paragraph}</p>
                    <div class="photos">
                        {#each item.sources as src}
                            <!-- on:click={() => alert('adw')}-->
                            <img class="photo" src={src} alt="">
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
                    <hr>
                    <h2>{item.heading}</h2>
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
        text-align: left;
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
    }

    .supplementImg {
        justify-self: flex-end;
        width: 30%;
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

    @media only screen and (max-width: 520px) {
        .textbox {
            img {
                display: none;
            }
        }

        .photo {
            max-height: auto;
            max-width: 80vw;
        }

        .text {
            width: 100%;
            font-size: 0.9rem;
            text-align: left;

            h2 {
                font-size: 1.5rem;
            }
        }

        .linkers {
            h2 {
                font-size: 1.5rem;
            }
        }

        h1 {
            font-size: 1.6rem;
            margin-bottom: 20px;
        }

        .links {
            font-size: 0.8rem;
            margin-bottom: 15px;
        }

        .center_controller {
            margin: 40px 6vw;
        }
        
    }
</style>