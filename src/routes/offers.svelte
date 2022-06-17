<script>
    import Equipment from "../lib/Equipment.svelte";
    import Services from "../lib/Services.svelte";
    import Map from "../lib/Map.svelte";
    import WorkTimes from "../lib/WorkTimes.svelte";
</script>

<div class="margined-center">
    <Equipment imageSource="/equip2.png" />
    <Services />
</div>
<WorkTimes />

<Map />

<style lang="scss">
    @import "../style.scss";
</style>

