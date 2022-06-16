<script>
    import Equipment from "../lib/Equipment.svelte";
    import Services from "../lib/Services.svelte";
    import Map from "../lib/Map.svelte";
    import WorkTimes from "../lib/WorkTimes.svelte";
    import NoMap from "../lib/NoMap.svelte";
    import {nonTrackingConsent} from "../stores/cookie-consent";
</script>

<div class="margined-center">
    <Equipment imageSource="equip2.png" />
    <Services />
</div>
<WorkTimes />

{#if $nonTrackingConsent === true}
    <Map marginalTop={'0px'} />
{:else}
    <NoMap />
{/if}

<style lang="scss">
    @import "../style.scss";
</style>

