# Indexes
Appropriate indexes (and index orderings) are essential for efficient queries execution.
```javascript
db.collection.createIndex()
```
```javascript
db.users.createIndex( { age: -1 } )
db.users.createIndex( { name: 1, surname: 1 } )
```
Note: <span class="concept">_id</span> field is a unique index for every collection.

# Aggregation pipeline

Aggregation operations process data records, can perform a variety of operations, and return computed results. Documents pass through the stages of the pipeline in sequence.
```javascript
db.collection.aggregate([ { operation: {  } }, ... ])
```
```javascript
db.users.aggregate([
    { $group: { _id: "$nets", age: { $avg: "$age"} } },
    { $match: { age: { $gt: 35 } } }
])
```
Note : map-reduce function is an alternative way for aggregation. You will want to use aggregation pipeline.

# Wanna become expert ?
- **Reporting** : mongostat, and many more utilities
- **Replication** : redundancy and high availability	
- **Sharding** : data distribution and horizontal scaling for high query rates and exhausted CPU 
- **Bulk Write** : for multiple ordered rows loads
- **Change Streams** : access real-time data changes

# Tools and documentation
<span class="concept">Studio3T</span> : Useful and powerful tool to build queries through a solid UI. [studio3t.com/download](https://studio3t.com/download) .

<span class="concept">Official documentation</Span> : A "must-have" favorite. Manual : [docs.mongodb.com/manual](https://docs.mongodb.com/manual/) and reference : [docs.mongodb.com/manual/reference](https://docs.mongodb.com/manual/reference/)
