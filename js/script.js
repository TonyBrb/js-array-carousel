const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


const slider = document.querySelector('.col-10');

let contatore = 0;

for(let i = 0; i < items.length; i++){

  console.log(items[i]);
  // creo un div per ogni immagine
  const item = document.createElement('div');

  // gli aggiungo la classe item
  item.className = 'item';

  // solo se i è = contatore aggiungo anche active
  if(i === contatore){
    item.classList.add('active');
  }

  //inserisco il tag img dentro il div creato
  item.innerHTML = `<img src="${items[i]}" alt="">`;

  console.log(item);

  // append a slider
  slider.append(item);

}

const item = document.getElementsByClassName('item');

console.log('items',item);
console.log('contatore',contatore);
console.log('item in base al contatore', item[contatore]);

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click',function(){
  console.log('contatore',contatore);
  console.log(items[contatore]);
  item[contatore].classList.remove('active');
  console.log(item[contatore]);

  contatore--;
  // se il contatore è < 0 prende l'ultmo elemento dell'array (array.length - 1)
  if(contatore < 0) contatore = items.length - 1;

  console.log('contatore',contatore);
  item[contatore].classList.add('active');
  console.log(item[contatore]);
});

next.addEventListener('click',function(){
  console.log('contatore',contatore);
  console.log(item[contatore]);
  item[contatore].classList.remove('active');
  console.log(item[contatore]);

  contatore++;
  // se il contatore è maggiore della lunghezza dell'array ricomincio da 0
  if(contatore > items.length - 1) contatore = 0;
  item[contatore].classList.add('active');
  console.log(item[contatore]);
});

