# Query operators
<span class="concept">Comparison</span>
- **$eq**/**$ne** : Equals/Not equals
- **$gt**/**$gte**/**$lt**/**$lte** : Greater than/g.t. equals/ ...
- **$in**/**$nin** : Any/None of values specified in an array

<span class="concept">Logical</span>
- **$and**/**$nor**/**$or** : Joins clauses with AND/NOR/OR
- **$not** : Invert the effect of a query expression

<span class="concept">Element</span>
- **$exists** : Documents that have the specified field
- **$type** : Field is of the specified type.

<span class="concept">Array</span>
- **$all** : Arrays that contain all elements
- **$elemMatch** : Element in the array field matches all the specified $elemMatch conditions.
- **$size** : Array size

More operators : $regex, $text (text search), $where (javascript expression), geometries operators, ...
# Update operators
<span class="concept">Fields</span>
- **$currentDate** : Sets value to current date
- **$inc**/**$mul** : Increments/Multiplies value by specified amount
- **$min**/**$max** : Updates if the specified value is less/more than existing 
- **$set**/**$unset** : Sets/Removes the value of a field in a document.

More operators : $rename, $setOnInsert.

<span class="concept">Array</span>
- **$**/**$[]**/**$[&lt;identifier&gt;]** : Update first/all/all elements that match the array filters
- **$push**/**$addToSet** : Adds/Adds if not exists
- **$pop** : Removes first or last item
- **$pull/$pullAll** : Removes all/all from an array

Modifiers : $each, $position, $slice, $sort
