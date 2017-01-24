# Cheat Sheet Generator

## Install

gulp is needed in global `npm install -g gulp`

`yarn` or `npm install`

## Usage

`gulp create-new-cheat-sheet --name 'name'`

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
