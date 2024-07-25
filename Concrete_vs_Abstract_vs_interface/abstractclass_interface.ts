{
  class Author {
    id: string;
    name: string;
  }

  // Content class know the implement of like and share behavior but not know the preview

  // Content is generic class, this class not know everything, so behavior that it implement

  // Abstract class: knows partial implementation or no implementation  of abstraction

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
  }

  // Inheritance relationship -> represent -> content class create, textContent extend content
  // TextContent know the how it preview

  // Concrete class : knows all the implementation of abstraction

  class TextContent extends Content {
    textData: string; // TextContent is a Content

    // @Override
    public preview() {}
  }

  class ImageContent extends Content {
    url: string;

    public preview() {
      // image preview
    }

    /**
     * zoomIn
     */
    public zoomIn() {}

    /**
     * zoomOut
     */
    public zoomOut() {}
  }

  class VideoContent extends Content implements Playable {
    url: string;

    public preview() {
      // video preview
    }

    /**
     * play
     */
    public play() {}

    /**
     * pause
     */
    public pause() {}
  }

  class VideoAd implements Playable {
    // contract , must include this
    public play(): void {}
    public pause(): void {}
  }

  interface Playable {
    // interface : No implement of abstraction
    play(): void;
    pause(): void;
  }

  // only access Playable behavior not access of VideoContent behavior;
  const playableContent: Playable = new VideoContent();
  playableContent.pause();
  playableContent.play();

  // just show the use case
  class HomeFeed {
    /**
     * interact
     */
    public interact(playableContent: Playable) {
      playableContent.pause();
    }
  }

  // if want to access

  const video: Content = new VideoContent(); // is a content

  video.like();
  video.preview();
  video.share();
}
