<script context="module">
	import h1 from '../../lib/Components/Heading.svelte';
	import p from '../../lib/Components/Paragraph.svelte';
	import pre from '../../lib/Components/Code.svelte';

	export { h1, p, pre };
</script>

<div class="my-20">
	<slot />
</div>
