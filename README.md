<div align="center">
<img src="./logo.svg" alt="mWiki.js logo" height="48" />

[![GitHub Repo stars](https://img.shields.io/github/stars/erayreperit/mwiki.js?logo=github)](https://github.com/erayreperit/mwiki.js)
[![npm](https://img.shields.io/npm/v/mwiki.js)](https://npmjs.com/package/mwiki.js)
[![npm](https://img.shields.io/npm/dt/mwiki.js)](https://npmjs.com/package/mwiki.js)
</div>

## About
**mWiki.js** is a simple API wrapper which allows you to create beautiful and easy-to-use Wikimedia bots which help you to automate and accelerate your work. You can learn about them [here](https://en.wikipedia.org/wiki/Wikipedia:Bots).

## Usage

### A basic example of parsing a page's content
```js
import { Bot } from 'mwiki.js' // ESModule
const { Bot } = require ('mwiki.js') // CommonJS

const myBot = new Bot ({
    project: 'enwiki', // create a client on the English Wikipedia
    username: 'MyBot', // the username of your bot
    password: '********' // the password of your bot
})

myBot.on ('loggedIn', async (myBot) => {
    const percentagePageWikitext = myBot.parseWikitext ('Batman')

    console.log (percentagePageWikitext)

    /* expected output:

    {{short description|Number or ratio expressed as a fraction of 100}}
    {{pp-semi-indef}}
    {{Redirects|Percent|the symbol|Percent sign}}
    {{Redirects|Per cent|the unit of currency|cent (currency)}}
    {{Use dmy dates|date=October 2020}}
    [[File:Web-browser usage on Wikimedia.svg|thumb|A [[pie chart]] showing the '''percentage''' by web browser visiting [[Wikimedia Foundation|Wikimedia]] sites (April 2009 to 2012)]]

    In [[mathematics]], a '''percentage''' ({{etymology|la|{{wikt-lang|la|per centum}}|by a hundred}}) is a number or [[ratio]] expressed as a [[fraction (mathematics)|fraction]] of 100. It is often [[Denotation|denoted]] using the [[percent sign]] (%),<ref>{{cite web |title=Introduction to Percents |url=https://mathsisfun.com/percentage.html |website=mathsisfun.com |access-date=2020-08-28}}</ref> although the abbreviations ''pct.'', ''pct'', and sometimes ''pc'' are also used.<ref>{{cite news |last=Dakers|first=Marion |date=7 January 2015 |url=https://www.telegraph.co.uk/finance/economics/11329769/Eurozone-officially-falls-into-deflation-piling-pressure-on-ECB.html |title=Eurozone Officially Falls into Deflation, Piling Pressure on ECB |newspaper=[[The Daily Telegraph]] |access-date=2019-12-27}}</ref> A percentage is a [[dimensionless quantity|dimensionless number]] (pure number), primarily used for expressing proportions, but percent is nonetheless a [[unit of measurement]] in its orthography and usage.<ref>{{cite book |last1=Mattock |first1=Peter |title=Conceptual Maths: Teaching 'about' (rather than just 'how to do') mathematics in schools |date=5 January 2023 |publisher=Crown House Publishing Ltd |isbn=978-1-78583-618-3 |page=269 |url=https://www.google.com/books/edition/Conceptual_Maths/FZVfEAAAQBAJ?hl=en&gbpv=1&pg=PT269 |language=en}}</ref>
    ...

    */
})
```