<script context="module">
	import h1 from '../../lib/Components/Title.svelte';
	import p from '../../lib/Components/Paragraph.svelte';

	export { h1, p };
</script>

<div class="my-20 a">
	<slot />
</div>
