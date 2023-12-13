const customerList = document.querySelector('#customer-list');
const customerTable = document.querySelector('#customer-table tbody');

document.querySelector('#get-customers').addEventListener('click', (e) => {
    /* Envoi d'une requête avec XHR */

    // Envoyer une requête HTTP vers la page du serveur
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'server/customers.php');
    xhr.send();

    // On attend que le serveur (customers.php) nous renvoie les données pour les afficher
    xhr.addEventListener('load', () => {
        // Est-ce que la requête s'est bien passée ?
        if (xhr.status == 200 && xhr.readyState == XMLHttpRequest.DONE) {
            // Si oui on affiche les données du serveur

            // Version html
            // customerList.innerHTML = xhr.responseText;

            // Version JSON
            const customers = JSON.parse(xhr.responseText);

            // On transforme tous les objets clients en html
            // et on intègre ce html dans la liste
            customerList.innerHTML = customers.map(customer => {
                return `<li>${customer.customerName}</li>`;
            }).join('');

            customerTable.innerHTML = customers.map(customer => {
                return `
                    <tr>
                        <td>${customer.customerName}</td>
                        <td>${customer.addressLine1}</td>
                        <td>${customer.postalCode}</td>
                        <td>${customer.city}</td>
                        <td>${customer.country}</td>
                    </tr>
                `;
            }).join('');
        }
    });

    /* Envoi d'une requête avec fetch */
    fetch('server/customers.php').then(response => response.json()).then(customers => {
        customerList.innerHTML = customers.map(customer => {
            return `<li>${customer.customerName}</li>`;
        }).join('');

        customerTable.innerHTML = customers.map(customer => {
            return `
                <tr>
                    <td>${customer.customerName}</td>
                    <td>${customer.addressLine1}</td>
                    <td>${customer.postalCode}</td>
                    <td>${customer.city}</td>
                    <td>${customer.country}</td>
                </tr>
            `;
        }).join('');
    });
});