<script lang="ts">
	import { onMount } from 'svelte';
	import * as j$ from 'jquery';

    function parseCSV(data) {
        let parsed_string = data.split("\n").map(row => row.split(",")).map(row => row.map(cell => cell.replace(/[^a-z0-9]/gi,"")));
        parsed_string.shift();
        // make it a 1d array: https://stackoverflow.com/questions/14824283/convert-a-2d-javascript-array-to-a-1d-arrays
        return [].concat.apply([], parsed_string);;
    }

	const sheet_id = '1say-tCGGSYSlpCry86fmwIS0T9UF-Gjz50o8Oat_ZOI';
	const sheet_name = 'sample_1';
	const url = `https://docs.google.com/spreadsheets/d/${sheet_id}/gviz/tq?tqx=out:csv&sheet=${sheet_name}`;

    let word_list = [];

	onMount(() => {
		console.log(url);
		j$.get(url, (data) => {
			word_list = parseCSV(data);
            console.log(word_list);
		});
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>{ word_list }</p>
