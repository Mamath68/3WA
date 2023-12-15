const baseUrl = 'https://jsonplaceholder.typicode.com';

// Ancienne version de sendAjaxRequest (sans les promesses)
// function sendAjaxRequest(url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//         if (xhr.status == 200 && xhr.readyState == XMLHttpRequest.DONE) {
//             const response = JSON.parse(xhr.responseText);

//             // Exécution de la fonction de rappel passée en paramètre
//             // lorsque le serveur a renvoyé les résultats
//             callback(response);
//         }
//     });
// }

function sendAjaxRequest(url) {
    // Renvoyer une promesse
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status == 200 && xhr.readyState == XMLHttpRequest.DONE) {
                const response = JSON.parse(xhr.responseText);

                // Le traitement est terminé donc on indique que la promesse est résolue
                // et avec les données que l'on veut renvoyer
                resolve(response);
            }
        });
    });
}

const main = async () => {
    // const todos = await sendAjaxRequest(`${baseUrl}/todos`);
    // const posts = await sendAjaxRequest(`${baseUrl}/posts`);

    const todos = await fetch(`${baseUrl}/todos`).then(response => response.json());
    const posts = await fetch(`${baseUrl}/posts`).then(response => response.json());

    console.log(todos, posts);
}

main();

// console.log(todos, posts);

const commentId = 4;

// Ancienne version de sendAjaxRequest (sans les promesses)
// sendAjaxRequest(`${baseUrl}/comments/${commentId}`, (comment) => {
//     sendAjaxRequest(`${baseUrl}/posts/${comment.postId}`, (post) => {
//         sendAjaxRequest(`${baseUrl}/users/${post.userId}`, (user) => {
//             console.log(user.name);
//         });
//     });
// });

// const result = sendAjaxRequest(`${baseUrl}/todos`);
// result.then(response => {
//     console.log(response);
// });

// sendAjaxRequest(`${baseUrl}/comments/${commentId}`)
//     .then((comment) => sendAjaxRequest(`${baseUrl}/posts/${comment.postId}`))
//     .then((post) => sendAjaxRequest(`${baseUrl}/users/${post.userId}`))
//     .then((user) => {
//         console.log(user.name);
//     });