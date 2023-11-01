<script lang="ts">
	import bgvideo from '$lib/autoverse-assets/bg-video.mp4';
	import logo from '$lib/autoverse-assets/logo.webp';
	import autoverstext from '$lib/autoverse-assets/autoverse-text.png';
	import phoneIcon from '$lib/autoverse-assets/phoneIcon.png';
	import phoneIconwhite from '$lib/autoverse-assets/phoneIconwhite.png';
	import whatappIcon from '$lib/autoverse-assets/whatsapp.png';
	import maleCharacter from '$lib/autoverse-assets/MALE_CHARACTER.png';
	import femaleCharacter from '$lib/autoverse-assets/FEMALE_CHARACTER.png';
</script>

<video class="-z-50 fixed" height="100%" width="100%" autoplay muted loop>
	<source src={bgvideo} />
	<track kind="captions" />
</video>

<div class="fixed bottom-32 right-0 flex flex-col px-10 gap-2 z-50">
	<div class="bg-autoversePink rounded-full p-5">
		<img src={phoneIconwhite} alt="phone icon" width="25" />
	</div>
	<div class="bg-autoverseGreen rounded-full p-5 flex justify-center">
		<img src={whatappIcon} alt="whatsapp icon" />
	</div>
</div>

<section class="h-screen">
	<div>
		<img src={logo} alt="logo" class="w-40 h-40" />
	</div>

	<div class="flex justify-center items-center flex-col mt-20 gap-20">
		<img src={autoverstext} alt="auto verse text" />

		<p class="text-white text-3xl text-center w-1/2">
			At the cutting edge of Virtual Reality, AutoVRse is shaping tomorrow's immersive experience
			for Enterprises today.
		</p>
		<button
			class=" flex justify-center items-center bg-white text-autoversePink rounded-full py-2 px-10 gap-x-3 font-semibold text-2xl leading-10"
		>
			<img src={phoneIcon} width="20" height="20" alt="phone icon" /> Request a call back
		</button>
	</div>
</section>

<section
	class="bg-white bg-opacity-80 flex justify-center items-center flex-col gap-14 text-autoversePink w-full h-full6 py-10"
>
	<div>
		<h1 class="text-7xl font-extrabold">We are veterans in the XR space</h1>
	</div>

	<div class="grid grid-cols-2 grid-rows-2 gap-x-96 gap-y-48">
		<p class="flex flex-col font-extrabold gap-y-7">
			<span class="text-9xl">200+</span>
			<span class="text-black text-2xl"> XR Projects Delivered </span>
		</p>

		<p class="flex flex-col font-extrabold gap-y-7">
			<span class="text-9xl">80%</span>
			<span class="text-black text-2xl"> Clients Repeat Clients </span>
		</p>

		<p class="flex flex-col font-extrabold gap-y-7">
			<span class="text-9xl">85+</span>
			<span class="text-black text-2xl"> Clients </span>
		</p>
		<p class="flex flex-col font-extrabold gap-y-7">
			<span class="text-9xl">25k+</span>
			<span class="text-black text-2xl"> Employees Trained </span>
		</p>
	</div>
</section>

<!-- garbage sections -->
<section
	class="min-h-screen w-full py-12 bg-gradient-to-r from-gray-50 opacity-95 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center"
