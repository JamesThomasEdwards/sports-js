## Instructions

### Start Application

```
cd Bonus-2
```

Once the directory is open

```
npm install
```

```
npm run build
```

Start server
```
npm run dev-server
```

Go to http://localhost:8080/

### Testing - Jest - snapShots

```
cd Bonus-2
```

Once the directory is open

```
npm run test -- --watchAll
```

## Fetching data from the API

I had 2 solutions for fetching this data, but obviously used 1 of them. The deciding factor was speed.

Recursively- I called the fetch for page 1 and checked if the "next" property was null. If it wasn't I called the function again, but with the value of next (which is the next pages api). Then once "next" is null, I handled all the promises (Promise.all), filtered through the data, and passed the array of filtered profile data to my settingState function. I called both of those using async/ await. The only problem was time complexity! It took about 10 seconds to render to the page. 

Non-recursive- I called one function that does a fetch to the first page and gets the value of "count", which is the number of all character profiles. Since I know there are 10 profiles per page, I divided the "count" value by 10. That was passed to the getCharacterProfiles function, where I iterated through the number of pages, passing the index at the end of each fetch request to get an array of the all the data per page. I then handled the promises (Promise.all), filtered through them and passed them into the settingState function. Each call was handled using async/ await. I used this one because of speed.

I'm sure there's other solutions to improve time complexity. I'm curious to see your approach.


