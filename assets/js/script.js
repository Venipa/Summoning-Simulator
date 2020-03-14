// Array of objects with monsters
const monsters = [
  {
    name: 'Cow Girl',
    awakenName: 'Loren',
    element: 'Light',
    stars: 3,
    image: '/assets/img/monsters/loren.png'
  },
  {
    name: 'Hell Lady',
    awakenName: 'Beth',
    element: 'Water',
    stars: 5,
    image: '/assets/img/monsters/beth.png'
  },
  {
    name: 'Beast Monk',
    awakenName: 'Rahul',
    element: 'Dark',
    stars: 5,
    image: '/assets/img/monsters/rahul.png'
  },
  {
    name: 'Panda Warrior',
    awakenName: 'Feng Yan',
    element: 'Wind',
    stars: 5,
    image: '/assets/img/monsters/feng_yan.png'
  }
]

// What happens when you click the summon button
document.getElementById('summon').addEventListener('click', function() {
  document.getElementById('loading-summon').style.display = 'block'; // Display the loading image
  document.getElementById('monster-summon').style.display = 'none'; // Hide the monster name so it doesn't overlap the loading image
  document.getElementById('monster-label').style.display = 'none'; // Hide the loading image
  setTimeout(function() {
    document.getElementById('loading-summon').style.display = 'none'; // Hide the loading image
    document.getElementById('monster-summon').style.display = 'block'; // Display the monster name again since we hid it

    // Get a random monster from the object array
    let randomMonster = monsters[Math.floor(Math.random() * monsters.length)];
    document.getElementById('monster-name').innerHTML = randomMonster.name;

    // Get the awaken name from the object array
    let randomMonsterAwaken = randomMonster.awakenName;
    document.getElementById('monster-awaken').innerHTML = randomMonsterAwaken;

    // Get the element from the object array
    let randomMonsterElement = randomMonster.element;

    // Get the stars from the object array
    let randomMonsterStars = randomMonster.stars;
    switch(randomMonsterStars) {
      case 1:
        console.log('1 Star');
        break;
      case 2:
        console.log('2 Star');
        break;
      case 3:
        console.log('3 Star');
        break;
      case 4:
        console.log('4 Star');
        break;
      case 5:
        console.log('5 Star');
        break;
      default:
        console.log('Invalid stars');
    }

    // Get the image from the object array
    let randomMonsterImage = randomMonster.image;
    document.getElementById('monster-image').src=randomMonsterImage;

  }, 500)
});
