<script>
    import Header from "../lib/Header.svelte";
    import Footer from "../lib/Footer.svelte";
    import CookieSettings from "../lib/CookieSettings.svelte";
    import CookieBanner from "../lib/CookieBanner.svelte";

    let phone = '0876/999-539';
    let showBanner = true;
    let showModal = false;

    const toggleModal = () => {
        showModal = !showModal;
        showBanner = !showBanner;
    }
</script>

<CookieBanner showBanner={showBanner} on:click={() => toggleModal()}/>
<CookieSettings showModal={showModal}/>
<Header phone={phone} />

<main>
    <slot></slot>
</main>

<Footer phone={phone} />