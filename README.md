# Cheat Sheet Generator

## hosted on github pages

Cheat sheets are hosted on github pages : [https://groupe-sii.github.io/cheat-sheets/](https://groupe-sii.github.io/cheat-sheets/)

## install
gulp is needed in global in order to run compilation :

`npm  install gulp -g`


`yarn`
or
`npm install`

`yarn` or `npm install`

## Usage

`gulp create-new-cheat-sheet --name <name> --category <tools|frameworks|languages>`

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

![alt text](./assets/images/webVersion.png)

![alt text](./assets/images/pdfVersion.png)
