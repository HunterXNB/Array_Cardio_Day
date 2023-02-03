"use strict"
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 }
]

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
    'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben - Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
    'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi',
    'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken',
    'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo,Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake,William'];


const filtered = inventors.filter(function (e) {
    return e.year >= 1500 && e.year < 1600
})
console.table(filtered)
const mapped = inventors.map(e => {
    return `${e.first + " " + e.last}`
})

console.table(mapped)

const sorted = inventors.sort((a, b) => {
    return a.year - b.year
})

console.table(sorted)

const years = inventors.reduce((acc, ele) => {

})

const total_years = inventors.reduce((acc, e) => {
    acc += e.passed - e.year
    return acc
}, 0)

console.log(total_years)

const years_lived = inventors.sort((a, b) => {
    return (b.passed - b.year) - (a.passed - a.year)
})

console.table(years_lived)

const division = [...document.querySelectorAll(".mw-category a")]

const filtered_links = division.map((ele) => {
    return ele.textContent
}).filter((ele) => ele.includes("de"))

console.log(filtered_links)

const alpha = people.sort((a, b) => {

    const [alast, afirst] = a.split(", ")
    const [blast, bfirst] = b.split(', ')

    return alast > blast ? 1 : -1
})

console.log(alpha)

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck']

const summedData = data.reduce((acc, ele) => {

    acc[ele]++
    return acc
}, { car: 0, truck: 0, bike: 0, walk: 0, van: 0 })
console.log(summedData)