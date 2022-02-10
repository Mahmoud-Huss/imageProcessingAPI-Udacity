# imageProcessingAPI-Udacity
image processor API
# Scripts
- Build:  ``` npm run build ```
- Lint:  ``` npm run lint ```
- Prettify:  ``` npm run prettify ```
- Test:  ``` **npm run test** ```
- Start server:  ``` npm run start ```
# EndPoints and functionality
### 1. HomePage
``
http://localhost:5000
``
#### This endpint provide you with all the available image names in /public/images and allow you to select from them and specify width and height using UI

### 2. Image endpoint
``
http://localhost:5000/image?filename="yourFilename"&width="yourWidth"&height="yourHeight"
``
#### This endpint provide you with the resized image as requested.

### 3. Any other endpoint
``
http://localhost:5000/imaage
``
#### This endpint would render not found page and ask user choose from the list of image names in home page.
