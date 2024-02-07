import localForage from 'localforage';

localForage.config({
  name: 'Calculator APP',
});

// Fct pour recuperer les calculs

export const getOperations = async (key) => {
  const operations = await localForage.getItem(key);
  return operations || ["Pas encore d'opérations enregistrées"];
};

// Fct pour enregistrer nouveau calcul

export const saveOperation = async (operation) => {
  const key = new Date().getDay().toString();
  let existingOperations = await getOperations(key);
  existingOperations.push(operation);
  await localForage.setItem(key, existingOperations);
};
