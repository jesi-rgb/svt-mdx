<script>
	// read all files and names etc
	export let data;
	const posts = data.posts;
</script>

<div class="text-5xl font-bold tracking-tight mb-10">BLOG</div>

{#each posts as p}
	<li><a href="/blog/{p}">{p}</a></li>
{/each}
