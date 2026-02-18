export default class DatabaseModule {

    static getFromLocalStorage(key, jsonParse = true) {
        const item = localStorage.getItem(key);
        if (!item) return null;
        return jsonParse ? JSON.parse(item) : item;
    }

}