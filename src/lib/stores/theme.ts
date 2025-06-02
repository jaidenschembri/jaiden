import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

// Get initial theme from localStorage or default to 'dark'
function getInitialTheme(): Theme {
	if (!browser) return 'dark';
	
	const stored = localStorage.getItem('theme');
	if (stored === 'light' || stored === 'dark') {
		return stored;
	}
	
	// Check system preference
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	}
	
	return 'dark'; // Default to dark for neo-brutalist aesthetic
}

// Create the theme store
export const theme = writable<Theme>(getInitialTheme());

// Subscribe to theme changes and update DOM and localStorage
if (browser) {
	theme.subscribe((value) => {
		localStorage.setItem('theme', value);
		document.documentElement.setAttribute('data-theme', value);
	});
	
	// Set initial theme on DOM
	const initialTheme = getInitialTheme();
	document.documentElement.setAttribute('data-theme', initialTheme);
}

// Toggle function
export function toggleTheme() {
	theme.update(current => current === 'light' ? 'dark' : 'light');
} 