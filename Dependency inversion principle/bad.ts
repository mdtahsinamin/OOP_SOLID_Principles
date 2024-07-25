{
  // concrete implementation upor depended
  class YoutubeHome {
    // High level
    private _storageService: VideoStorageService;

    constructor(_storageService: VideoStorageService) {
      this._storageService = _storageService;
    }

    public showFeed() {
      // method upor depended
      let videos = this._storageService.getFromServer();
      // show videos in feed
    }
  }

  class VideoStorageService {
    // low-level
    public getFromServer() {
      // call an api to get videos from server
      // return videos
    }
  }
}
