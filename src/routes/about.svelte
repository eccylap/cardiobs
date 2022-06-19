<script>

</script>

<div class="grid">
    <div class="heading">
        <hr>
        <h2>Екип</h2>
        <p>Ние (аз) сме превъзходни лекари</p>
    </div>
    <img  id="photo1" class="photo" src="istinskidoktor.png" alt="">
    <img  id="photo2" class="photo" src="legitdoc2.png" alt="">
    <img  id="photo3" class="photo" src="istinskidoktor.png" alt="">
    <div class="background" id="bg1"></div>
    <div class="background" id="bg2"></div>
    <div class="background" id="bg3"></div>
    <div id="text1" class="text">
        <h3>Д-р Живомир Кирилов Панайотов</h3>
        <span>Кардиолог</span>
        <p>Завършва медицина през 2002г в Медицинския факултет на ТУ- Стара Загора. Специализира Вътрешни болести и Кардиология. Допълнителна специализация в сферата на Ехокардиографията. От 2005г до 2011г работи в кардиологично отделение на МБАЛ Бургас. От 2011г до 2019г е част от кардиологичния екип на СБАЛК "Понтика" и "Сити Клиник" - Бургас. В момента работи и в кардиологично отделение на УМБАЛ "Дева Мария"</p>
    </div>
    <div id="text2" class="text">
        <h3>Д-р Мартина Стоянова Ралева</h3>
        <span>Кардиолог</span>
        <p>Завършила медицина 2006г, от 2006г-2008г работила в МБАЛ Бургас и Мед.център III Бургас. От 2008г - 2012г специализирала кардиология в УМБАЛ "Св. Марина" - гр. Варна. Взела специалност по кардиология 05.2013г и от тогава до 06.2019г работила в СБАЛК КЦ Понтика, впоследствие Аджибадем Сити Клиник Бургас.</p>
    </div>
    <div id="text3" class="text">
        <h3>Д-р Едуард Ованес Мекенян</h3>
        <span>Кардиолог</span>
        <p>Завършил е медицина в МУ-Плевен 2002г. Специализира кардиология в Университетска болница „Г.Странски“ Плевен. Придобива специалност "Кардиология" 2014г. Докторант в Клиника по Кардиология и Ревматология „Проф.Кирил Чичовски” в УМБАЛ „д- р Георги Странски” гр. Придобива научна степен „доктор по медицина“ 2012г. До 2019г работи към СБАЛК "Аджибадем Сити Клиник"- Бургас., след което се присъединява към екипа на университетска болница "Дева Мария".</p>
    </div>
</div>

