<script>
    
</script>

<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<div class="containter">
    <img src="wallpaper.png" alt="">
    <div class="heading">
        <hr>
        <span>За вашето здраве</span>
        <h1>КАРДИОЛОГИЧЕН <br> ЦЕНТЪР БУРГАС</h1>
        <p>Вашето здраве е приоретитет за нас (мен)</p>
        <div id="phone">
            <p><i class="fa fa-arrow-right" style="font-size: 1.6rem;"></i> 088 123456</p>
        </div>
        <p id="smalltext">За всички мобилни оператори.</p>
        <p id="smallertext">*отговарям до 3 часа</p>
    </div>
    <div class="heading_alt">
        <div class="gap_up" id="hr_alt">
            <hr>
        </div>
        <h1 class="gap_up">КАРДИОЛОГИЧЕН <br> ЦЕНТЪР БУРГАС</h1>
        <p class="gap_up">Вашето здраве е приоретитет за нас (мен)</p>
        <div id="phone" class="gap_up little_gap_down">
            <p>088 123456</p>
        </div>
    </div>
</div>

<style lang="scss">
    @import "../style.scss";

    .heading_alt {
        display: none;
    }

    #smalltext {
        @include smalltext();
    }

    #smallertext {
        @include smallertext();
    }

    .heading {
        position: absolute;
        left: 15vw;
        top: 350px;

        span {
            float: left;
            display: block;
            color: $darker_blue;
            font-family: sans-serif;
        }
        
        hr {
            color: $darker_blue;
            margin-bottom: 30px;
            width: 30%;
            margin-right: 30px;
            float: left;
        }
        
        p {
            margin-top: 30px;
            font-family: "Open Sans";
        }

        #phone {
            margin-top: 70px;
            max-width: 170px;
        }
    }

    #phone {
        background-color: $accent_red;
        padding: 15px 40px;
        width: auto;
        border-radius: 3px;

        p {
            margin: 0;
            font-size: 1.4rem;
            color: $light_white;
            font-family: sans-serif;
        }
    }

    h1 {
        @include nomargpad();
        background: none;
        font-family: "Play", sans-serif;
        font-size: 3rem;
        color: $darker_blue;
    }

    img {
        display: none;
    }

    .containter {
        background-image: url("wallpaper.png");
        background-position: right;
        height: 720px;
    }

    @media only screen and (max-width: 1575px) {
        .containter {
            background-position: left -300px top 0;
        }
    }

    @media only screen and (max-width: 740px) {
        .containter {
            background-color: #eaf4fa;
            background-image: none;
            height: auto;
        }

        .heading {
            display: none;
        }

        .heading_alt {
            display: block;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0px 40px;

            .phone {
                display: flex;
                justify-content: center;
                p {
                    float: none;
                }
            }

            h1 {
                font-size: 2rem;
            }
            
            p {
                font-size: 1.1rem;
            }
        }
        
        .gap_up {
            margin-top: 50px;
        }
        
        .little_gap_down {
            margin-bottom: 10px;
        }

        hr {
            width: 150px;
        }
    }
</style>