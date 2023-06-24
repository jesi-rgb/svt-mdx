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
		margin-top: 1.5em;
		margin-bottom: 1.5em;
	}
</style>
