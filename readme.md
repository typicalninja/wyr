# wyr

> A simple (literally 1  file) package to get would-your-rather questions, mostly for personal use, but available for others use :)


# Install

```
npm i wyr
```

* Typescript and Javascript compatible

## Usage

##### Typescript

```ts
import wyr from 'wyr';

// wyr is a function and returns a promise with a object containing your questions
wyr().then((response) => {  // or .then(console.log) hehe
console.log(response)
})
```

##### Javascript

```js
const wyr = require('wyr').default


// wyr is a function and returns a promise with a object containing your questions
wyr().then((response) => {  // or .then(console.log) hehe
console.log(response)
})
```

### A example of returned response

```js
{
  blue: {
    question: 'Drive 200 miles well over the legal drunken limit',      
    votes: '620,500'
  },
  red: {
    question: 'Drive 200 miles after being awake for 72 hours straight',
    votes: '970,048'
  }
}
```

> ex: To access the blue question: <returnedResponse>.blue.question, and the count of blue <returnedResponse>.blue.votes

* and for red vice versa

## Support

> as this is a small and simple package i don't expect any one to need any support with it, but if you need me i am always in my discord server ; )

> [Invite](https://discord.gg/9s52pz6nWX)

## License

* This repository and the code inside it is licensed under the MIT License. Read [LICENSE](https://github.com/typicalninja493/wyr/blob/master/LICENSE) for more information.

## Other


> [My github](https://github.com/typicalninja493)
> [My discordBot](https://axixbot.cf)
> [Discord-Invite](https://discord.gg/9s52pz6nWX)
> [My other discord for my bot](https://discord.gg/zAZ4fNu)