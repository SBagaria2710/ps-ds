const DEFAULT_CAPACITY = 5;

class LRUCache {
    #cache;
    #capacity;

    constructor(capacity = DEFAULT_CAPACITY) {
        this.#capacity = capacity;
        this.#cache = new Map();
    }

    set(key, value) {
        if (this.#cache.size >= this.#capacity) {
            const keyToDelete = this.#cache.keys().next().value;
            this.#cache.delete(keyToDelete);
        }
        this.#cache.delete(key);
        this.#cache.set(key, value);
    }

    get(key) {
        if (this.#cache.has(key)) {
            const value = this.#cache.get(key);
            this.#cache.delete(key);
            this.#cache.set(key, value);
            return value;
        }
    }

    getAll() {
        return this.#cache;
    }
}
