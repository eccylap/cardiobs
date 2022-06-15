<script>
    import Equipment from "../lib/Equipment.svelte";
    import Services from "../lib/Services.svelte";
    import Map from "../lib/Map.svelte";
</script>

<div class="margined-center">
    <Equipment imageSource="equip2.png" />
    <Services />
</div>
<Map marginalTop={'0px'} />

<style lang="scss">
    @import "../style.scss";
</style>

