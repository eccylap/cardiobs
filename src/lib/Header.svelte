<script>
    export let phone;

    let navDisplay = false;

    function toggleNav() {
        navDisplay = !navDisplay;
    }
</script>

<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<header>
    <div class="upperHeader">
        <ul>
            <li id="address"><i class="fa fa-map"></i> Бургас, ж.к. Перла</li>
            <li id="phone" ><i class="fa fa-phone"></i> {phone}</li>
            <li id="email" ><i class="fa fa-envelope"></i> cardiocenterbs@gmail.bg</li>
            <li id="workHours"><i class="fa fa-clock-o"></i> Пон-Петък 7:30 - 18:30 </li>
        </ul>
    </div>
    <div class="lowerHeader">
        <img id="logo" src="/logo.png" height="100%" alt="Кардиологичен Център Бургас">
        <nav class="lower">
            <a href="/">Начало</a>
            <a href="/articles/forus.svelte">За Нас</a>
            <a href="/offers">Дейности</a>
            <a href="/about">Екип</a>
            <a href="/about">Запишете час</a>
            <a href="/articles/photos.svelte">Галерия</a>
        </nav>
        <div on:click={toggleNav} class="openLowerer hiddenForPc">
            <i class="fa fa-angle-down"></i>
        </div>
    </div>
    {#if navDisplay}
        <div class="lowererHeader hiddenForPc">
            <nav class="lowerer">
                <a href="/">Начало</a>
                <a href="/about">За Нас</a>
                <a href="/offers">Дейности</a>
                <a href="/about">Екип</a>
                <a href="/about">Запишете час</a>
                <a href="/about">Галерия</a>
            </nav>
        </div>
    {/if}
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
        box-shadow: 0px 2px 10px grey;
    }

    .hiddenForPc {
        display: none;
    }

    .hiddenForPc {
        display: none;
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

    @media only screen and (max-width: 960px) {
        #logo {
            display: none;
        }
        
        .lowerHeader {
            justify-content: center;
            padding: 0vw;
        }
    }

    @media only screen and (max-width: 440px) {
        #workHours {
            display: none;
        }

        ul {
            padding: 10px;
            justify-content: center;
            li {
                font-size: 1rem;
                margin: 5px;
            }
        }
    }

    @media only screen and (max-width: 620px) {
        .hiddenForPc {
            display: block;
        }

        .lower {
            display: none;
        }

        .lowerHeader {
            align-items: center;
            justify-content: flex-end;
            height: 50px;
        }

        .openLowerer {
            padding: 0px 20px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: hsl(0, 0%, 90%);
            cursor: pointer;
        }

        .lowerer {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0 15px;
        }
    }
</style>