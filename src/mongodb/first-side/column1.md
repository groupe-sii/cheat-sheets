MongoDB version: __5.0.9+__ - Date: __June 2022__

# Main concepts

<span class="concept">Document</span> : A record in MongoDB is a document, which is a data structure composed of field and value pairs. MongoDB documents are **very** similar to JSON objects. Values may include other documents, arrays, and arrays of documents.

```
{
    name: "John",
    age: 77,
    nets: [ "expert", "developer", "superhero" ],
    lastExp: { name: "Full-Stack Lead Developer", duration: 10.5 }
}
```

Note : each document requires a unique <span class="concept">_id</span> field (uses the ObjectId BSON type) that acts as a primary key. The MongoDB driver generates it if omitted.

<span class="concept">Collection</span> : A grouping of MongoDB documents. A collection is the equivalent of an RDBMS table. Collections do not enforce a schema by default. Documents within a collection can have different fields but should have a similar or related purpose. 

# BSON types

Each value of a field/value pair is recorded as a BSON type. BSON is a binary serialization format. The most used and useful BSON types in MongoDB are (each BSON type has both integer and string identifiers) :

**Double** : 1 "double" ; **String** : 2 "string" ; **Object** : 3 "object" ; **Array** : 4 "array" ; **ObjectId** : 7 "objectId" ; **Boolean** : 8 "bool" ; **Date** : 9 "date" ; **Null** : 10 "null" ; **32-bit integer** : 16 "int" ; **64-bit integer** : 18 "long" ; **Decimal128** : 19 "decimal"

Note : **Timestamp** data type is for internal MongoDB use. You will want to use the BSON date type.

# Time series collections
Time series collections came with version 5.0 of MongoDB. They efficiently store sequences of measurements over a period of time. Time series data is any data that is collected over time and is uniquely identified by one or more unchanging parameters. Consider using them for measurements storage !
