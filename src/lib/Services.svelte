<script>

</script>

<div class="services">
    <div>
        <hr>
        <h2>Услуги</h2>
    </div>

    <div class="grid">
        <div class="left">
            <ul>
                <li>Амбулаторни прегледи</li>
                <li>Прегледи на ЕКГ</li>
                <li>Прегледи с Работна ЕКГ проба, определяща коронарен резерв и функционален капацитет</li>
                <li>Прегледи с Холтер ЕКГ 24-48 часов</li>
                <li>Прегледи с Холтер ЕКГ за дългосрочно, самостоятелно ползване и възможност за дистанционно разчитане на резултатите</li>    
            </ul>
        </div>
        <div class="right">
            <ul>
                <li>Амбулаторни прегледи</li>
                <li>Прегледи на ЕКГ</li>
                <li>Прегледи с Работна ЕКГ проба, определяща коронарен резерв и функционален капацитет</li>
                <li>Прегледи с Холтер ЕКГ 24-48 часов</li>
                <li>Прегледи с Холтер ЕКГ за дългосрочно, самостоятелно ползване и възможност за дистанционно разчитане на резултатите</li>    
            </ul>
        </div>
    </div>
</div>

<style lang="scss">
    @import "../style.scss";
    .services {
        font-family: "Open Sans", sans-serif;
        padding-top: 1px;
    }

    .grid {
        display: grid;
        grid-template: 1fr / 30px 1fr  1fr 30px;
        gap: 20px;
        border-radius: 15px;
        background-color: hsl(218, 67%, 98%);
        box-shadow: 2px 2px 3px $gray;
        margin-bottom: 40px;
    }

    .left {
        grid-area: 1 / 2 / span 1 / span 1;
        padding: 30px 40px;
        border-right-color: $gray;
        border-right-style: solid;
        border-right-width: 1px;
    }

    ul {
        font-family: "Open Sans", sans-serif;
        font-weight: 600;
        color: $text_black_soft;
        list-style: none;
        padding-left: 0px;
    }

    li {
        font-size: 1.1rem;
        &::before {
            content: "\2022";
            color: $accent_red;
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
        }
    }

    .right {
        grid-area: 1 / 3 / span 1 / span 1;
        padding: 30px 40px;
    }

    hr {
        width: 12rem;
        display: block;
        margin: 40px 00px 0px 40px;
        color: $darker_blue;
    }

    h2 {
        font-size: 2.5rem;
        margin: 10px 0px 30px 50px;
        color: $darker_blue;
    }

    @media only screen and (max-width: 1350px) {
        .grid {
            grid: 1fr 1fr / 1fr;
            gap: 0px;
        }

        .left {
            grid-area: 1 / 1 / span 1 / span 1;
            border: none;
            padding: 20px 40px 0px 40px;
        }

        .right {
            grid-area: 2 / 1 / span 1 / span 1;
            padding: 0px 40px;
        }
    }

    @media only screen and (max-width: 720px) {
        .grid {
            grid: 1fr 1fr / 1fr;
            gap: 0px;
        }

        hr {
            margin: 0;
        }

        h2 {
            font-size: 2rem;
            margin: 10px;
        }
        
        li {
            font-size: 1rem;
        }
    }
</style>