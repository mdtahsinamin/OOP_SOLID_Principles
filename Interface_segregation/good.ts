{
  // break down it based on responsibility wise
  interface CloudStorageProvider {
    storeFile(name): void;
    getFile(name): Promise<string>;
  }

  interface CloudProvider {
    createServer(region): void;
    listServers(region): void;
  }

  interface CDNProvider {
    getCDNAddress(): string;
  }

  // First use Amazon
  class Amazon implements CloudStorageProvider, CloudProvider, CDNProvider {
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

  class DropBox implements CloudStorageProvider {
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

  class CloudFront implements CloudProvider, CDNProvider {
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
