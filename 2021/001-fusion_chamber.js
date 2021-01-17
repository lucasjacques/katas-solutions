const burner = (c=0, h=0, o=0) => {
  const elementsStash = { c, h, o }

  const substances = {
    water: { 
      generatedMolecules: 0,
      composedBy: {
        h:2,
        o:1
      } 
    },
    co2: { 
      generatedMolecules: 0,
      composedBy: {
        c:1,
        o:2
      } 
    },
    methane: { 
      generatedMolecules: 0,
      composedBy: {
        c:1,
        h:4
      } 
    }
  }
  
  substances.water.generatedMolecules = consumeWater(elementsStash)
  substances.co2.generatedMolecules = consumeCo2(elementsStash)
  substances.methane.generatedMolecules = consumeMethane(elementsStash)

  return [
    substances.water.generatedMolecules,
    substances.co2.generatedMolecules,
    substances.methane.generatedMolecules
  ];
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

const consumeCo2 = (elementsStash) => {
  let co2 = 0
  if (elementsStash.c >= 1 && elementsStash.o >= 2) {
    const excessO = elementsStash.o - (elementsStash.c*2)
    if (excessO >= 0) {
      co2 = elementsStash.c
      elementsStash.o -= elementsStash.c*2
      elementsStash.c -= elementsStash.c
    } else if (excessO < 0) {
      co2 = Math.floor(elementsStash.o/2)
      elementsStash.o -= co2*2
      elementsStash.c -= co2
    }
  }
  return co2
}

const consumeMethane = (elementsStash) => {
  let methane = 0
  if (elementsStash.c >= 1 && elementsStash.h >= 4) {
    const excessH = elementsStash.h - (elementsStash.c*4)
    if (excessH >= 0) {
      methane = elementsStash.c
      elementsStash.h -= elementsStash.c*4
      elementsStash.c -= elementsStash.c
    } else if (excessH < 0) {
      methane = Math.floor(elementsStash.h/4)
      elementsStash.h -= methane*4
      elementsStash.c -= methane
    }
  }
  return methane
}

console.log(burner(215, 41, 82100))

/* TESTS
 * burner(45, 11, 100), [5, 45, 0]
 * burner(354, 1023230, 0), [0, 0, 354]
 * burner(939, 3, 694), [1, 346, 0]
 * burner(215, 41, 82100), [20, 215, 0]
 * burner(113, 0, 52), [0, 26, 0]
 */
