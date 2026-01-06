const grades = [75, 50, 90, 80, 65, 95]

const max = grades.reduce(getMax)
const min = grades.reduce(getMin)
console.log(`Grades: [ ${grades} ]`);
console.log(`max ${max}`)
console.log(`min ${min}`)

function getMax(accumulator, element)
{
    return Math.max(accumulator, element)
}

function getMin(accumulator, element)
{
    return Math.min(accumulator, element)
}