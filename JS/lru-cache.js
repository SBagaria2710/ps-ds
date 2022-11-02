class LRUCache {
    constructor(capacity) {
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
}