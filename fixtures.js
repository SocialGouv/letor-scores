module.exports = {
  badPrediction1: {
    expectedScores: { a: 4, b: 2, c: 2, d: 1 },
    k: 3,
    predictions: ["e", "f", "g", "h"],
  },
  badRanking1: {
    expectedScores: { a: 4, b: 2, c: 2, d: 1 },
    k: 3,
    predictions: ["e", "a", "b", "d"],
  },
  cdtn1: {
    expectedScores: {
      "/code-du-travail/l1221-1": 5,
      "/code-du-travail/l1221-2": 5,
      "/code-du-travail/l1221-3": 5,
    },
    k: 3,
    predictions: [
      "/code-du-travail/l1132-1",
      "/code-du-travail/l1221-2",
      "/code-du-travail/l1225-9",
    ],
  },
  emptyPrediction: {
    expectedScores: { a: 4, b: 2, c: 2, d: 1 },
    k: 3,
    predictions: [],
  },
  floatDcg: {
    expectedScores: {
      "/fiche-ministere-travail/la-periode-dessai-peut-elle-etre-rompue": 5,
      "/fiche-ministere-travail/la-periode-dessai-quelle-est-la-duree-de-la-periode-dessai": 1,
      "/fiche-ministere-travail/le-contrat-de-professionnalisation-quelles-sont-les-modalites-de-rupture-du-contrat-de-professionnalisation-et-quelles-sont-les-demarches-a-effectuer": 1,
      "/fiche-service-public/periode-dessai": 3,
      "/fiche-service-public/quest-ce-quune-periode-probatoire-pour-le-salarie": 2,
      "/fiche-service-public/rupture-conventionnelle": 1,
      "/modeles-de-courriers/rupture-de-periode-dessai": 5,
      "/modeles-de-courriers/rupture-du-contrat-en-periode-dessai": 5,
      "/themes/rupture-de-contrat": 1,
    },
    k: 3,
    predictions: [
      "/modeles-de-courriers/rupture-de-periode-dessai",
      "/fiche-service-public/periode-dessai",
      "/modeles-de-courriers/rupture-du-contrat-en-periode-dessai",
      "/fiche-ministere-travail/la-periode-dessai-peut-elle-etre-rompue",
      "/fiche-service-public/quest-ce-quune-periode-probatoire-pour-le-salarie",
      "/fiche-service-public/rupture-conventionnelle",
      "/fiche-service-public/arret-maladie-pendant-la-periode-dessai-quelles-sont-les-regles",
      "/fiche-ministere-travail/le-contrat-de-professionnalisation-quelles-sont-les-modalites-de-rupture-du-contrat-de-professionnalisation-et-quelles-sont-les-demarches-a-effectuer",
      "/themes/rupture-de-contrat",
      "/fiche-ministere-travail/la-periode-dessai-quelle-est-la-duree-de-la-periode-dessai",
      "/fiche-ministere-travail/la-periode-dessai-quelles-sont-les-conditions-pour-quil-existe-une-periode-dessai",
      "/code-du-travail/d1237-5",
      "/fiche-ministere-travail/lentree-en-apprentissage-existe-t-il-une-periode-dessai",
      "/fiche-ministere-travail/la-rupture-conventionnelle-collective-comment-la-rupture-conventionnelle-collective-est-elle-mise-en-oeuvre",
      "/code-du-travail/l6222-18",
      "/code-du-travail/l1237-13",
      "/code-du-travail/l1237-19-2",
      "/code-du-travail/l1237-18",
      "/code-du-travail/l1237-11",
      "/fiche-ministere-travail/cui-dispositions-generales-quelles-sont-les-dispositions-applicables-en-cas-de-suspension-ou-de-rupture-du-contrat",
      "/fiche-ministere-travail/la-rupture-conventionnelle-collective-laccord-de-rupture-conventionnelle-collective-peut-il-etre-conteste",
      "/code-du-travail/l1237-18-2",
      "/code-du-travail/l1242-11",
      "/fiche-ministere-travail/contrat-starter-que-se-passe-t-il-en-cas-de-rupture-dun-contrat-starter",
      "/fiche-ministere-travail/la-rupture-conventionnelle-du-contrat-de-travail-a-duree-indeterminee-en-quoi-consiste-la-rupture-conventionnelle",
    ],
  },
  goodRanking1: {
    expectedScores: { a: 4, b: 2, c: 2, d: 1 },
    k: 3,
    predictions: ["a", "b", "d"],
  },
  goodRanking2: {
    expectedScores: { a: 4, b: 2, c: 2, d: 1 },
    k: 5,
    predictions: ["a", "b", "d"],
  },
  idealDcgHigh: {
    expectedScores: {
      a: 5,
      e: 8, // simultaneously assert e has no impact
    },
    k: 3,
    predictions: ["a", "b", "d"],
  },
  idealDcgLow: {
    expectedScores: {
      a: 1,
    },
    k: 3,
    predictions: ["a", "b", "d"],
  },
  moreDocuments1: {
    expectedScores: { a: 4, b: 2, c: 2, d: 1 },
    k: 3,
    predictions: ["a", "f", "c", "h"],
  },
  moreDocuments2: {
    expectedScores: { a: 4, b: 2, c: 2, d: 1 },
    k: 3,
    predictions: ["a", "f", "c", "h", "d", "b"],
  },
  oneGoodResult: {
    expectedScores: { a: 5 },
    k: 2,
    predictions: ["a", "b", "d"],
  },
  perfect1: {
    expectedScores: { a: 5, b: 3 },
    k: 2,
    predictions: ["a", "e", "f", "g", "b"],
  },
  perfectPrecision1: {
    expectedScores: { a: 5, b: 3, e: 5, f: 5, g: 5 },
    k: 2,
    predictions: ["a", "g"],
  },
  perfectPrecisionBad: {
    expectedScores: { a: 5, w: 3 },
    k: 2,
    predictions: ["d", "w", "a"],
  },
  perfectPrecisionGood: {
    expectedScores: { a: 5, w: 3 },
    k: 2,
    predictions: ["d", "a", "w"],
  },
  relativeDcgHigh: {
    expectedScores: {
      a: 5,
      b: 3,
      c: 5,
    },
    k: 3,
    predictions: ["a", "b"],
  },
  relativeDcgLow: {
    expectedScores: {
      a: 3,
      b: 2,
      c: 5,
    },
    k: 3,
    predictions: ["a", "b"],
  },
  sorted1: {
    expectedScores: { a: 3, b: 2, c: 1 },
    k: 2,
    predictions: ["a", "b", "w"],
  },
  sorted2: {
    expectedScores: {
      a: 3,
      b: 2,
      c: 1,
    },
    k: 2,
    predictions: ["a", "b", "w"],
  },
};
