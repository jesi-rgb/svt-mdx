<script>
	import BodyText from './BodyText.svelte';
</script>

<BodyText>
	<pre class="text-red-500">
		<slot />
	</pre>
</BodyText>

<style>
	pre {
		font-size: 10px;
	}
</style>
