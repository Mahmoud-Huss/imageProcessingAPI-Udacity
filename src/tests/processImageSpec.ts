/* eslint-disable no-undef */
import { processImage } from "../modules/processImage";

describe("Process Image", function () {
  it("check image processor with existing image name", async () => {
    const filename = "fjord";
    const width = 200;
    const height = 200;
    const processed = await processImage(filename, width, height);
    expect(processed).toBe(true);
  });
  it("check image processor with invalid inputs", async () => {
    const filename = "fjooord";
    const width = 0;
    const height = 0;
    const processed = await processImage(filename, width, height);
    expect(processed).toBe(false);
  });
});
