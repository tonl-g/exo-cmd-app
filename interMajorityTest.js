/* Le programme précédent ne fonctionnera que dans les pays ou la majorité est à 18 ans.
Afin que votre programme puisse fonctionner pour tous les pays, réécrivez le programme précédent pour qu'il puisse prendre un argument à son lancement en ligne de commande qui correspondra à l'âge de la majorité dans le pays de l'utilisateur du programme.
Un utilisateur américain lancerait le programme avec la commande:

% node interMajorityTest.js 21
Un utilisateur francais lancerait le programme avec la commande:

% node interMajorityTest.js 18
Si l'âge est inférieur à l'argument passé en ligne de commande lui afficher avec le prenom et nom correspondant:

Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter
Si l'âge est supérieur ou égal à l'argument passé en ligne de commande lui afficher:

prenom nom, vous êtes majeur, vous pouvez voter
Utiliser readline-sync pour l'interaction avec l'utilisateur. */

const readlineSync = require('readline-sync')
const chalk = require('chalk')

let start = readlineSync.question('please usage: node interMajorityTest.js firstName, lastName and age')

const americanCanVote = (usFirstName, usLastName, usAge) => {
    if (usAge < 21) {
    console.log(chalk.red(`Désolé, étant américain ${usFirstName} ${usLastName}, vous êtes mineur, vous ne pouvez pas voter!`))
} else { (usAge >= 21) 
    console.log(chalk.blue(console.log(`Etant américain ${usFirstName} ${usLastName}, vous êtes majeur, vous pouvez voter!`)))
}
}

  let usFirstName = (process.argv[2])
  let usLastName = (process.argv[3])
  let usAge = (process.argv[4])

  const frenchCanVote = (frFirstName, frLastName, frAge) => {
    if (frAge < 18) {
    console.log(chalk.red(`Désolé, étant français ${frFirstName} ${frLastName}, vous êtes mineur, vous ne pouvez pas voter!`))
} else { (frAge >= 18) 
    console.log(chalk.blue(console.log(`Etant français ${frFirstName} ${frLastName}, vous êtes majeur, vous pouvez voter!`)))
}
}

if (process.argv.length !== 5) {
    console.log(chalk.red('usage: node majorityTest.js firstName, lastName and age'))
    process.exit(1)
  }

  if (isNaN(process.argv[4])) {
    console.log(chalk.red(`Error: ${process.argv[2]} is not a number.`))
    process.exit(1)
  }

  let frFirstName = (process.argv[2])
  let frLastName = (process.argv[3])
  let frAge = (process.argv[4])

  let choix = ['American', 'French']
  let index = readlineSync.keyInSelect(choix, 'Please select nationality between american or french')
  switch (index) {
    case 0:
      console.log('You are american!')
      break
    case 1:
      console.log('You are french!')
      break
    default:
      console.log('Please select nationality between american or french')
  }

if (index === 0) {
    americanCanVote(usFirstName, usLastName, usAge) 
    } else { (index === 1) 
        frenchCanVote(frFirstName, frLastName, frAge)
  }

