<script>

</script>

<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<header>
    <div class="upperHeader">
        <ul>
            <li id="address"><i class="fa fa-map"></i> Бургас, ж.к. Перла</li>
            <li id="phone" ><i class="fa fa-phone"></i> 088 123456</li>
            <li id="email" ><i class="fa fa-envelope"></i> cardiocenterbs@gmail.bg</li>
            <li id="workHours"><i class="fa fa-clock-o"></i> Пон-Петък 7:30 - 18:30 </li>
        </ul>
    </div>
    <div class="lowerHeader">
        <img id="logo" src="logo.png" height="100%" alt="sex">
        <nav class="lower">
            <a href="/">Начало</a>
            <a href="/offers">Дейности</a>
            <a href="/about">За Нас</a>
            <a href="/gallery">Галерия</a>
        </nav>
    </div>
</header>

<style lang="scss">
    @import "../style.scss";

    ul {
        @include nomargpad();
        display: flex;
        justify-content: space-between;
        padding: 0px 15vw;

        li {
            margin: 10px;
            display: inline;
            color: $soft_text_white;
            font-family: cursive;
            font-weight: 500;
            font-size: 0.9rem;
        }

        i {
            font-size: 0.9rem;
            font-weight: thin;
        }
    }

    .lowerHeader {
        background-color: $light_white;
        height: 100px;
        display: flex;
        padding: 0px 15vw;
        justify-content: space-between;
        box-shadow: 0px 0px 10px grey;
    }

    header {
        width: 100vw;

        .upperHeader {
            background-color: $darker_blue;
        }

        nav {
            height: 100%;
            display: flex;
            flex-direction: row;
            align-content: center;
            align-items: center;


            a {
                @include noanchor();
                color: $text_black;
                display: block;
                height: auto;
                padding: 10px;
                text-align: center;
                font-family: sans-serif;
            }
        }
    }

    @media only screen and (max-width: 1060px) {
        ul {
            padding: 0px 10vw;
        }
        
        .lowerHeader {
            padding: 0px 10vw;
            height: 70px;
        }

        #address {
            display: none;
        }
    }

    @media only screen and (max-width: 850px) {
        #email {
            display: none;
        }

        ul {
            padding: 0px 10vw;
        }
    }

    @media only screen and (max-width: 740px) {
        #logo {
            display: none;
        }
        
        .lowerHeader {
            justify-content: center;
            padding: 0vw;
        }
    }

    @media only screen and (max-width: 420px) {
        #workHours {
            display: none;
        }

        ul {
            padding: 0px;
            justify-content: center;
            li {
                font-size: 0.9rem;
                margin: 5px;
            }
        }
        
        .lowerHeader {
            justify-content: center;
            padding: 0vw;
            font-size: 0.9rem;
        }
    }
</style>