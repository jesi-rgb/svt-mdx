<script>
	import BodyText from './BodyText.svelte';
</script>

<BodyText>
	<p>
		<slot />
	</p>
</BodyText>

<style>
	p {
		font-weight: 400;
		-moz-osx-font-smoothing: grayscale;
		margin-top: 1.5em;
		margin-bottom: 1.5em;
	}
</style>
