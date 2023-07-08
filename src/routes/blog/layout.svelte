<script context="module">
	import h1 from '../../lib/Components/Heading.svelte';
	import p from '../../lib/Components/Paragraph.svelte';
	import pre from '../../lib/Components/Code.svelte';
	import strong from '../../lib/Components/Bold.svelte';
	import em from '../../lib/Components/Italic.svelte';

	export { h1, p, pre, strong, em };
</script>

<div class="my-20">
	<slot />
</div>
