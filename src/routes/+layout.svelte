<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';

	let { children } = $props();

	// Initialize theme on mount
	onMount(() => {
		// Theme store will handle the initialization
	});
</script>

{@render children()}
