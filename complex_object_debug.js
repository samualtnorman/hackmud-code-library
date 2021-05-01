// TODO:
	//   - restructure to be non-recursive
	//   - Map, Set, WeakMap, WeakSet
	//   - Symbols (as keys and as values)
	//   - only don't process keys and values of object if it causes a cycle

function complexObjectDebug(value) {
	const queue = [ { i: value, o: undefined } ]
	const objectMap = new WeakMap
	const symbols = Object.create(null)
	let referenceI = 0

	Symbol.iterator

	for (const job of queue) {
		switch (typeof job.i) {
			case "undefined": {
				job.o = { type: "undefined" }
			} break

			case "symbol": {
				const object = objectMap.get(job.i)
				job.o = {
					type: "symbol",
					description: job.i.description == undefined ? { type: "undefined" } : job.i.description
				}
			} break

			case "function": {

			} break

			case "object": {

			} break

			default: {
				job.o = job.i
			}
		}
	}

	return queue[0].o

	// if (typeof value != "object" || !value)
	// 	return value

	// let o

	// if (o = antiCyclic.weakMap.get(value)) {
	// 	console.log("test")
	// 	return { cyclic: o.cyclicReference = antiCyclic.i++ }
	// }

	// if (value instanceof Error) {
	// 	try {
	// 		return {
	// 			type: "error",
	// 			name: value.name,
	// 			message: value.message,
	// 			stack: value.stack
	// 		}
	// 	} catch {
	// 		return {
	// 			type: "error",
	// 			getPropertiesThrew: true
	// 		}
	// 	}
	// }

	// if (typeof value == "function") {
	// 	return {
	// 		type: "function",
	// 		name: value.name,
	// 		length: value.length
	// 	}
	// }

	// o = {}

	// antiCyclic.weakMap.set(value, o)

	// if ("constructor" in value) {
	// 	let constructor

	// 	try { constructor = value.constructor }
	// 	catch { o.getConstructorThrew = true }

	// 	if (constructor)
	// 		o.constructor = complexObjectDebug(value.constructor, antiCyclic)
	// }

	// if ("toString" in value) {
	// 	try {
	// 		if (typeof value.toString == "function") {
	// 			const string = value.toString()

	// 			if (typeof string == "string")
	// 				o.toString = string
	// 		}
	// 	} catch {
	// 		o.toStringThrew = true
	// 	}
	// }

	// for (const key in value) {
	// 	let childValue

	// 	try { childValue = value[key] }
	// 	catch {
	// 		o[`_${key}`] = { getPropertyThrew: true }
	// 		continue
	// 	}

	// 	o[`_${key}`] = complexObjectDebug(childValue, antiCyclic)
	// }

	// return o
}
