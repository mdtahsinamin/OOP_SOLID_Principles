{
  interface CloudProvider {
    storeFile(name): void;
    getFile(name): Promise<string>;
    createServer(region): void;
    listServers(region): void;
    getCDNAddress(): string;
  }

  // First use Amazon
  class Amazon implements CloudProvider {
    storeFile(name) {}

    getFile(name) {
      return name;
    }

    createServer(region) {}

    listServers(region) {}

    getCDNAddress() {
      return "https://127.0.0.1/cnd/12";
    }
  }

  // Now use DropBox -> only work file only

  // unnecessary response impose -> bad practice

  class DropBox implements CloudProvider {
    storeFile(name) {}

    getFile(name) {
      return name;
    }

    createServer(region) {
      // no use
    }

    listServers(region) {
      throw new Error("NO service");
    }

    getCDNAddress() {
      return "https://127.0.0.1/cnd/12";
    }
  }
}
