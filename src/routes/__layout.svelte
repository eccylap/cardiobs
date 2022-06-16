<script>
    import Header from "../lib/Header.svelte";
    import Footer from "../lib/Footer.svelte";

    let phone = '0876/999-539';
</script>

<Header phone={phone} />

<main>
    <slot></slot>
</main>

<Footer phone={phone} />