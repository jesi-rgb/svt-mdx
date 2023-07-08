<script>
	import BodyText from './BodyText.svelte';
</script>

<BodyText>
	<h1 class="font-extrabold text-accent">
		<slot />
	</h1>
</BodyText>

<style>
	h1 {
		font-size: 1.6667em;
		margin-bottom: 0.9em;
	}
</style>
