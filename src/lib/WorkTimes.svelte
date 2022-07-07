<div class="services">
    <div class="centering2">
        <div>
            <hr>
            <h2>Работно време</h2>
        </div>
    </div>

    <div class="grid">
        <div class="left">
            <ul>
                <li>Понеделник</li>
                <li>Вторник</li>
                <li>Сряда</li>
                <li>Четвъртък</li>
                <li>Петък</li>    
                <li>Събота</li>    
                <li>Неделя</li>    
            </ul>
        </div>
        <div class="right">
            <ul>
                <li>8:00 - 20:00</li>
                <li>8:00 - 20:00</li>
                <li>8:00 - 20:00</li>
                <li>8:00 - 20:00</li>
                <li>8:00 - 20:00</li>
                <li>8:00 - 20:00</li>
                <li>8:00 - 20:00</li>
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

    .centering2 {
        display: flex;
        justify-content: center;
    }

    .grid {
        display: grid;
        grid-template: 1fr / 30px 1fr  1fr 30px;
        gap: 20px;
        border-radius: 15px;
    }

    .left {
        grid-area: 1 / 2 / span 1 / span 1;
        padding: 0px 40px;
        text-align: right;
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
            color: hsl(218, 67%, 98%);
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
        }
    }

    .right {
        grid-area: 1 / 3 / span 1 / span 1;
        padding: 0px 40px;
    }

    hr {
        width: 10rem;
        display: block;
        color: $accent_red;
    }

    h2 {
        font-size: 1.8rem;
        color: $darker_blue;
        text-align: center;
    }

    @media only screen and (max-width: 1350px) {
        .grid {
            gap: 0px;
        }
    }

    @media only screen and (max-width: 720px) {

        .grid {
            grid-template: 1fr / 1fr  1fr;
        }

        .left {
            padding: 0px 10px;
            grid-area: 1 / 1 / span 1 / span 1;
        }

        .right {
            padding: 0px 10px;
            grid-area: 1 / 2 / span 1 / span 1;
        }

        h2 {
            font-size: 1.6rem;
            margin: 10px;
        }
        
        li {
            font-size: 1rem;
        }
    }
</style>