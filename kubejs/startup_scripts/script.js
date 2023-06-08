// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

StartupEvents.registry('block', event => {
	event.create('incomplete_lv_hull').displayName('Incomplete LV Machine Hull')
	event.create('incomplete_lv_casing').displayName('Incomplete LV Machine Casing')
})