# Cheat Sheet Generator

## Hosted on github pages

Cheat sheets are hosted on github pages : [https://groupe-sii.github.io/cheat-sheets/](https://groupe-sii.github.io/cheat-sheets/)

## Browsers support <sub><sup><sub><sub>made by <a href="https://godban.github.io">godban</a></sub></sub></sup></sub>

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |


| last 2 versions

## Install

NodeJS version 6+

gulp is needed in global in order to run compilation :

`npm install gulp -g`

`yarn`
or
`npm install`

## Usage

From install folder:

`gulp create-new-cheat-sheet --name <name> --category <tools|frameworks|languages|scrum|best-practices>`

Put your svg|png logo in assets/images folder
Put your commands or codes on:

- src/\<name\>/first-side/column1.md
- src/\<name\>/first-side/column2.md
- src/\<name\>/reverse/column1.md
- src/\<name\>/reverse/column2.md

## Devtools

Build and reload server:

`gulp watch`

## Print

- Hit `Ctrl+P` to generate the PDF version, using `Save as PDF`
- Disable margins

## Screenshots

![menu](./assets/images/menu.png)

![web version](./assets/images/webVersion.png)

![pdf version](./assets/images/pdfVersion.png)
