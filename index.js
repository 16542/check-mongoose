require('./connection/cnx')
const Person=require('./Model/Person');
let P=new Person({
    name:'Ahmed',
    age:17,
    Favoritjobs:["web-development","dentiste"]
})
P.save(function(err,persons) {
    if (err){
        console.log("Failed")
    }else{
        console.log("Succesful")

        }
    
})
const arrayOfPeople = [
    { name: "sawsen", age: 18, Favoritjobs: ["burrito"] },
    { name: "sandra", age: 70,Favoritjobs: ["manager", "nurse","hacker"] },
    { name: "sana", age: 35, Favoritjobs: ["PDG"] },
    { name: "anes", age: 25, Favoritjobs: ["CEO","Doctor","chef"] },
];
Person.create(arrayOfPeople, (err, persons) => {
    if (err) {
        console.log("Failed");
    } else {
        console.log("Saved Successful");
        console.log(persons);
    }
});
Person.find((err, persons) => {
    if (err) {
        console.log("Failed");
    } else {
        console.log("recherche reussi");
        console.log(persons);
    }
});

Person.findOne({ age: 5}, (err, persons) => {
    if (err) {
        console.log("Failed");
    } else {
        console.log("recherche reussi");
        console.log(persons);
    }
});  
Person.findById('6166a0b05ba0d2a61920f9c9', (err, persons) =>{
    if (err) {
        console.log("Failed");
    } else {
        console.log("recherche reussi");
        console.log(persons);
    }
});
Person.findOneAndUpdate(
    { name: 'sawsen' },
    { $set: { age: 30 } },
    { new: true },
    (err, persons) => {
        if (err) {
            console.log("Failed");
        } else {
            console.log("update successful");
            console.log(persons);
        }
});
Person.findByIdAndRemove('6166a0b05ba0d2a61920f9c9', (err, persons) =>{
    if (err){
        console.log('failed')
    }
    else{
        console.log('delete succesful');
        console.log(persons);
    }

}); 
const nameToRemove = "Ahmed";
Person.remove({ name: nameToRemove }, (err, persons) =>{
    if (err){
        console.log('failed')
    }
    else{
        console.log('delete succesful');
        console.log(persons);
    }
});
const JobeToSearch = "chef";
Person.find({ Favoritjobs:JobeToSearch})
    .sort({ name: 1 })
    .limit(2)
    .exec((err, persons) =>
    {
        if (err){
            console.log('failed')
        }
        else{
            console.log('query succesful');
            console.log(persons);
        }
    });   