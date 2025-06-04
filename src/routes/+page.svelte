<script lang="ts">
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import BackgroundAnimation from '$lib/components/BackgroundAnimation.svelte';
	
	// Coding projects - small vertical stack on the left
	const projects = [
		{
			title: 'JaidenChan',
			url: 'https://jaidenschembri.github.io/home/',
			description: 'My forum'
		},
		// {
		// 	title: 'JaidenOS',
		// 	url: 'https://jaidenschembri.github.io/jaiden-os/',
		// 	description: 'My OS'
		// },
		{
			title: 'JaidenCLI',
			url: 'https://jaidenschembri.github.io/cli-chat/',
			description: 'In browser ai powered CLI fun'
		},
		{
			title: 'JaidenWaifu',
			url: 'https://jaidenschembri.github.io/vrm-chatbot/',
			description: 'VRM Waifu'
		}
	];

	// Social links for bottom right
	const socialLinks = [
		{
			name: 'GitHub',
			url: 'https://github.com/jaidenschembri',
			icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
		},
		{
			name: 'Twitter',
			url: 'https://x.com/jaiddog33',
			icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
		},
		{
			name: 'Email',
			url: 'mailto:jaidenschembri@gmail.com',
			icon: 'M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636z'
		}
	];
</script>

<svelte:head>
	<title>jaiden</title>
	<meta name="description" content="jaiden's digital space" />
</svelte:head>

<BackgroundAnimation />
<ThemeToggle />

<main class="main-container">
	<!-- Title - Always at top -->
	<div class="title-section">
		<h1 class="main-title">jaiden</h1>
	</div>

	<!-- Content Layout -->
	<div class="content-layout">
		<!-- Projects - Always on left -->
		<div class="projects-section">
			<h2 class="section-label">projects</h2>
			<div class="projects-list">
				{#each projects as project}
					<a href={project.url} class="project-link">
						<div class="project-title">{project.title}</div>
						<div class="project-description">{project.description}</div>
					</a>
				{/each}
			</div>
		</div>

		<!-- Social Links - Always on right -->
		<div class="social-section">
			<h2 class="section-label">connect</h2>
			<div class="social-list">
				{#each socialLinks as social}
					<a 
						href={social.url} 
						class="social-link"
						target={social.url.startsWith('http') ? '_blank' : '_self'}
						rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
						aria-label={social.name}
					>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
							<path d={social.icon}/>
						</svg>
						<span class="social-name">{social.name}</span>
					</a>
				{/each}
			</div>
		</div>
	</div>
</main>

<style>
	.main-container {
		position: relative;
		min-height: 100vh;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	/* Title - Always at top */
	.title-section {
		text-align: center;
		margin-bottom: 3rem;
		z-index: 10;
		position: relative;
	}

	.main-title {
		font-size: clamp(2.5rem, 6vw, 4rem);
		font-weight: 300;
		margin: 0;
		letter-spacing: -0.02em;
		color: var(--text-primary);
		font-family: 'Inter', sans-serif;
	}

	/* Content Layout */
	.content-layout {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex: 1;
		max-width: 1200px;
		margin: 0 auto;
		width: 100%;
		position: relative;
		z-index: 10;
	}

	/* Projects - Left side */
	.projects-section {
		flex: 0 0 auto;
	}

	.section-label {
		font-size: 0.75rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--text-secondary);
		margin: 0 0 1rem 0;
		font-family: 'JetBrains Mono', monospace;
	}

	.projects-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.project-link {
		display: block;
		text-decoration: none;
		color: inherit;
		padding: 0.75rem 1rem;
		border: 1px solid var(--border-secondary);
		background-color: var(--bg-secondary);
		transition: all 0.2s ease;
		min-width: 200px;
		backdrop-filter: blur(10px);
	}

	.project-link:hover {
		border-color: var(--border-primary);
		transform: translateX(4px);
		background-color: var(--bg-primary);
	}

	.project-title {
		font-size: 0.9rem;
		font-weight: 500;
		margin-bottom: 0.25rem;
		color: var(--text-primary);
	}

	.project-description {
		font-size: 0.75rem;
		color: var(--text-secondary);
		font-weight: 300;
	}

	/* Social Links - Right side */
	.social-section {
		flex: 0 0 auto;
		text-align: right;
	}

	.social-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		align-items: flex-end;
	}

	.social-link {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
		color: var(--text-secondary);
		transition: all 0.2s ease;
		padding: 0.5rem 0.75rem;
		border: 1px solid transparent;
		background-color: var(--bg-secondary);
		backdrop-filter: blur(10px);
		min-width: 120px;
		justify-content: flex-end;
	}

	.social-link:hover {
		color: var(--text-primary);
		border-color: var(--border-primary);
		transform: translateX(-4px);
		background-color: var(--bg-primary);
	}

	.social-link svg {
		transition: transform 0.2s ease;
		flex-shrink: 0;
	}

	.social-link:hover svg {
		transform: scale(1.1);
	}

	.social-name {
		font-size: 0.85rem;
		font-weight: 400;
	}

	/* Responsive Design - Keep similar layout */
	@media (max-width: 768px) {
		.main-container {
			padding: 1.5rem;
		}

		.content-layout {
			flex-direction: column;
			gap: 3rem;
			align-items: center;
		}

		.projects-section,
		.social-section {
			width: 100%;
			max-width: 300px;
		}

		.social-section {
			text-align: center;
		}

		.social-list {
			align-items: center;
		}

		.social-link {
			justify-content: center;
		}

		.project-link {
			min-width: auto;
		}

		.title-section {
			margin-bottom: 2rem;
		}
	}

	@media (max-width: 480px) {
		.main-container {
			padding: 1rem;
		}

		.content-layout {
			gap: 2rem;
		}

		.social-link {
			min-width: 100px;
			padding: 0.5rem;
		}

		.social-name {
			font-size: 0.8rem;
		}
	}
</style>
