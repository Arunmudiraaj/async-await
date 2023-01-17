// USING PROMISE.THEN
// console.log('person 1 shows ticket')
// console.log('person 2 shows ticket')
// const wifeBringsTicket = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Wife : i got the tickets')
//         resolve('ticket')
//     },3000)

// })
// const getPopcorn = wifeBringsTicket.then((data)=>{
//     console.log('Husband : we should get in')
//     console.log('Wife : No. Iam hungry')
//    return new Promise((resolve,reject)=>{
    
//     resolve(`popcorn ${data}`)})
// })
// const getButter = getPopcorn.then((data)=>{
//     console.log("Husband : I got some popcorn")
//     console.log("Husband : we should get in")
//     console.log("Wife : I need butter on my popcorn")
//     return new Promise((resolve,reject)=>{resolve(`butter ${data}`)})
// })
// const getDrinks = getButter.then((data)=>{
//     console.log(`Husband : Here's the butter`)
//     console.log("Wife : I need cold drink")
//     return new Promise((resolve,reject)=>{resolve(`cold drinks ${data}`)})
// })
// getDrinks.then((data)=>{
//     console.log(`Husband : I got coldDrink`)
//      console.log("Husband : anything else darling?")
//      console.log("Wife : Lets go we are getting late")
//     console.log(data)
// })
// console.log('person 4 shows ticket')
// console.log('person 5 shows ticket')

// USING ASYNC AWAIT :
const preMovie = async()=>{
    const getTicket = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve('ticket')},2000)
    })
    const getPopcorn = new Promise((resolve,reject)=>{resolve('popcorn')})
    const addButter = new Promise((resolve,reject)=>{resolve('butter')})
    const getDrink = new Promise((resolve,reject)=>{resolve('cold drinks')})
    const ticket = await getTicket
    console.log(`Wife : i got the ${ticket}`)
    console.log('Husband : we should get in')
    console.log('Wife : No. Iam hungry')
    const popcorn = await getPopcorn
    console.log(`Husband : I got some ${popcorn}`)
    console.log("Husband : we should get in")
    console.log("Wife : I need butter on my popcorn")
    const butter = await addButter
    console.log(`Husband : here's the ${butter}`)
    console.log("Wife : I need cold drink")
    const coldDrink = await getDrink
    console.log(`Husband : I got 2 ${coldDrink} for us`)
    console.log("Husband : anything else darling?")
    console.log("Wife : Lets go we are getting late")
    return ticket
    
}

console.log('person 1 shows ticket')
console.log('person 2 shows ticket')
preMovie().then((m)=>{console.log(`person 3 shows ${m}`)})
console.log('person 3 shows ticket')
console.log('person 4 shows ticket')
