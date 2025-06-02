<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let animationId: number;
	let mouseX = 0;
	let mouseY = 0;
	let rotationX = 0;
	let rotationY = 0;
	let targetRotationX = 0;
	let targetRotationY = 0;

	// Globe parameters - much bigger globe
	const radius = 500;
	const segments = 32;
	const rings = 20;

	interface Point3D {
		x: number;
		y: number;
		z: number;
	}

	interface Point2D {
		x: number;
		y: number;
		visible: boolean;
	}

	function createGlobePoints(): Point3D[] {
		const points: Point3D[] = [];
		
		// Create latitude lines
		for (let ring = 0; ring <= rings; ring++) {
			const phi = (ring / rings) * Math.PI;
			const y = Math.cos(phi) * radius;
			const ringRadius = Math.sin(phi) * radius;
			
			for (let segment = 0; segment < segments; segment++) {
				const theta = (segment / segments) * Math.PI * 2;
				const x = Math.cos(theta) * ringRadius;
				const z = Math.sin(theta) * ringRadius;
				points.push({ x, y, z });
			}
		}
		
		return points;
	}

	function rotatePoint(point: Point3D, rotX: number, rotY: number): Point3D {
		// Rotate around Y axis
		let x = point.x * Math.cos(rotY) - point.z * Math.sin(rotY);
		let z = point.x * Math.sin(rotY) + point.z * Math.cos(rotY);
		let y = point.y;

		// Rotate around X axis
		const newY = y * Math.cos(rotX) - z * Math.sin(rotX);
		const newZ = y * Math.sin(rotX) + z * Math.cos(rotX);

		return { x, y: newY, z: newZ };
	}

	function projectTo2D(point: Point3D, centerX: number, centerY: number): Point2D {
		const perspective = 800;
		const scale = perspective / (perspective + point.z);
		
		return {
			x: centerX + point.x * scale,
			y: centerY + point.y * scale,
			visible: point.z > -radius * 0.8 // Only show front-facing points
		};
	}

	function drawGlobe() {
		if (!ctx || !canvas) return;

		// Position globe so bottom right quarter bleeds off screen
		const centerX = canvas.width - radius * 0.75; // 3/4 of radius from right edge
		const centerY = canvas.height - radius * 0.75; // 3/4 of radius from bottom edge
		const points = createGlobePoints();

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Set line style - more subtle
		ctx.strokeStyle = $theme === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)';
		ctx.lineWidth = 1;

		// Draw latitude lines
		for (let ring = 0; ring <= rings; ring++) {
			ctx.beginPath();
			let firstPoint = true;
			
			for (let segment = 0; segment <= segments; segment++) {
				const pointIndex = ring * segments + (segment % segments);
				if (pointIndex >= points.length) continue;
				
				const rotated = rotatePoint(points[pointIndex], rotationX, rotationY);
				const projected = projectTo2D(rotated, centerX, centerY);
				
				if (projected.visible) {
					if (firstPoint) {
						ctx.moveTo(projected.x, projected.y);
						firstPoint = false;
					} else {
						ctx.lineTo(projected.x, projected.y);
					}
				} else {
					firstPoint = true;
				}
			}
			ctx.stroke();
		}

		// Draw longitude lines
		for (let segment = 0; segment < segments; segment++) {
			ctx.beginPath();
			let firstPoint = true;
			
			for (let ring = 0; ring <= rings; ring++) {
				const pointIndex = ring * segments + segment;
				if (pointIndex >= points.length) continue;
				
				const rotated = rotatePoint(points[pointIndex], rotationX, rotationY);
				const projected = projectTo2D(rotated, centerX, centerY);
				
				if (projected.visible) {
					if (firstPoint) {
						ctx.moveTo(projected.x, projected.y);
						firstPoint = false;
					} else {
						ctx.lineTo(projected.x, projected.y);
					}
				} else {
					firstPoint = true;
				}
			}
			ctx.stroke();
		}

		// Draw some dots at intersections for extra detail - fewer dots for cleaner look
		ctx.fillStyle = $theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)';
		
		for (let ring = 0; ring <= rings; ring += 3) {
			for (let segment = 0; segment < segments; segment += 4) {
				const pointIndex = ring * segments + segment;
				if (pointIndex >= points.length) continue;
				
				const rotated = rotatePoint(points[pointIndex], rotationX, rotationY);
				const projected = projectTo2D(rotated, centerX, centerY);
				
				if (projected.visible) {
					ctx.beginPath();
					ctx.arc(projected.x, projected.y, 2.5, 0, Math.PI * 2);
					ctx.fill();
				}
			}
		}
	}

	function animate() {
		// Slower auto rotation for more elegant movement
		targetRotationY += 0.002;
		
		// Reduced mouse interaction for subtlety
		const mouseInfluence = 0.00003;
		targetRotationX = (mouseY - canvas.height / 2) * mouseInfluence;
		targetRotationY += (mouseX - canvas.width / 2) * mouseInfluence * 0.3;

		// Smooth rotation
		rotationX += (targetRotationX - rotationX) * 0.03;
		rotationY += (targetRotationY - rotationY) * 0.03;

		drawGlobe();
		animationId = requestAnimationFrame(animate);
	}

	function handleResize() {
		if (!canvas) return;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}

	function handleMouseMove(event: MouseEvent) {
		mouseX = event.clientX;
		mouseY = event.clientY;
	}

	onMount(() => {
		ctx = canvas.getContext('2d')!;
		handleResize();
		animate();

		window.addEventListener('resize', handleResize);
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<canvas bind:this={canvas} id="background-canvas"></canvas> 