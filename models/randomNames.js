
var names = [{ name: "Miguel", genders:["Male"], types: ["FirstName"]},
{name:"Francisco", genders:["Male"], types: ["FirstName","LastName"]},
{name:"Ana", genders:["Male"], types:["FirstName"]}];

module.exports.getRandomName = function(callback) {
        var index = Math.floor(names.length * Math.random());
        callback(names[index].name);
}

module.exports.saveName = function(data,callback) {
    names.push(data);
    callback({status:"Ok", currentSize:names.length });   
}
