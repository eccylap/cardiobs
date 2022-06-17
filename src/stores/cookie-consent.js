import { browser } from "$app/env";
import { writable } from "svelte/store";

// TODO Change default value to (false)
const defaultValue = 'false';
const initialValue = browser ? window.localStorage.getItem('cookie-pref') : defaultValue;
const initialValue2 = browser ? window.localStorage.getItem('has-answ') : defaultValue;

export let nonTrackingConsent = writable(initialValue);
export let showModal = writable(false);
export let hasAnswered = writable(initialValue2);

nonTrackingConsent.subscribe ((value) => {
    if (browser) {
        window.localStorage.setItem('cookie-pref', value);
    }
})

hasAnswered.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('has-answ', value)
    }
})