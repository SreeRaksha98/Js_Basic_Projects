## toLocaleDateString()
This method is used to get a string representing the date according to the locale and options provided.
```
const currentDate = new Date();
const dayOfMonth = currentDate.getDate();
console.log(dayOfMonth);  // Output: 12 (if today is the 12th of the month)
```

## getFullYear()
This method returns the year of the specified date according to local time.
```
const currentYear = new Date().getFullYear();
console.log(currentYear);  // Output: 2024
```

## getMonth()
This method returns the month (0-11) for the specified date according to local time.
```
const currentMonth = new Date().getMonth();
console.log(currentMonth);  // Output: 1 (February is represented as 1 because months are zero-based)
```

## new Date()
This is a constructor for creating a new Date object, which represents the current date and time if called without any arguments.
```
const currentDateObject = new Date();
console.log(currentDateObject);  // Output: Tue Feb 12 2024 12:00:00 GMT+0000 (Coordinated Universal Time)
```

## getDate()
 method is used to get the day of the month (from 1 to 31) for the specified date according to local time in JavaScript.
 ```
 const currentDate = new Date();
const dayOfMonth = currentDate.getDate();
console.log(dayOfMonth);  // Output: 12 (if today is the 12th of the month)
 ```