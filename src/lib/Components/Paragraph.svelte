<script>
	import BodyText from './BodyText.svelte';
</script>

<BodyText>
	<p class="">
		<slot />
	</p>
</BodyText>

<style>
	p {
		margin-top: 1.5em;
		margin-bottom: 1.5em;
	}
</style>
