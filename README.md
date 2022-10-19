# 🌟 **SpecialToNormal**

<div align="center">

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)

[![npm package](https://img.shields.io/badge/package-npm-green)](https://www.npmjs.com/package/specialtonormal) [![yarn package](https://img.shields.io/badge/package-yarn-yellowgreen)](https://www.npmjs.com/package/specialtonormal)


### This package is used to convert special characters to their corresponding "normal" letter.

</div>

<hr />

**This package helps you if..**

* You wish to replace those special letters that some languages has, like Swedish "åäö"

* You have to convert special characters in huge chunks of strings

* You want to validate a very large text



 ## Install

    $ npm install specialtonormal

or

    $ yarn add specialtonormal

## Usage

```js
import normalizeSpecialCharacters from "specialtonormal";
const normalized = normalizeSpecialCharacters('pátrîcnõx with swedish åäö');
console.log(normalized);  //=> patricnox with swedish aao
```

## License

This package is licensed under [MIT](https://github.com/PatricNox/SpecialToNormal/blob/release/LICENSE)


----------

Made by PatricNox - 👋 [Get in touch!](https://www.linkedin.com/in/patricnox)
