var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK'
    }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy'
    }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  }
];

let grouped = {};

for (let race of motoGP) {
  let country = race.winner.country;
  let winnerName = `${race.winner.firstName} ${race.winner.lastName}`;
  let winLocation = `${race.circuit}, ${race.location}`;

  if (!grouped[country]) {
    grouped[country] = {
      winningCircuits: [],
      totalWin: 0
    };
  }

  grouped[country].winningCircuits.push({
    name: winnerName,
    winLocation: winLocation
  });

  grouped[country].totalWin++;
}

// === tanpa menggunakan json ===
console.log("{");
for (let country in grouped) {
  console.log(`  ${country}: {`);
  console.log(`    winningCircuits: [`);

  grouped[country].winningCircuits.forEach((item, index) => {
    const koma = (index === grouped[country].winningCircuits.length - 1) ? '' : ',';
    console.log(`      { name: '${item.name}', winLocation: '${item.winLocation}' }${koma}`);
  });

  console.log(`    ],`);
  console.log(`    totalWin: ${grouped[country].totalWin}`);
  console.log(`  },`);
}
console.log("}");
