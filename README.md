# Hotels App Code Chalenge

## Live Demo
[Hotels App Code Chalenge](https://hotels-app-code-chalenge.vercel.app/)
## 🔨 Requirement

You need [NodeJs](https://nodejs.org/en/download/) & [NPM](https://www.npmjs.com/) installed on your computer


## 💿 Installation

### Clone the repositry
```  
git clone https://github.com/rowaidsayyed/hotels-app-code-chalenge.git
```
### Install dependencies

```sh
$ npm install
```

### Run development
```
npm run dev
```
### Build for production

#### npm
```sh
$ npm run build

```
## Requirements and Output

- User select the date range to search hotels
- Display all hotels whose availability dates lies between the search dates.
- Display the total number of nights based on selected date range. (For example if user search from Aug 12, 2020 to Aug 17, 2020 than Total Number of Nights will be 5.)
- Display hotel price based on number of nights. (Price x Number of Nights)

## Dependencies & Technolgy 

- Nextjs version 12.1.0
- Axios  version 0.26.1
- ReactJS version 17.0.2
- Jest for Unit Testing version 27.4.5
- testing-library for react version 12.1.2

## Run Test

```sh
$ npm run test

```
### Tests includes
- test "Button" component if render text and fire on click event
- test "getTotalNights" function

### Folder Structure
```
├── components
│   ├── layouts
│   │   └── BasciLayout.js
│   ├── hotelCard
│   │   └── HotelCard.js
│   └── shared
│       ├── Button.js
│       ├── InputField.js
│       └── RangeInput.js
├── pages
│   ├── _app.js
│   ├── index.js
│   └── listings.js
├── services
│   ├── api.js
│   └── hotelsServices.js
├── utils
│   └── helperFunctions.js
├── styles
│   ├── globals.css
│   ├── utils.css
│   └── HotelCard.modul.css
├── __tests__
│   ├── button.test.jsx
│   └── helpers.test.jsx
└── jsconfig.json
```

