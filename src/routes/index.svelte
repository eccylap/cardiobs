<script>
    import Group from "../lib/Group.svelte";
    import HomeSection from "../lib/HomeSection.svelte";
    import Reviews from "../lib/Reviews.svelte";
    import Map from "../lib/Map.svelte";
    
    let additionaltexts = ["Кардиологичен Център Бургас е оборудван с много висок клас апаратура, подбрана взискателно и безкомпромисно.", "Това ни прави напълно уверени и спокойни, че сме осигурили широко поле за действие, в което да приложим нашите знания, умения и професионален опит. Наличното оборудване ни дава свободата и сигурността да реагираме неотложно и адекватно да покрием целия кардиологичен спектър в амбулаторията.", "Прегледите в Кардиологичен Център Бургас са разпределени през голям интервал, осигуряващ възможност за проветряване и дезинфекция на помещенията и апаратурата след всеки преглед, както и избягване засичането на пациентите един с друг."]
</script>

<Group />
<div class="centering">
    <HomeSection routeTo={`articles/photos.svelte`} heading="Кардио център Бургас" additionaltext1={additionaltexts[0]} additionaltext2={additionaltexts[1]} imageSource={"/bonusimage1.png"} infobutton={'Още снимки'}/>
    <HomeSection routeTo={`articles/covid.svelte`} heading="Мерки против COVID-19" headingSize="2rem" additionaltext1={additionaltexts[2]} additionaltext2={'Така може да се използва Кардио Центъра дори в тези моменти'} imageSource={'/covid.png'} infobutton={''} />
</div>
<div class="center">
    <Reviews />
</div>
<Map />

<style lang="scss">
    @import "../style.scss";
    .centering {
        margin: 60px 0px 0px 0px;
    }
    .center {
        margin: 10px 15vw;
    }
</style>