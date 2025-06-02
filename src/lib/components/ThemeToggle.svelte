<script lang="ts">
	import { theme, toggleTheme } from '$lib/stores/theme';
</script>

<button
	class="neo-button theme-toggle"
	onclick={toggleTheme}
	aria-label="Toggle theme"
	title="Toggle between light and dark mode"
>
	{#if $theme === 'light'}
		<!-- Moon icon for dark mode -->
		<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
		</svg>
	{:else}
		<!-- Sun icon for light mode -->
		<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
			<circle cx="12" cy="12" r="5"/>
			<path d="m12 1-1 3h2l-1-3zM12 20l-1 3h2l-1-3zM4.22 4.22l-1.42 1.42 2.12 2.12 1.42-1.42L4.22 4.22zM18.36 18.36l-1.42 1.42 2.12 2.12 1.42-1.42-2.12-2.12zM1 11v2h3v-2H1zM20 11v2h3v-2h-3zM4.22 19.78l1.42-1.42 2.12 2.12-1.42 1.42-2.12-2.12zM18.36 5.64l1.42-1.42 2.12 2.12-1.42 1.42L18.36 5.64z"/>
		</svg>
	{/if}
</button>

<style>
	.theme-toggle {
		position: fixed;
		top: 24px;
		right: 24px;
		z-index: 1000;
		width: 48px;
		height: 48px;
		padding: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0;
	}
	
	.theme-toggle svg {
		transition: transform 0.3s ease;
	}
	
	.theme-toggle:hover svg {
		transform: rotate(180deg);
	}
	
	@media (max-width: 768px) {
		.theme-toggle {
			top: 16px;
			right: 16px;
			width: 44px;
			height: 44px;
		}
	}
</style> 