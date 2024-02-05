
const e = { a : 1, b : 2}
// shallow copy
const ee = { ...e }

ee.a =2
ee.b =1
// cet objet ee est une copie de e
console.log(ee)
// pour preuve les valeurs de e non pas bougées
console.log(e)

// problème la shallow copy ne fait de copie profonde
const o = {
    a : {
        x : [1, 2, 3] // une autre référence qui ne sera pas copiée dans la shallow copy
    },
    b : 1
}


// faisons de copie de o, est ce vraiment une copie ?
const oo = { ...o }

oo.a.x = []

// les deux objets seront impactés
console.log(oo)
console.log(o)