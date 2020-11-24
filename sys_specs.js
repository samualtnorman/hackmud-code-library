function sysSpecs() {
		const specs = #hs.sys.specs()

		if (typeof specs != "string")
			return specs

		const [
			classArt0,
			classArt1,
			classArt2,
			,
			nameClassLine,
			,
			tier,
			,
			hardlineCount,
			nextHardline,
			,
			classPointsLine,
			,
			channelCount,
			,
			maxGC,
			,,
			upgradeSlots,
			loadedLine,
			,,
			publics,
			scriptSlots,
		] = specs.split("\n")

		const [ , architect, infiltrator, executive, junkrack, scavenger ] = classPointsLine.split("V")
		const [ slots, slotsMax ] = upgradeSlots.slice(7).split("/").map(Number)
		const [ loaded, loadedMax ] = loadedLine.slice(8).split("/").map(Number)
		const [ user, className ] = nameClassLine.split(" ")

		return {
			ok: true,
			classArt: [
				classArt0,
				classArt1,
				classArt2
			].join("\n"),
			user: user.slice(2, -1),
			class: className.slice(3, -2),
			tier: Number(tier.slice(6)),
			hardlineCount: Number(hardlineCount.slice(16)),
			nextHardline: Number(nextHardline.slice(20, -2)),
			classPoints: {
				architect: Number(architect.slice(0, -16)),
				infiltrator: Number(infiltrator.slice(0, -19)),
				executive: Number(executive.slice(0, -17)),
				junkrack: Number(junkrack.slice(0, -17)),
				scavenger: Number(scavenger.slice(0, -3))
			},
			channelCount: Number(channelCount.slice(15)),
			maxGC: maxGC.slice(11),
			upgrades: {
				slots,
				slotsMax,
				loaded,
				loadedMax
			},
			scripts: {
				publics: Number(publics.slice(9)),
				slots: Number(scriptSlots.slice(7))
			}
		}
	}
