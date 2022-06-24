<script>
    import OtherSection from "../lib/OtherSection.svelte";
    import Services from "../lib/Services.svelte";
    import Map from "../lib/Map.svelte";
    import WorkTimes from "../lib/WorkTimes.svelte";

    let text_aparatura = "Кардиологичен Център Бургас е оборудван с много висок клас апаратура, подбрана взискателно и безкомпромисно. В сайта има информация и снимки за апарати, уреди и пособия, с които разполагаме.";
</script>

<div class="margined-center">
    <OtherSection heading="Апаратура" text1={text_aparatura} imageSource="/equip2.png" />
    <Services />
</div>
<WorkTimes />

<Map />

<style lang="scss">
    @import "../style.scss";

    .margined-center {
        margin: 0 15vw;
    }
</style>

