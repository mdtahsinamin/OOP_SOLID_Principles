{
  // runtime buja jay
  class Author {
    id: string;
    name: string;
  }

  abstract class Content {
    id: string;
    type: "TEXT" | "IMAGE" | "VIDEO";
    author: Author;

    abstract preview();
    /**
     * like
     */
    public like() {
      // call API for the like
    }
    /**
     * share
     */
    public share() {
      // call API for the share
    }

    // common
  }

  class TextContent extends Content {
    textData: string; // TextContent is a Content

    preview() {} // TextContent je bave preview hobe se bave VideoContent preview hobe na logic different
  }

  class ImageContent extends Content {
    url: string;
    /**
     * zoomIn
     */
    public zoomIn() {}

    /**
     * zoomOut
     */
    public zoomOut() {}

    preview() {}
  }

  class VideoContent extends Content {
    url: string;

    /**
     * play
     */
    public play() {}

    /**
     * pause
     */
    public pause() {}

    preview() {}
  }

  class Home {
    contents: Content[];

    loadFeed() {
      // fetch contents from API
      // content buja jay na , runtime buja jabe image naki video
      this.contents.forEach((content) => content.preview());
    }
  }
}
