const scrollMystical = monsters.filter(function(x) {
  return ['Fire', 'Wind', 'Water'].includes(x.element);
});

const scrollFire = monsters.filter(function(x) {
  return x.element === "Fire";
});

const scrollWater = monsters.filter(function(x) {
  return x.element === "Water";
});

const scrollWind = monsters.filter(function(x) {
  return x.element === "Wind";
});

const scrollLightDark = monsters.filter(function(x) {
  return ['Light', 'Dark'].includes(x.element);
});

const scrollLegendary = monsters.filter(function(x) {
  return [4, 5].includes(x.stars) && ['Fire', 'Water', 'Wind'].includes(x.element);
});

// Total amount of summons
let statsTotal = 0;
let statsThreeStar = 0;
let statsFourStar = 0;
let statsFiveStar = 0;
let statsFire = 0;
let statsWater = 0;
let statsWind = 0;
let statsLight = 0;
let statsDark = 0;

// Latest summons
let latestSummons = [];

// Select scroll
const scrollList = document.getElementById('scrolls');
const scrollType = document.getElementsByTagName('li');

for (let i = 0; i < scrollType.length; i++) {
  scrollType[i].addEventListener('click', function() {
    let current = document.getElementsByClassName('active');

    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '');
    }

    this.className += ' active';
  })
};

// What happens when you click the summon button

document.getElementById('summon').addEventListener('click', function() {
  if (document.getElementById('legendary').classList.contains('active')) {

    let summonLegendary = scrollLegendary[Math.floor(Math.random() * scrollLegendary.length)];
    console.log(summonLegendary.awakenName);

  } else if (document.getElementById('ld').classList.contains('active')) {
    console.log('ld');
  } else if (document.getElementById('mystical').classList.contains('active')) {

    let random = Math.random() * 915;
    if (random <= 5) {

      // 5 star

    } else if (random <= 80) {

      // 4 star

    } else if (random <= 915) {

      // 3 star

    } else {
      console.log('error');
    }

  } else if (document.getElementById('fire').classList.contains('active')) {
    console.log('fire');
  } else if (document.getElementById('water').classList.contains('active')) {
    console.log('water');
  } else if (document.getElementById('wind').classList.contains('active')) {
    console.log('wind');
  } else {
    alert('Select a scroll before summoning!');
  }
});

let summonMystical = scrollMystical[Math.floor(Math.random() * scrollMystical.length)];
console.log(summonMystical);

/*
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
        document.getElementById('monster-stars').innerHTML = '<div class="star"></div>'
        break;
      case 2:
        document.getElementById('monster-stars').innerHTML = '<div class="star"></div><div class="star"></div>'
        break;
      case 3:
        document.getElementById('monster-stars').innerHTML = '<div class="star"></div><div class="star" style="margin-top:-10px"></div><div class="star"></div>'
        break;
      case 4:
        document.getElementById('monster-stars').innerHTML = '<div class="star"></div><div class="star" style="margin-top:-10px"></div><div class="star" style="margin-top:-10px"></div><div class="star"></div>'
        break;
      case 5:
        document.getElementById('monster-stars').innerHTML = '<div class="star"></div><div class="star" style="margin-top:-10px"></div><div class="star" style="margin-top:-15px"></div><div class="star" style="margin-top:-10px"></div><div class="star"></div>'
        break;
      default:
        console.log('Invalid stars');
    }

    // Get the image from the object array
    let randomMonsterImage = randomMonster.image;
    document.getElementById('monster-image').src=randomMonsterImage;

    // Update Stats
    function updateStats() {
      // Update total stats
      statsTotal++;
      document.getElementById('stats-total').innerText = statsTotal;

      // Update element stats
      let statsElement = randomMonster.element;
      switch(statsElement) {
        case 'Fire':
          statsFire++;
          document.getElementById('stats-fire').innerText = statsFire;
          break;
        case 'Water':
          statsWater++;
          document.getElementById('stats-water').innerText = statsWater;
          break;
        case 'Wind':
          statsWind++;
          document.getElementById('stats-wind').innerText = statsWind;
          break;
        case 'Light':
          statsLight++;
          document.getElementById('stats-light').innerText = statsLight;
          break;
        case 'Dark':
          statsDark++;
          document.getElementById('stats-dark').innerText = statsDark;
          break;
      }

      // Update star stats
      let statsStars = randomMonster.stars;
      switch(statsStars) {
        case 3:
          statsThreeStar++;
          document.getElementById('stats-threestar').innerText = statsThreeStar;
          break;
        case 4:
          statsFourStar++;
          document.getElementById('stats-fourstar').innerText = statsFourStar;
          break;
        case 5:
          statsFiveStar++;
          document.getElementById('stats-fivestar').innerText = statsFiveStar;
          break;
      }
    }

    // Update summon counter
    updateStats();

    // Display latest summoned monsters
    latestSummons.push(randomMonster);

  }, 500)
});
*/
