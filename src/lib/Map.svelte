<script>
    export let marginalTop = "100px";
    import NoMap from "./NoMap.svelte";
    import {nonTrackingConsent} from "../stores/cookie-consent";
</script>

{#if $nonTrackingConsent === 'true'}
    <iframe style="border:0; margin-top: {marginalTop};" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1310.0638299958534!2d27.466722435347496!3d42.51294018479995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a695ed628698ab%3A0xab943f282dc18da9!2z0JrQsNGA0LTQuNC-0LvQvtCz0LjRh9C10L0g0KbQtdC90YLRitGAINCR0YPRgNCz0LDRgQ!5e0!3m2!1sbg!2sbg!4v1655324175379!5m2!1sbg!2sbg" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
{:else}
    <NoMap />
{/if}

<style lang="scss">
    iframe {
        width: 100vw;
        height: 40vh;
    }
</style>