>
	<div class="container px-4 md:px-6">
		<div class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
			<div
				class="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300"
			>
				<div>
					<h3 class="text-2xl font-bold text-center">Basic</h3>
					<div class="mt-4 text-center text-zinc-600 dark:text-zinc-400">
						<span class="text-4xl font-bold">$29</span>/ month
					</div>
					<ul class="mt-4 space-y-2">
						<li class="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
							>
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							720p Video Rendering
						</li>
						<li class="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
							>
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							2GB Cloud Storage
						</li>
						<li class="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
							>
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							Basic Video Templates
						</li>
					</ul>
				</div>
				<div class="mt-6">
					<button
						class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
					>
						Get Started
					</button>
				</div>
			</div>
			<div
				class="relative flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-purple-500"
			>
				<div
					class="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				>
					Popular
				</div>
				<div>
					<h3 class="text-2xl font-bold text-center">Pro</h3>
					<div class="mt-4 text-center text-zinc-600 dark:text-zinc-400">
						<span class="text-4xl font-bold">$59</span>/ month
					</div>
					<ul class="mt-4 space-y-2">
						<li class="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class=" text-white text-2xs bg-green-500 rounded-full mr-2 p-1"
							>
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							1080p Video Rendering
						</li>
						<li class="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
							>
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							10GB Cloud Storage
						</li>
						<li class="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
							>
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							Premium Video Templates
						</li>
						<li class="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
							>
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							Collaboration Tools
						</li>
					</ul>
				</div>
				<div class="mt-6">
					<button
						class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-gradient-to-r from-pink-500 to-purple-500"
					>
						Get Started
					</button>
				</div>
			</div>
			<div
				class="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300"
			>
				<div>
					<h3 class="text-2xl font-bold text-center">Enterprise</h3>
					<div class="mt-4 text-center text-zinc-600 dark:text-zinc-400">
						<span class="text-4xl font-bold">$99</span>/ month
					</div>
					<ul class="mt-4 space-y-2">
						<li class="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
							>
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							4K Video Rendering
						</li>
						<li class="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
							>
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							Unlimited Cloud Storage
						</li>
						<li class="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
							>
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							Custom Video Templates
						</li>
						<li class="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
							>
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							Advanced Collaboration Tools
						</li>
						<li class="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class=" text-white text-xs bg-green-500 rounded-full mr-2 p-1"
							>
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							Dedicated Support
						</li>
					</ul>
				</div>
				<div class="mt-6">
					<button
						class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
					>
						Get Started
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="bg-white my-32 px-40 opacity-9 flex flex-wrap justify-center items-center gap-20">
	<div
		class="border bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200"
		data-v0-t="card"
	>
		<img
			alt="profile"
			class="object-cover w-full"
			height="320"
			src={maleCharacter}
			style="aspect-ratio:320/320;object-fit:cover"
			width="320"
		/>
		<div class="p-4">
			<h2 class="text-2xl font-bold hover:text-gray-700 transition-all duration-200">
				Emily Johnson
			</h2>
			<h3 class="text-gray-500 hover:text-gray-600 transition-all duration-200">
				Front-end Developer
			</h3>
			<p class="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200">
				Passionate about creating interactive user interfaces.
			</p>
			<div class="flex mt-4 space-x-2">
				<button
					class="inline-flex items-center justify-center text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-9 rounded-md px-3 w-full hover:bg-gray-700 hover:text-white transition-all duration-200"
				>
					Follow
				</button>
				<button
					class="inline-flex items-center justify-center text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent h-9 rounded-md px-3 w-full hover:border-gray-700 hover:text-gray-700 transition-all duration-200"
				>
					Message
				</button>
			</div>
		</div>
	</div>
	<div
		class="border bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200"
		data-v0-t="card"
	>
		<img
			alt="profile"
			class="object-cover w-full"
			height="320"
			src={maleCharacter}
			style="aspect-ratio:320/320;object-fit:cover"
			width="320"
		/>
		<div class="p-4">
			<h2 class="text-2xl font-bold hover:text-gray-700 transition-all duration-200">
				Emily Johnson
			</h2>
			<h3 class="text-gray-500 hover:text-gray-600 transition-all duration-200">
				Front-end Developer
			</h3>
			<p class="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200">
				Passionate about creating interactive user interfaces.
			</p>
			<div class="flex mt-4 space-x-2">
				<button
					class="inline-flex items-center justify-center text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-9 rounded-md px-3 w-full hover:bg-gray-700 hover:text-white transition-all duration-200"
				>
					Follow
				</button>
				<button
					class="inline-flex items-center justify-center text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent h-9 rounded-md px-3 w-full hover:border-gray-700 hover:text-gray-700 transition-all duration-200"
				>
					Message
				</button>
			</div>
		</div>
	</div>
	<div
		class="border bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200"
		data-v0-t="card"
	>
		<img
			alt="profile"
			class="object-cover w-full"
			height="320"
			src={maleCharacter}
			style="aspect-ratio:320/320;object-fit:cover"
			width="320"
		/>
		<div class="p-4">
			<h2 class="text-2xl font-bold hover:text-gray-700 transition-all duration-200">
				Emily Johnson
			</h2>
			<h3 class="text-gray-500 hover:text-gray-600 transition-all duration-200">
				Front-end Developer
			</h3>
			<p class="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200">
				Passionate about creating interactive user interfaces.
			</p>
			<div class="flex mt-4 space-x-2">
				<button
					class="inline-flex items-center justify-center text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-9 rounded-md px-3 w-full hover:bg-gray-700 hover:text-white transition-all duration-200"
				>
					Follow
				</button>
				<button
					class="inline-flex items-center justify-center text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent h-9 rounded-md px-3 w-full hover:border-gray-700 hover:text-gray-700 transition-all duration-200"
				>
					Message
				</button>
			</div>
		</div>
	</div>
	<div
		class="border bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200"
		data-v0-t="card"
	>
		<img
			alt="profile"
			class="object-cover w-full"
			height="320"
			src={maleCharacter}
			style="aspect-ratio:320/320;object-fit:cover"
			width="320"
		/>
		<div class="p-4">
			<h2 class="text-2xl font-bold hover:text-gray-700 transition-all duration-200">
				Emily Johnson
			</h2>
			<h3 class="text-gray-500 hover:text-gray-600 transition-all duration-200">
				Front-end Developer
			</h3>
			<p class="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200">
				Passionate about creating interactive user interfaces.
			</p>
			<div class="flex mt-4 space-x-2">
				<button
					class="inline-flex items-center justify-center text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-9 rounded-md px-3 w-full hover:bg-gray-700 hover:text-white transition-all duration-200"
				>
					Follow
				</button>
				<button
					class="inline-flex items-center justify-center text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent h-9 rounded-md px-3 w-full hover:border-gray-700 hover:text-gray-700 transition-all duration-200"
				>
					Message
				</button>
			</div>
		</div>
	</div>
</section>
