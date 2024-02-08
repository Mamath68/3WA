import localForage from 'localforage';

localForage.setDriver(localForage.LOCALSTORAGE);
export const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export async function save(data) {
    const date = new Date();
    const n = date.getDay()
    const keyStorage = `${days[n]}`;
    let storage = await localForage.getItem(keyStorage) || [];
    storage.push(data)

    await localForage.setItem(`${days[n]}`, storage);
}


export async function get(dayId) {
    const keyStorage = `${days[dayId - 1]}`;
    const storage = await localForage.getItem(keyStorage) || [];

    return storage;
}

export async function reset(dayId) {
    const keyStorage = `${days[dayId - 1]}`;
    const storage = await localForage.getItem(keyStorage)
    storage ? await localForage.removeItem(keyStorage) : null
}