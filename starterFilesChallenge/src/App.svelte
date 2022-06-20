<script>
	import './lib/styles.css'
	import Layout from './lib/components/Layout.svelte'
	import Bubbles from './lib/components/bubbles/Bubbles.svelte'
	import GameBar from './lib/components/GameBar.svelte'
	import Input from './lib/components/Inputs.svelte'

	//TODO Step 8: Add a function to start the game.

</script>

<Layout>
	<!-- TODO Step 8: Add logic so the Input, welcome message, and start button show when the game is not in session -->
	<Input />

	<h1>Welcome to Bubble Pop</h1>
	<!-- TODO Step 8: Start the game when a user clicks the button below. -->
	<button> Start Popping</button>

	<!-- TODO Step 8: Add logic so Bubbles and GameBar show when the game is in session -->
	<Bubbles />
	<GameBar />
</Layout>
