<script>
	import './lib/styles.css'
	import Layout from './lib/components/Layout.svelte'
	import Bubbles from './lib/components/bubbles/Bubbles.svelte'
	import GameBar from './lib/components/GameBar.svelte'
	import Input from './lib/components/Inputs.svelte'

	//TODO: Add a function to start the game.

</script>

<Layout>
	<!-- TODO: Add logic so the input, welcome, and start button to show when the game is not in session -->
	<Input />

	<h1>Welcome to Bubble Pop</h1>
	<!-- TODO: When a user clicks the button below, it should start the game. -->
	<button> Start Popping</button>

	<!-- TODO: Add logic so the bubbles and game bar show when the game is in session -->
	<Bubbles />
	<GameBar />
</Layout>
