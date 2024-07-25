{
  class YoutubeHome {
    // *  High level class -> je depended se high level
    private _storageService: VideoStorageRepository; // depend on abstraction

    constructor(_storageService: VideoStorageRepository) {
      this._storageService = _storageService;
    }

    public showFeed() {
      let videos = this._storageService.getVideos();
      // show videos in feed
    }
  }

  // * abstraction through access korbo
  interface VideoStorageRepository {
    getVideos(); // * actual action
  }

  // *  Low level class ->  jar upor depended se low level
  class RemoteVideosStorageService implements VideoStorageRepository {
    public getVideos() {
      // call an api to get videos from server
      // return videos
    }
  }

  class CachedVideoStorageService implements VideoStorageRepository {
    public getVideos() {
      //  get videos from local cache
      // return videos
    }
  }
}

{
  import AWSLibrary from "AWSLibrary"; // * just for example

  // * YoutubeHome not depend any Library
  class YoutubeHome {
    // *  High level class
    private _storageService: VideoStorageRepository; // * depend on abstraction

    constructor(_storageService: VideoStorageRepository) {
      this._storageService = _storageService;
    }

    public showFeed() {
      let videos = this._storageService.getVideos();
      // * show videos in feed
    }
  }

  // * abstraction through access korbo
  interface VideoStorageRepository {
    getVideos(); // * actual action
  }

  // * AWSAPI class ami sorasori use korbo na, use korbo VideoStorageRepository thorough te
  class AWSAPI implements VideoStorageRepository {
    getVideos() {
      return AWSLibrary.get();
    }
  }
}
