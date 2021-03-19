/* Ecrivez un qcm de 5 questions. Le joueur devra répondre aux questions en entrant le nombre correspondant à la bonne réponse. A la fin du qcm vous lui donnerez sa note qui correspondra au nombre de bonnes réponses sur les 5 questions. Je vous propose les 5 questions et les choix possibles, mais vous pouvez créer les votre si vous voulez:

Question 1: Le C++ est un:
1: langage => réponse attendue
2: compilateur

Question 2: TypeScript est une évolution de Javascript:
1: Vrai => réponse attendue
2: Faux

Question 3: Lire les cours avant de faire les exercices est inutile:
1: Vrai
2: Faux => réponse attendue

Question 4: react.js a été developpé par Google:
1: Vrai
2: Faux => réponse attendue

Question 5: Ethereum est une blockchain publique:
1: Vrai => réponse attendue
2: Faux

Utiliser readline-sync pour l'interaction avec l'utilisateur. */

const readlineSync = require('readline-sync')
const chalk = require('chalk')

let question1 = ['Langage', 'Compilateur']
  let index1 = readlineSync.keyInSelect(question1, 'Question 1: Le C++ est un:')
  switch (index1) {
    case 0:
      console.log('Langage')
      break
    case 1:
      console.log('Compilateur')
      break
    default:
      console.log('Please select between réponse 1 or réponse 2')
  }

  let question2 = ['Vrai', 'Faux']
  let index2 = readlineSync.keyInSelect(question2, 'TypeScript est une évolution de Javascript:')
  switch (index2) {
    case 0:
      console.log('Vrai')
      break
    case 1:
      console.log('Faux')
      break
    default:
      console.log('Please select between réponse 1 or réponse 2')
  }

  let question3 = ['Vrai', 'Faux']
  let index3 = readlineSync.keyInSelect(question3, 'Lire les cours avant de faire les exercices est inutile:')
  switch (index3) {
    case 0:
      console.log('Vrai')
      break
    case 1:
      console.log('Faux')
      break
    default:
      console.log('Please select between réponse 1 or réponse 2')
  }

  let question4 = ['Vrai', 'Faux']
  let index4 = readlineSync.keyInSelect(question4, 'react.js a été developpé par Google:')
  switch (index4) {
    case 0:
      console.log('Vrai')
      break
    case 1:
      console.log('Faux')
      break
    default:
      console.log('Please select between réponse 1 or réponse 2')
  }

  let question5 = ['Vrai', 'Faux']
  let index5 = readlineSync.keyInSelect(question5, 'Ethereum est une blockchain publique:')
  switch (index5) {
    case 0:
      console.log('Vrai')
      break
    case 1:
      console.log('Faux')
      break
    default:
      console.log('Please select between réponse 1 or réponse 2')
  }

  const countPoint = (counter) => {
    let count = 0
    if (index1 === 0) {
      count += 1
      if (index2 === 0) 
        count += 1
        if (index3 === 1) 
          count += 1
          if (index4 === 1) 
            count += 1
            if (index5 === 0) 
              count += 1
        console.log(chalk.blue(`Vous avez ${count} points sur 5!`))
    } else {
      console.log(chalk.blue(`Vous avez ${count} points sur 5!`))
    }
  }
    
countPoint()


