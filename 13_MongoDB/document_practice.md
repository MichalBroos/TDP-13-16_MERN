### 1. Create a new database called document_practice.
```json
> use document_practice;
switched to db document_practice
```
### 2. Create an object to represent yourself - this object should contain information like; first name, surname, age, height and hobbies.
```json
> me = {
... "forename": "Myname",
... "surname": "Surname",
... "age": 99,
... "height": 199,
... "hobbies": ["hobby1", "hobby2", "hobby3"]
... }
{
        "forename" : "Myname",
        "surname" : "Surname",
        "age" : 99,
        "height" : 199,
        "hobbies" : [
                "hobby1",
                "hobby2",
                "hobby3"
        ]
}
> me
{
        "forename" : "Myname",
        "surname" : "Surname",
        "age" : 99,
        "height" : 199,
        "hobbies" : [
                "hobby1",
                "hobby2",
                "hobby3"
        ]
}
```
### 3. Insert the previous object into a new collection called people.
```json
> document_practice.createCollection("people");
uncaught exception: ReferenceError: document_practice is not defined :
@(shell):1:1
> db.document_practice.createCollection("people");
uncaught exception: TypeError: db.document_practice.createCollection is not a function :
@(shell):1:1
> db.createCollection("people");
{ "ok" : 1 }
> show dbs
admin              0.000GB
config             0.000GB
document_practice  0.000GB
local              0.000GB
> show collections
people
> db.people.insertOne(me);
{
        "acknowledged" : true,
        "insertedId" : ObjectId("629dd8dad5f2c976fa09e792")
}
```
### 4. Do the same for everyone in your row in *one query*.
```json
> db.people.insertMany([
... {
... "forename": "Name2",
... "surname": "Surname2",
... "age": 90,
... "height": 190,
... "hobbies": ["h4", "h5", "h6"]
... },
... {"forename": "anotherPerson"
... }
... ]);
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("629ddb9bd5f2c976fa09e793"),
                ObjectId("629ddb9bd5f2c976fa09e794")
        ]
}
> db.people.find({});
{ "_id" : ObjectId("629dd8dad5f2c976fa09e792"), "forename" : "Myname", "surname" : "Surname", "age" : 99, "height" : 199, "hobbies" : [ "hobby1", "hobby2", "hobby3" ] }
{ "_id" : ObjectId("629ddb9bd5f2c976fa09e793"), "forename" : "Name2", "surname" : "Surname2", "age" : 90, "height" : 190, "hobbies" : [ "h4", "h5", "h6" ] }
{ "_id" : ObjectId("629ddb9bd5f2c976fa09e794"), "forename" : "anotherPerson" }
> db.people.delete
db.people.deleteMany(  db.people.deleteOne(
> db.people.deleteMany({});
{ "acknowledged" : true, "deletedCount" : 3 }
> db.people.find({});
> show collections;
people
```
### Adding practice dataset
```json
> db.people.insertMany(
... [
...     {
...         "firstName": "Jordan",
...         "surname": "H",
...         "age": 25,
...         "height": 182,
...         "hobbies":  [
...             "Gaming",
...             "Reading",
...             "Writing course-ware"
...         ]
...     },
...     {
...         "firstName": "Bill",
...         "surname": "S",
...         "age": 28,
...         "height": 167,
...         "hobbies":  [
...             "Philately",
...             "Knitting"
...         ]
...     },
...     {
...         "firstName": "Ben",
...         "surname": "S",
...         "age": 32,
...         "height": 157,
...         "hobbies":  [
...             "Poker",
...             "Blackjack"
...         ]
...     },
...     {
...         "firstName": "Sally",
...         "surname": "B",
...         "age": 34,
...         "height": 189,
...         "hobbies":  [
...             "Football",
...             "Air Guitar",
...             "Climbing"
...         ]
...     },
...     {
...         "firstName": "Emily",
...         "surname": "P",
...         "age": 42,
...         "height": 174,
...         "hobbies":  [
...             "Go-Karting",
...             "Ultimate Frisbee"
...         ]
...     }
... ]);
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("629ddf48d5f2c976fa09e79a"),
                ObjectId("629ddf48d5f2c976fa09e79b"),
                ObjectId("629ddf48d5f2c976fa09e79c"),
                ObjectId("629ddf48d5f2c976fa09e79d"),
                ObjectId("629ddf48d5f2c976fa09e79e")
        ]
}
> db.people.find({});
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79a"), "firstName" : "Jordan", "surname" : "H", "age" : 25, "height" : 182, "hobbies" : [ "Gaming", "Reading", "Writing course-ware" ] }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79b"), "firstName" : "Bill", "surname" : "S", "age" : 28, "height" : 167, "hobbies" : [ "Philately", "Knitting" ] }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79c"), "firstName" : "Ben", "surname" : "S", "age" : 32, "height" : 157, "hobbies" : [ "Poker", "Blackjack" ] }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79d"), "firstName" : "Sally", "surname" : "B", "age" : 34, "height" : 189, "hobbies" : [ "Football", "Air Guitar", "Climbing" ] }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79e"), "firstName" : "Emily", "surname" : "P", "age" : 42, "height" : 174, "hobbies" : [ "Go-Karting", "Ultimate Frisbee" ] }
```
### 5. Ben starts playing roulette.
```json
> db.people.update
db.people.update(      db.people.updateMany(  db.people.updateOne(
> db.people.update({"name": "Ben"}, {"$push": {"hobbies": "Roulette"}});
WriteResult({ "nMatched" : 0, "nUpserted" : 0, "nModified" : 0 })
> db.people.update({"firstName": "Ben"}, {"$push": {"hobbies": "Roulette"}});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.people.find({});
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79a"), "firstName" : "Jordan", "surname" : "H", "age" : 25, "height" : 182, "hobbies" : [ "Gaming", "Reading", "Writing course-ware" ] }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79b"), "firstName" : "Bill", "surname" : "S", "age" : 28, "height" : 167, "hobbies" : [ "Philately", "Knitting" ] }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79c"), "firstName" : "Ben", "surname" : "S", "age" : 32, "height" : 157, "hobbies" : [ "Poker", "Blackjack", "Roulette" ] }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79d"), "firstName" : "Sally", "surname" : "B", "age" : 34, "height" : 189, "hobbies" : [ "Football", "Air Guitar", "Climbing" ] }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79e"), "firstName" : "Emily", "surname" : "P", "age" : 42, "height" : 174, "hobbies" : [ "Go-Karting", "Ultimate Frisbee" ] }
> db.people.updateOne({"firstName": "Ben"}, {"$push": {"hobbies": "Roulette"}});
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.people.find({});
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79a"), "firstName" : "Jordan", "surname" : "H", "age" : 25, "height" : 182, "hobbies" : [ "Gaming", "Reading", "Writing course-ware" ] }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79b"), "firstName" : "Bill", "surname" : "S", "age" : 28, "height" : 167, "hobbies" : [ "Philately", "Knitting" ] }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79c"), "firstName" : "Ben", "surname" : "S", "age" : 32, "height" : 157, "hobbies" : [ "Poker", "Blackjack", "Roulette", "Roulette" ] }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79d"), "firstName" : "Sally", "surname" : "B", "age" : 34, "height" : 189, "hobbies" : [ "Football", "Air Guitar", "Climbing" ] }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79e"), "firstName" : "Emily", "surname" : "P", "age" : 42, "height" : 174, "hobbies" : [ "Go-Karting", "Ultimate Frisbee" ] }
> db.people.updateOne({"firstName": "Ben"}, {"$set": {"hobbies": ["Poker", "Blackjack"]}});
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.people.find({});
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79a"), "firstName" : "Jordan", "surname" : "H", "age" : 25, "height" : 182, "hobbies" : [ "Gaming", "Reading", "Writing course-ware" ] }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79b"), "firstName" : "Bill", "surname" : "S", "age" : 28, "height" : 167, "hobbies" : [ "Philately", "Knitting" ] }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79c"), "firstName" : "Ben", "surname" : "S", "age" : 32, "height" : 157, "hobbies" : [ "Poker", "Blackjack" ] }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79d"), "firstName" : "Sally", "surname" : "B", "age" : 34, "height" : 189, "hobbies" : [ "Football", "Air Guitar", "Climbing" ] }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79e"), "firstName" : "Emily", "surname" : "P", "age" : 42, "height" : 174, "hobbies" : [ "Go-Karting", "Ultimate Frisbee" ] }
> db.people.updateOne({"firstName": "Ben"}, {"$push": {"hobbies": "Roulette"}});
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.people.find({"firstName": "Ben"});
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79c"), "firstName" : "Ben", "surname" : "S", "age" : 32, "height" : 157, "hobbies" : [ "Poker", "Blackjack", "Roulette" ] }
```
### 6. Sally stops playing air guitar.
```json
> db.people.updateOne({"firstName": "Sally"}, {"$pull": {"hobbies": {"$eq": "Air Guitar"}}});
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.people.find({"firstName": "Sally"});
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79d"), "firstName" : "Sally", "surname" : "B", "age" : 34, "height" : 189, "hobbies" : [ "Football", "Climbing" ] }
```
### 7. Find everyone over 30.
```json
> db.people.find({"age": {"$gt": 30}});
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79c"), "firstName" : "Ben", "surname" : "S", "age" : 32, "height" : 157, "hobbies" : [ "Poker", "Blackjack", "Roulette" ] }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79d"), "firstName" : "Sally", "surname" : "B", "age" : 34, "height" : 189, "hobbies" : [ "Football", "Climbing" ] }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79e"), "firstName" : "Emily", "surname" : "P", "age" : 42, "height" : 174, "hobbies" : [ "Go-Karting", "Ultimate Frisbee" ] }
```
### 8. Find everyone under 30 but only show their first and last name.
```json
> db.people.find({"age": {"$lt": 30}}, {"_id": false, "firstName": true, "surname": true});
{ "firstName" : "Jordan", "surname" : "H" }
{ "firstName" : "Bill", "surname" : "S" }
> db.people.find({"age": {"$lt": 30}}, {"_id": false, "firstName": true, "surname": 1});
{ "firstName" : "Jordan", "surname" : "H" }
{ "firstName" : "Bill", "surname" : "S" }
> db.people.find({"age": {"$lt": 30}}, {"_id": false, "firstName": 0, "surname": 1});
Error: error: {
        "ok" : 0,
        "errmsg" : "Cannot do inclusion on field surname in exclusion projection",
        "code" : 31253,
        "codeName" : "Location31253"
}
> db.people.find({"age": {"$lt": 30}}, {"_id": false, "firstName": 1, "surname": 1});
{ "firstName" : "Jordan", "surname" : "H" }
{ "firstName" : "Bill", "surname" : "S" }
> db.people.find({"age": {"$lt": 30}}, {"_id": 0, "firstName": 0, "surname": 0});
{ "age" : 25, "height" : 182, "hobbies" : [ "Gaming", "Reading", "Writing course-ware" ] }
{ "age" : 28, "height" : 167, "hobbies" : [ "Philately", "Knitting" ] }
```
### 9. Everyone over 30 now wears glasses.
```json
> db.people.update
db.people.update(      db.people.updateMany(  db.people.updateOne(
> db.people.updateMany({"age": {"$gt": 30}}, {"$set": {"glasses": true}});
{ "acknowledged" : true, "matchedCount" : 3, "modifiedCount" : 3 }
> db.people.find({});
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79a"), "firstName" : "Jordan", "surname" : "H", "age" : 25, "height" : 182, "hobbies" : [ "Gaming", "Reading", "Writing course-ware" ] }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79b"), "firstName" : "Bill", "surname" : "S", "age" : 28, "height" : 167, "hobbies" : [ "Philately", "Knitting" ] }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79c"), "firstName" : "Ben", "surname" : "S", "age" : 32, "height" : 157, "hobbies" : [ "Poker", "Blackjack", "Roulette" ], "glasses" : true }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79d"), "firstName" : "Sally", "surname" : "B", "age" : 34, "height" : 189, "hobbies" : [ "Football", "Climbing" ], "glasses" : true }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79e"), "firstName" : "Emily", "surname" : "P", "age" : 42, "height" : 174, "hobbies" : [ "Go-Karting", "Ultimate Frisbee" ], "glasses" : true }
```
### 10. Delete everyone not wearing glasses.
```json
> db.people.deleteMany({"glasses": {"$ne": true}});
{ "acknowledged" : true, "deletedCount" : 2 }
> db.people.find({});
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79c"), "firstName" : "Ben", "surname" : "S", "age" : 32, "height" : 157, "hobbies" : [ "Poker", "Blackjack", "Roulette" ], "glasses" : true }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79d"), "firstName" : "Sally", "surname" : "B", "age" : 34, "height" : 189, "hobbies" : [ "Football", "Climbing" ], "glasses" : true }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79e"), "firstName" : "Emily", "surname" : "P", "age" : 42, "height" : 174, "hobbies" : [ "Go-Karting", "Ultimate Frisbee" ], "glasses" : true }
```
### 11. Ben decides to buy a dog, update his document in the collection to have an *embedded* document representing this dog (name this field 'pet'). Make sure to give the embedded doc sufficient information (e.g. name, age, species)
```json
> db.people.updateOne({"firstName": "Ben"}, {"$set": {"pet": {"name": "pn", "age": 5, "species": "dog"}}});
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.people.find({});
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79c"), "firstName" : "Ben", "surname" : "S", "age" : 32, "height" : 157, "hobbies" : [ "Poker", "Blackjack", "Roulette" ], "glasses" : true, "pet" : { "name" : "pn", "age" : 5, "species" : "dog" } }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79d"), "firstName" : "Sally", "surname" : "B", "age" : 34, "height" : 189, "hobbies" : [ "Football", "Climbing" ], "glasses" : true }
{ "_id" : ObjectId("629ddf48d5f2c976fa09e79e"), "firstName" : "Emily", "surname" : "P", "age" : 42, "height" : 174, "hobbies" : [ "Go-Karting", "Ultimate Frisbee" ], "glasses" : true }
```
