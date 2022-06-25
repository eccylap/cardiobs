# Code of this website

This website uses **SvelteKit** and **Sass** (SCSS). There are numbers of components which are loaded onto pages (*found in **/routes***) or other components (*found in ***/lib****). This allows for easier site management (using global [stores](https://svelte.dev/tutorial/writable-stores) and [importable components](https://svelte.dev/tutorial/nested-components))

## SASS

This website uses the SASS compilator to compile **.scss** files. More info can be found [here](https://sass-lang.com/documentation/syntax)

## __layout components

These components load on every single page from __layout.svelte (a file which defines the layout of each page) - Header, CookieBanner, CookieSettings and Footer.

```js
// Script tag of __layout.svelte
    let phone = '0876/999-539';
    let showBanner;
    showBanner = $hasAnswered === 'true' ? false : true;

    // Toggles modal display
    const toggleModal = () => {
        $showModal = !$showModal;
        showBanner = !showBanner;
    }
```

and

```html
<!-- HTML of __layout.svelte -->
<CookieBanner showBanner={showBanner} on:click={() => toggleModal()}/>
<CookieSettings showModal={$showModal}/>
<Header phone={phone} />

<main>
    <slot></slot>
</main>

<Footer phone={phone} />
```

As you can see CookieBanner and CookieSettings take *showBanner* and *showModal* props respectively. These props control whether these components are visible. CookieBanner also has an on:click event listener that fires **toggleModal()**. *Phone* is a component that only passes the phone to the Footer and Header so that I can be changed "globally".

**CookieBanner** prompts the user to open the dialog window (the **CookieSettings** container) in order for him/her/they to change their cookie settings.

```html
<!-- Script tag of CookieSettings.svelte -->
<script>
    import {nonTrackingConsent, showModal, hasAnswered} from "../stores/cookie-consent";
    import { fade } from "svelte/transition"
    let nonTrackConsent = false;

    function handleSubmit() {
        if (nonTrackConsent) {
            $nonTrackingConsent = 'true';
        } else {
            $nonTrackingConsent = 'false';
        }
        $showModal = false;
        $hasAnswered = true;
    }
</script>
```

The user's preferences are stored in a [store](https://svelte.dev/tutorial/writable-stores) together with a **string: hasAnswered** (it is not a boolean because Browser can only save strings in their Local Storage). Those stores are then subscribed to the key-value pairs inside the browser's **localStorage**.

```js
// cookie-consent.js
import { browser } from "$app/env";
import { writable } from "svelte/store";

// The default value is set to 'false' in order to ensure that the user's data isn't collected without his/her/their consent
const defaultValue = 'false';
const initialValue = browser ? window.localStorage.getItem('cookie-pref') : defaultValue;
const initialValue2 = browser ? window.localStorage.getItem('has-answ') : defaultValue;

export let nonTrackingConsent = writable(initialValue);
export let showModal = writable(false);
export let hasAnswered = writable(initialValue2);

// What has the user answered
nonTrackingConsent.subscribe ((value) => {
    if (browser) {
        window.localStorage.setItem('cookie-pref', value);
    }
})

// Whether or not the user has already answered
hasAnswered.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('has-answ', value)
    }
})
```

## index.svelte and other pages components

The landing page uses several components

```js
import Group from "../lib/Group.svelte";
import HomeSection from "../lib/HomeSection.svelte";
import Reviews from "../lib/Reviews.svelte";
import Map from "../lib/Map.svelte";
```

**Group** is the group photo component. **Reviews** is a simple component that shows three copy-pasted clients' reviews.

**HomeSection** is more interesting however. It takes several props:

```js
export let heading = "WARNING: NO HEADING SPECIFIED"; // heading text
export let additionaltext1; // first text do be displayed
export let additionaltext2; // second text to be displayed
export let imageSource; // source for supplementary image e.g. 'static/photo.jpg'
export let infobutton; // text in the pinkish red button
export let routeTo; // href for the anchor tag which holds the pinkish red button
```

...and then formats them into an article element (not tag).

```html
<div id="containter">
    <div class="left_part">
        <hr>
        <h2>{heading}</h2>
        <div id="idnent">
            <p><span style="display: inline-block; width: 2ch;">&#9;</span>{additionaltext1}</p>
            <p><span style="display: inline-block; width: 2ch;">&#9;</span>{additionaltext2}</p>
            <a id="button" href={routeTo} class="gap_up little_gap_down">{infobutton} <i style="margin-left:5px;" class="fa fa-angle-right"></i></a>
        </div>
    </div>
    <div class="right_part">
        <img src={imageSource} alt=" ">
    </div>
</div>
```

**Map** is an interesting component too. It holds another component called **NoMap** and based on the value of the **nonTrackingConsent** store displays either an embeded Google map or a grey container containing address information...

```html
<script>
    export let marginalTop = "100px";
    import NoMap from "./NoMap.svelte";
    import {nonTrackingConsent} from "../stores/cookie-consent";
</script>

{#if $nonTrackingConsent === 'true'}
    <iframe attributes></iframe>
{:else}
    <NoMap />  <!-- a gray div with info -->
{/if}
```

Other pages may use the same components and/or other components. **Services** and **WorkTimes** are components which only show information. **PageHeading** takes a heading a heading and a underHeading prop and styles a page heading.

Similiarly to **HomeSection**, **OtherSection** takes props and creates an article div:

```html
<script>
    export let imageSource;
    export let heading = "";
    export let text1 = "";
</script>

<div class="article_left">
    <img src={imageSource} alt=" ">
    <div id="text">
        <hr>
        <h2>{heading}</h2>
        <p>{text1}</p>
        <a id="button" href="/">Разгледай</a>
    </div>
</div>
```

## Articles folder

SvelteKit can route users to 'articles/[PARAMETER].svelte'. The PARAMETER can be then used inside the folder **Articles/** containing only one file named '[article].svelte'

>Make sure to use afterNavigate() hook. It generates the site content when the user ENTERS the page (the switch-case must execute upon navigation). When navigating from artcle.svelte to another article.svelte the switch-case will not execute if it isn't nested inside the afterNavigate() hook.

```html
<script>
    import { page } from '$app/stores';
    import { afterNavigate } from '$app/navigation';
    let itemsToDisplay = [];
    //Available item types
    // text (heading '', paragraphs[], supplementPhoto '')
    // photos (sources [], heading '', paragraph '')
    afterNavigate(() => {
        switch ($page.params.article) {
        ...
```

**$page** is a [store](https://svelte.dev/tutorial/writable-stores) from $app/ that can access info about the page the user is located in. Here we use the parameter 'article' to see where the user has been navigated to. Then, the **itemsToDisplay** array is populated:

```js
afterNavigate(() => {
        switch ($page.params.article) {
            case "covid.svelte":
                itemsToDisplay = [];
                itemsToDisplay.push({
                    ...
                });
                break;
            case "photos.svelte":
                itemsToDisplay = [];
                itemsToDisplay.push({
                    ...
                });
                break;
            case "forus.svelte":
                itemsToDisplay = [];
                itemsToDisplay.push({
                    ...
                });
                break;
            case "privacy.svelte": 
                itemsToDisplay = [];
                itemsToDisplay.push( {
                    ...
                });
                break;
            default:
                itemsToDisplay = [];
                itemsToDisplay.push({
                    ...
                })
                break;
        }
    });
```

### itemsToDisplay array

This array takes **objects** with one required key **type** which can be:

- "heading" - takes: *heading* (string)
- "text" - takes: *heading* (string), *paragraphs* (array of strings), *supplementPhoto* (string e.g. photo.png)
- "photos" - takes: *heading* (string), *paragraph* (string), *sources* (array of strings)
- "links" - takes: *heading* (string), *links* (array of objects with 'text' and 'href' string keys)

It then populates the page using this algorythm:

```html
<div class="center_controller">
        {#each itemsToDisplay as item }
            {#if item.type === 'text'}
                <div class="textbox">
                    <div class="text">
                        <hr>
                        <h2>{item.heading}</h2>
                        {#each item.paragraphs as paragraph}
                            <p>{paragraph}</p>
                        {/each}
                    </div>
                    <img class="supplementImg" src={item.supplementPhoto} alt=" ">
                </div>
            {:else if item.type === "photos"}
                <div class="photobox">
                    <hr>
                    <h2>{item.heading}</h2>
                    <p>{item.paragraph}</p>
                    <div class="photos">
                        {#each item.sources as src}
                            <img on:click={() => alert('adw')} class="photo" src={src} alt="">
                        {/each}
                    </div>
                </div>
            {:else if item.type === "error"}
                <div class="err">
                    <h2>{item.heading}</h2>
                    <img src="/404.png" alt="">
                    <a href="/">{item.paragraph}</a>
                </div>
            {:else if item.type === "heading"}
                <h1>{item.heading}</h1>
            {:else if item.type === "links"}
                <div class="linkers">
                    <div>
                        <hr>
                        <h2>{item.heading}</h2>
                    </div>
                    <div class="linkage">
                        {#each item.links as link}
                            <a class="links" target="_blank" href={link.href}>{link.text}</a>
                        {/each}
                    </div>
                </div>
            {/if}
        {/each}
    </div>
```

### Thanks for reading

If there are any questions make sure to open an issue.
