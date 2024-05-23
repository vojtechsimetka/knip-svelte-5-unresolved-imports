<script lang="ts">
	import Component from '$lib/component.svelte';
	import component from '$lib/component.svelte?raw';
	import store from '$lib/store.svelte.ts?raw';
</script>

<h1>Component</h1>
<Component />

<h1>Code</h1>
<span>component.svelte</span>
<pre>
    {component}
</pre>
<span>store.svelte.ts</span>
<pre>
    {store}
</pre>
