import { writable } from "svelte/store";

// TODO Change default value to (false)
export let nonTrackingConsent = writable(false);