import ky from "ky-universal";

class Client {
  constructor(options = {}) {
    this.ky = ky.create({ ...options });

    ["get", "post", "put", "patch", "delete"].forEach((method) => {
      this[method] = (route, json) => this.request(method, route, json);
    });
  }

  async request(method = "GET", route, json) {
    const options = {
      json,
    };
    return await this.ky[method](route, options).json();
  }
}

export default Client;
