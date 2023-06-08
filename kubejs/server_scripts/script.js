// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	event.recipes.createSequencedAssembly(
		[
			'gtceu:hull_casing_lv'
		],
		'gtceu:plate.steel', 
		[
			event.recipes.createDeploying('kubejs:incomplete_lv_casing', ['kubejs:incomplete_lv_casing', 'gtceu:plate.steel']),
			event.recipes.createFilling('kubejs:incomplete_lv_casing', ['kubejs:incomplete_lv_casing', 'gtceu:nugget.rubber'])
		]
	).transitionalItem('kubejs:incomplete_lv_casing').loops(5)
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})