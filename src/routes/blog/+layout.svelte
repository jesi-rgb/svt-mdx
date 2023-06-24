<script context="module">
	import h1 from '../../lib/Components/Title.svelte';
	import p from '../../lib/Components/Paragraph.svelte';
	import code from '../../lib/Components/Code.svelte';

	export { h1, p, code };
</script>

<div class="my-20">
	<slot />
</div>
