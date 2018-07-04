# CRUD Operations
<span class="concept">Create</span>
```js
db.collection.insertOne() 
db.collection.insertMany()
```
```javascript
db.users.insertOne(
    { name: "John", surname: "Doe" }
) 
db.users.insertMany(
    { name: "John", surname: "Doe" },
    { name: "Jean", surname: "Dudule" }
)
```
Note : If the collection does not currently exist, insert operations will create the collection.

<span class="concept">Find</span> (see Query operators)
```javascript
db.collection.find()
```
```javascript
db.users.find(
    { age: { $gt: 18 } }
)
```

<span class="concept">Update</span> (see Query/Update operators)
```javascript
db.collection.updateOne()
db.collection.updateMany()
db.collection.replaceOne()
```
```javascript
db.users.updateMany(
    { age: { $gt: 60 } },
    { $set: { retirement: true } }
)
```
See <span class="concept">findAndModify</span> to modify and return a single document. By default, the returned document does not include the modifications made on the update.

<span class="concept">Delete</span>
```javascript
db.collection.deleteOne()
db.collection.deleteMany()
```
```javascript
db.users.deleteMany(
    { retirement: true }
)
```
