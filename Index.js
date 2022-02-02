const Menu = document.getElementById('MenuP');
const HeaderM = document.getElementById('HeaderM');
const btnMenu = document.getElementById('menu');
const btnClose = document.getElementById('close');

const openAndClose = function () {
  if (Menu.classList.contains('mobileMenuInvis')) {
    Menu.classList.remove('mobileMenuInvis');
    Menu.classList.add('mobileMenuVis');
    HeaderM.classList.add('mobileMenuInvis');
  } else if (Menu.classList.contains('mobileMenuVis')) {
    Menu.classList.add('mobileMenuInvis');
    Menu.classList.remove('mobileMenuVis');
    HeaderM.classList.remove('mobileMenuInvis');
  }
};

btnMenu.addEventListener('click', openAndClose);
btnClose.addEventListener('click', openAndClose);

const artist = [
  {
    image: 'Images/jcole.jpg',
    name: 'J. Cole',
    descriptionM:
      'Multiple time platinum artitst with multiple album of the year',
    description:
      'Multiple time platinum artitst with multiple album of the year consider one of the Goats of his generation',
  },
  {
    image: 'Images/drake.jpg',
    name: 'Drake',
    descriptionM:
      'Another multi platinum artitst',
    description:
      'Another multi platinum artitst his work include If you are reading this is too late, take care, and others',
  },
  {
    image: 'Images/DuaLipa.jpg',
    name: 'Dua Lipa',
    descriptionM:
    'An English singer, songwriter, and model',
    description:
      'An English singer, songwriter, and model. Her musical career began at age 14',
  },
  {
    image: 'Images/skrillex.jpg',
    name: 'Skrillex',
    descriptionM:
      'An American record producer, DJ, singer, songwriter and musician',
    description:
      'An American record producer, DJ, singer, songwriter and musician',
  },
  {
    image: 'Images/Marshmello.jpg',
    name: 'Marshmello',
    descriptionM:
    'An American electronic music producer and DJ.',
    description:
      'An American electronic music producer and DJ. His songs Silence, Wolves, Friends, Happier, and Alone have been certified multi-platinum in several countries and appeared in the Top 30 of the Billboard Hot 100',
  },
  {
    image: 'Images/ACDC.jpg',
    name: 'ACDC',
    descriptionM:
    'An Australian rock band formed in Sydney.',
    description:
      'An Australian rock band formed in Sydney in 1973 by Scottish-born brothers Malcolm and Angus Young',
  },
];

function artistJs() {
  artist.map((el, i) => {
    const row = document.createElement('div');
    row.classList.add('row');
    row.classList.add('m-2');
    const col1 = document.createElement('div');
    col1.classList.add('col-4');
    const image = document.createElement('img');
    image.src = el.image;
    image.classList.add('img-fluid');
    image.classList.add('rounded');
    image.classList.add('pt-4');
    col1.appendChild(image);
    row.appendChild(col1);
    const col2 = document.createElement('div');
    col2.classList.add('col-8');
    col2.classList.add('mt-5');
    const title = document.createElement('h4');
    title.classList.add('description');
    title.textContent = el.name;
    const pag = document.createElement('p');
    pag.classList.add('description');
    pag.textContent = el.description;
    col2.appendChild(title);
    col2.appendChild(pag);
    row.appendChild(col2);

    if (i >= (artist.length - 1) / 2) {
      const artistDesk = document.getElementById('artistDeskA');
      artistDesk.appendChild(row);
    } else {
      const artistDeskB = document.getElementById('artistDeskB');
      artistDeskB.appendChild(row);
    }

    return null;
  });
}

function artistJsM() {
  artist.map((el) => {
    const row = document.createElement('div');
    row.classList.add('row');
    row.classList.add('m-2');
    const col1 = document.createElement('div');
    col1.classList.add('col-4');
    const image = document.createElement('img');
    image.src = el.image;
    image.classList.add('img-fluid');
    image.classList.add('rounded');
    image.classList.add('pt-4');
    col1.appendChild(image);
    const col2 = document.createElement('div');
    col2.classList.add('col-8');
    const title = document.createElement('h4');
    title.classList.add('description');
    title.textContent = el.name;
    const pag = document.createElement('p');
    pag.classList.add('description');
    pag.textContent = el.descriptionM;
    col2.appendChild(title);
    col2.appendChild(pag);
    row.appendChild(col1);
    row.appendChild(col2);

    const artistM = document.getElementById('mobile');
    artistM.appendChild(row);

    return null;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  artistJs();
  artistJsM();
});