<script>
	import { random } from '../../utils/random.js';
	import Bubble from './Bubble.svelte';

</script>


<!-- Svelte's style props allow you to set CSS custom properties -->
<Bubble
--scale={random(2, 3.5) / 10}
--offset="{i * random(8, 10)}%"
--delay="{random(1000, 5000)}ms"
--speed="{random(10, 20)}s"
/>