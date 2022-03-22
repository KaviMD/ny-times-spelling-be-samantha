<script lang="ts">
	import { onMount } from 'svelte';
	import * as j$ from 'jquery';

	const sheet_id = '1say-tCGGSYSlpCry86fmwIS0T9UF-Gjz50o8Oat_ZOI';
	const sheet_name = 'sample_1';
	const url = `https://docs.google.com/spreadsheets/d/${sheet_id}/gviz/tq?tqx=out:csv&sheet=${sheet_name}`;

	onMount(() => {
		console.log(url);
		j$.get(url, (data) => {
			console.log(data);
		});
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
