(async () => {
  const ExifImage = (await import("exif")).default.ExifImage;
  const globby = (await import("globby")).globby;

  // Get all the paths in the root folder
  const paths = await globby("*.jpg");

  // Loop through all the paths
  paths.forEach((imagePath) => {
    try {
      // Using the example code from exif packages
      new ExifImage({ image: imagePath }, function (error, exifData) {
        if (error) console.log("Error: " + error.message);
        else {
          // Showing the image file path
          console.log(imagePath);
          // Showing the gps object from exif
          console.log(exifData?.gps);
        }
      });
    } catch (error) {
      console.log("Error: " + error.message);
    }
  });
})();
