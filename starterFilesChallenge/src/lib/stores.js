import { writable } from 'svelte/store';

export const session = writable(false);

//For tracking the score each time a bubble is popped
export const score = writable(0);

//For setting and saving the winning score to localStorage
export const savedFinalScore = localStorage.finalScore;

export const finalScore = writable(savedFinalScore || 10);

finalScore.subscribe((score) => (localStorage.finalScore = score));

const savedScore = localStorage.score;

//For checking the previous score when setting a high score
export const lastScore = writable(savedScore || null);

lastScore.subscribe((score) => (localStorage.score = score));

//TODO: Add a writable store for totalBubbles.

//TODO: Create a store to save the total number of bubbles saved by users in Input.svelte to localStorage.

//TODO: Update the totalBubbles store to use the saved value from localStorage or an initial value. 

//TODO: Subscribe totalBubbles to the localStorage value.

