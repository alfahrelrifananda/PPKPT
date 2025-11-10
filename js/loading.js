class AssetLoader {
  constructor() {
    this.totalAssets = 0;
    this.loadedAssets = 0;
    this.progressBar = document.getElementById("progress-bar");
    this.progressText = document.getElementById("progress-text");
    this.loadingScreen = document.getElementById("loading-screen");

    this.imageSources = [
      "assets/Logo_upitra 1.png",
      "assets/image 1.png",
      "assets/Rectangle 45.png",
      "assets/Rectangle 46.png",
      "assets/Rectangle 51.png",
      "assets/image 3.png",
      "assets/Logo_upitra 3.png",
      "assets/support 1.png",
    ];

    this.fontFamilies = ["Work Sans", "Lora"];
  }

  updateProgress() {
    const percentage = Math.round((this.loadedAssets / this.totalAssets) * 100);
    this.progressBar.style.width = percentage + "%";
    this.progressText.textContent = percentage + "%";
  }

  async loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        this.loadedAssets++;
        this.updateProgress();
        resolve(img);
      };

      img.onerror = () => {
        console.warn(`Failed to load image: ${src}`);
        this.loadedAssets++;
        this.updateProgress();
        resolve(null);
      };

      img.src = src;
    });
  }

  async loadFont(fontFamily) {
    return new Promise((resolve) => {
      if (!document.fonts) {
        this.loadedAssets++;
        this.updateProgress();
        resolve();
        return;
      }


      document.fonts.ready
        .then(() => {
          const fontLoaded = document.fonts.check(`12px "${fontFamily}"`);
          this.loadedAssets++;
          this.updateProgress();
          resolve();
        })
        .catch(() => {
          this.loadedAssets++;
          this.updateProgress();
          resolve();
        });
    });
  }

  async loadStylesheets() {
    const stylesheets = Array.from(
      document.querySelectorAll('link[rel="stylesheet"]')
    );

    for (const link of stylesheets) {
      await new Promise((resolve) => {
        if (link.sheet) {
          this.loadedAssets++;
          this.updateProgress();
          resolve();
        } else {
          link.addEventListener("load", () => {
            this.loadedAssets++;
            this.updateProgress();
            resolve();
          });
          link.addEventListener("error", () => {
            this.loadedAssets++;
            this.updateProgress();
            resolve();
          });
        }
      });
    }
  }

  async loadAllAssets() {
    this.totalAssets =
      this.imageSources.length +
      this.fontFamilies.length +
      document.querySelectorAll('link[rel="stylesheet"]').length;


    await this.loadStylesheets();

    for (const font of this.fontFamilies) {
      await this.loadFont(font);
    }

    const imagePromises = this.imageSources.map((src) => this.loadImage(src));
    await Promise.all(imagePromises);

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  hideLoadingScreen() {
    this.loadingScreen.classList.add("hidden");
    document.body.classList.remove("loading");

    setTimeout(() => {
      this.loadingScreen.style.display = "none";
    }, 500);
  }

  async init() {
    try {
      await this.loadAllAssets();
      this.hideLoadingScreen();
    } catch (error) {
      console.error("Error loading assets:", error);
      this.hideLoadingScreen();
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    const loader = new AssetLoader();
    loader.init();
  });
} else {
  const loader = new AssetLoader();
  loader.init();
}