<style lang="scss">
    @import "../style.scss";

    .heading {
        grid-area: 1 / 2 / span 1 / span 5;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p {
            @include smalltext();
        }
    }

    hr {
        width: 12vw;
        color: $accent_red;
    }

    h2 {
        @include nomargpad();
        margin-top: 10px;
        font-size: 3rem;
        color: $darker_blue;
        font-family: "Open Sans", sans-serif;
    }

    p {
        font-size: 1.1rem;
        margin-top: 30px;
        color: $bg_black;
    }

    h3 {
        @include nomargpad();
        margin: 30px 0px 10px 0px;
        font-size: 2rem;
        color: $text_black;
    }

    span {
        @include smalltext();
        color: $text_black_soft;
        font-size: 15px;
    }
 
    .text {
        font-family: "Open Sans", sans-serif;
    }

    .grid {
        display: grid;
        grid-template: 200px 50px 400px 50px 50px 400px 50px 50px 400px 50px 50px / 15vw 1fr 1fr 1fr 1fr 1fr 15vw ;
        margin-bottom: 10px;
    }

    #bg1 {
        background-color: hsl(212, 90%, 95%);
        grid-area: 3 / 1 / span 3 / span 7;
    }

    #bg2 {
        background-color: hsl(212, 60%, 85%);
        grid-area: 6 / 1 / span 3 / span 7;
    }

    #bg3 {
        background-color: hsl(212, 90%, 95%);
        grid-area: 9 / 1 / span 3 / span 7;
    }

    .background {
        z-index: -2;
    }

    #text1 {
        grid-area: 3 / 2 / span 1 / span 3;
        align-self: center;
    }

    #text2 {
        grid-area: 6 / 4 / span 1 / span 3;
        align-self: center;
        text-align: end;
    }

    #text3 {
        grid-area: 9 / 2 / span 1 / span 3;
        align-self: center;
    }

    #photo3 {
        grid-area: 8 / 5 / span 4 / span 2;
        height: 100%;
        width: auto;
        justify-self: center;
    }

    #photo2 {
        grid-area: 5 / 2 / span 4 / span 2;
        height: 100%;
        width: auto;
        justify-self: center;
    }

    #photo1 {
        grid-area: 2 / 5 / span 4 / span 2;
        height: 100%;
        width: auto;
        justify-self: center;
    }

    .photo {
        height: 100%;
    }

    @media only screen and (max-width: 1150px) {
        p {
            font-size: 1rem;
        }

        h3 {
            font-size: 1.5rem;
        }

        #photo1 {
            grid-area: 3 / 5 / span 3 / span 3;
            height: 100%;
            width: auto;
            justify-self: flex-end;
        }

        #photo2 {
            grid-area: 6 / 1 / span 3 / span 3;
            height: 100%;
            width: auto;
            justify-self: flex-start;
        }

        #photo3 {
            grid-area: 9 / 5 / span 3 / span 3;
            height: 100%;
            width: auto;
            justify-self: flex-end;
        }

        #text1 {
            align-self: end;
        }

        #text2 {
            align-self: end;
        }

        #text3 {
            align-self: end;
        }
    }

    @media only screen and (max-width: 850px) {
        #text1 {
            grid-area: 3 / 2 / span 2 / span 3;
        }

        #text2 {
            grid-area: 6 / 4 / span 2 / span 3;
        }

        #text3 {
            grid-area: 9 / 2 / span 2 / span 3;
        }
    }

    @media only screen and (max-width: 785px) {
        p {
            font-size: 0.9rem;
        }

        h3 {
            font-size: 1.3rem;
        }
        #text1 {
            grid-area: 4 / 2 / span 1 / span 3;
        }

        #text2 {
            grid-area: 7 / 4 / span 1 / span 3;
        }

        #text3 {
            grid-area: 10 / 2 / span 1 / span 3;
        }
    }

    @media only screen and (max-width: 635px) {
        p {
            font-size: 1rem;
        }

        h3 {
            font-size: 1.5rem;
        }
        #text1 {
            grid-area: 3 / 2 / span 2 / span 5;
            align-self: center;
        }

        #text2 {
            grid-area: 6 / 2 / span 2 / span 5;
            align-self: center;
            text-align: left;
        }

        #text3 {
            grid-area: 9 / 2 / span 2 / span 5;
            align-self: center;
        }

        .photo {
            display: none;
        }
    }

    @media only screen and (max-width: 500px) {
        p {
            font-size: 0.9rem;
        }

        h3 {
            font-size: 1.4rem;
        }
        #text1 {
            grid-area: 3 / 2 / span 2 / span 5;
            align-self: center;
        }

        #text2 {
            grid-area: 6 / 2 / span 2 / span 5;
            align-self: center;
            text-align: left;
        }

        #text3 {
            grid-area: 9 / 2 / span 2 / span 5;
            align-self: center;
        }

        .photo {
            display: none;
        }
    }

    @media only screen and (max-width: 350px) {
        .grid {
            grid-template: 200px 50px 500px 50px 50px 500px 50px 50px 500px 50px 50px / 15vw 1fr 1fr 1fr 1fr 1fr 15vw ;
        }
    }
</style>