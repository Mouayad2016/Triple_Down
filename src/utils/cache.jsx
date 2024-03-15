class Cache {
	constructor() {
		this.store = {};
	}

	get(key) {
		const item = this.store[key];
		if (item && (item.expire === null || item.expire >= Date.now())) {
			return item.value;
		}
		return null;
	}

	set(key, value, ttl = null) {
		const expire = ttl ? Date.now() + ttl : null;
		this.store[key] = { value, expire };
	}
}

export default new Cache();
