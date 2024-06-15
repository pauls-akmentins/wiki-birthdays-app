### Starting scripts (auto-generated README contents)

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Auto generated types from https://en.wikipedia.org/api/rest_v1/?spec

1. Extracted the swagger.json spec file: curl "'https://en.wikipedia.org/api/rest_v1/?spec' > swagger.json"
2. Filtered the swagger.json file using "jq" config (filter_onthisday.js), so that I get only OnThisDay related types
3. Converted the swagger.json file into TS file with swagger-typescript-api package: "npx swagger-typescript-api -p onthisday_filtered.json -o swagger-types.ts"
4. Manually removed all the HttpClient service related methods, because they are redundant for my use case

Added the "jq" filtering file (filter_onthisday.js) and filtered swagger JSON file (onthisday_filtered.json) in this repo as a proof, otherwise they are not worth to be kept in repo due to bundle size

### Containers folder's structure

Used `Atomic Design System` to structure the main render folder, with few exceptions like `hooks`, etc. folders,
that does not follow traditional `Atomic Design System`, as well as introduced `section`, which is alias for
`templates` folder in original `Atomic Design System` structure (https://atomicdesign.bradfrost.com/chapter-2/)

### Styling (CSS)

Used BEM methodology for structuring CSS class names, but did not want to install extra dependency to "unlock"
one useful characteristic from BEM - class nesting, which is not available on native CSS. (https://getbem.com/)
