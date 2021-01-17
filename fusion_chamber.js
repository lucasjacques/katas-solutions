const burner = (c=0, h=0, o=0) => {
  const elementsStash = { c, h, o }

  const substances = {
    'water': 0,
    'co2':0,
    'methane':0
  }
  
  substances.water = consumeWater(elementsStash)

  if (elementsStash.c >= 1 && elementsStash.o >= 2) {
    const excessO = elementsStash.o - (elementsStash.c*2)
    if (excessO >= 0) {
      substances['co2'] = elementsStash.c
      elementsStash.o -= elementsStash.c*2
      elementsStash.c -= elementsStash.c
    } else if (excessO < 0) {
      const co2Quantity = Math.floor(elementsStash.o/2)
      substances['co2'] = co2Quantity
      elementsStash.o -= co2Quantity*2
      elementsStash.c -= co2Quantity
    }
  }
  if (elementsStash.c >= 1 && elementsStash.h >= 4) {
    const excessH = elementsStash.h - (elementsStash.c*4)
    if (excessH >= 0) {
      substances['methane'] = elementsStash.c
      elementsStash.h -= elementsStash.c*4
      elementsStash.c -= elementsStash.c
    } else if (excessH < 0) {
      const methaneQuantity = Math.floor(elementsStash.h/4)
      substances['methane'] = methaneQuantity
      elementsStash.h -= methaneQuantity*4
      elementsStash.c -= methaneQuantity
    }
  }

  return [substances.water, substances.co2, substances.methane];
}

const consumeWater = (elementsStash) => {
  let water = 0
  if (elementsStash.h >= 2 && elementsStash.o >= 1) {
    const excessH = elementsStash.h - (elementsStash.o*2)
    if (excessH >= 0) {
      water = elementsStash.o
      elementsStash.h -= elementsStash.o*2
      elementsStash.o -= elementsStash.o
    } else if (excessH < 0) {
      water = Math.floor(elementsStash.h/2)
      elementsStash.h -= water*2
      elementsStash.o -= water
    }
  }
  return water
}


console.log(burner(939, 3, 694))

/* TESTS
 * burner(45, 11, 100), [5, 45, 0]
 * burner(354, 1023230, 0), [0, 0, 354]
 * burner(939, 3, 694), [1, 346, 0]
 * burner(215, 41, 82100), [20, 215, 0]
 * burner(113, 0, 52), [0, 26, 0]
 */
