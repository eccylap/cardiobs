<script>
    let reviews = [
        {
            from: 'Станко',
            content: 'Отлични специалисти и най-съвременна апаратура. Индивидуално внимание към всеки пациент.'
        },
        {
            from: 'Весела',
            content: 'професионализъм, индивидуално внимание  и отношение към пациента, обстойна информация за лечение и профилактика.'
        },
        {
            from: 'Натали',
            content: 'Благодарна съм за внимателното и професионално отношение! Кабинета е оборудван с добра техника и най-вече с добри лекари! Препоръчвам!'
        }
    ]
</script>

<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<div class="container">
    {#each reviews as rev }
        <div class="review">
            <i class="fa fa-star golden"></i>
            <i class="fa fa-star golden"></i>
            <i class="fa fa-star golden"></i>
            <i class="fa fa-star golden"></i>
            <i class="fa fa-star golden"></i>
            <p class="content">{rev.content}</p>
            <p class="user">- {rev.from}</p>
        </div>
    {/each}
</div>

<style lang="scss">
    @import "../style.scss";

    .golden {
        color: $accent_red;
    }

    .container {
        width: 100%;
        display: flex;
        gap: 140px;
    }

    .review {
        width: auto;
        background-color: hsl(0, 0%, 98%);
        box-shadow: 1px 5px 3px hsl(0, 0%, 80%);
        height: auto;
        width: 30%;
        padding: 30px 20px 10px 20px;
    }

    .user {
        text-align: center;
        color: $darker_blue;
    }

    .content {
        text-align: left;
        font-style: italic;
        font-family: serif;
        font-weight: 300;
        color: $bg_black;
    }

    @media only screen and (max-width: 1320px) {
        .container {
            flex-wrap: wrap;
            justify-content: center;
            gap: 40px;
        }

        .review {
            min-width: 200px;
            margin: 0px;
        }
    }
</style>