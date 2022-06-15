<script context="module">
    export function load({ error }) {
        return {
            props: { message: error.message }
        };
    }
</script>

<script>
    export let message;
</script>

<div class="error">
    <h2>Опа</h2>
    <p>Такава страница не същестува</p>
    <a href="/">Към началото</a>
</div>

<style lang="scss">
    .error {
        text-align: center;
        margin-bottom: 460px;
    }
</style>