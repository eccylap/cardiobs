<script>
    import PageHeading from "../lib/miniComponents/PageHeading.svelte";
    import WorkTimes from "../lib/WorkTimes.svelte";
    import Map from "../lib/Map.svelte";
</script>

<div class="margined-center">
    <PageHeading heading={"Запишете час"} underHeading={"Отговаряме бързо!"} />
    <div class="contactInfo">
        <div class="contactInfoHeading">
            <h3>Свържете се с нас</h3>
            <div class="contactPanel">
                <div class="par separate">
                    <p>Молим да запишете час преди да посетите нашата клиника като използвате някои от следните методи. По този начин се избягват опашки, струпвания и губене на Ваше време. Имайте предвид, че ако се обадите извън долупосоченото работно време, има вероятност да не отговорим да повикването. В такъв случай ще се свържем с вас при първа възможност.</p>
                    <p>Имайте предвид, че когато записвате час при нас, Вие предоставяте Ваша лична информация (телефон, имена и т.н.)</p>
                </div>
                <div class="contacts separate">
                    <p><i class="fa fa-phone icons"></i><strong>Телефон:</strong> 0876/999-539</p>
                    <p><i class="fa fa-envelope icons"></i><strong>Имейл:</strong> cardiocenterbs@gmail.bg</p>
                    <p><i class="fa fa-map-marker icons"></i><strong>Адрес:</strong> Бургас, ж.к. Зорница</p>
                </div>
            </div>
            

        </div>
    </div>
</div>
<Map />

<style lang="scss">
    @import "../style.scss";

    .margined-center {
        margin: 0 15vw;
    }

    .icons {
        width: 40px;
        text-align: center;
    }

    h3 {
        font-size: 1.6rem;
        font-family: "Open Sans", sans-serif;
        color: $darker_blue;
    }

    p {
        font-family: "Open Sans", sans-serif;
        text-align: justify;
    }

    .contacts {
        font-family: "Open Sans", sans-serif;
        p {
            font-size: 1rem;
            font-weight: 300;
        }
    }

    strong {
        font-weight: 700;
    }

    .contactPanel {
        display: flex;
        flex-wrap: wrap;
        gap: 80px;
    }
    
    .separate {
        min-width: 400px;
        flex: 1;
    }

    @media only screen and (max-width: 580px) {
        .separate {
            min-width: 200px;
        }

        p {
            font-size: 0.9rem;
        }

        .icons {
            margin-left: -10px;
        }

        .contacts {
            p {
                font-size: 0.85rem;
            }
        }

        .margined-center {
            margin: 0 10vw;
        }
    }
</style>