{
  class Author {
    id: string;
    name: string;
  }

  class Content {
    id: string;
    type: "TEXT" | "IMAGE" | "VIDEO";
    author: Author;

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

  // Inheritance relationship -> represent -> content class create, textContent extend content

  class TextContent extends Content {
    textData: string; // TextContent is a Content
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
  }
}
