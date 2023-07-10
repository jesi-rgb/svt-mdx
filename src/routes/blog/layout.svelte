<script context="module">
	import h1 from '../../lib/Components/Heading.svelte';
	import p from '../../lib/Components/Paragraph.svelte';
	import pre from '../../lib/Components/Code.svelte';
	import strong from '../../lib/Components/Bold.svelte';
	import em from '../../lib/Components/Italic.svelte';
	import blockquote from '../../lib/Components/Blockquote.svelte';

	export { h1, p, pre, strong, em, blockquote };
</script>

<div class="my-20">
	<slot />
</div>
