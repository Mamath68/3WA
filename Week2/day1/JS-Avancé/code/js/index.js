// const paragraph = document.querySelector('p');
// // paragraph.textContent = "Modification du contenu <strong>textuel</strong>";

// // paragraph.innerHTML = "Modification du contenu <strong>textuel</strong>";

// // console.log(paragraph.textContent);

// // paragraph.classList.add("info");
// // paragraph.classList.remove("important");
// // paragraph.classList.toggle("info");

// // console.log(paragraph.dataset.id);

// const paragraphs = document.querySelectorAll('p');

// for (const paragraph of paragraphs) {
//     paragraph.addEventListener('click', function (e) {
//         console.log(e.target.dataset.id); 
//     });
// }

const paragraph = document.createElement('p');
paragraph.textContent = "Bonjour tout le monde";
paragraph.classList.add('important');

const section = document.querySelector('#paragraphs');

// Ajoute le paragraphe à la fin de la section
// section.append(paragraph);

// Remplace tout le html de la section
section.innerHTML = `
    <p class="important">Bonjour tout le monde</p>
`;