# Create query from properties

Create your interface implementing the **CrudRepository** :
`public interface PersonRepository extends CrudRepository<User, Long>`

Create a "find by" query :
`List<Person> findByLastname(String lastname);`

Using several class attributes :
`List<Person> findByEmailAddressAndLastname(EmailAddress emailAddress, String lastname);`

Using several properties and distinct:
`List<Person> findDistinctPeopleByLastnameOrFirstname(String lastname, String firstname);`

Ignoring case for all properties :
`List<Person> findByLastnameAndFirstnameAllIgnoreCase(String lastname, String firstname);`

Using ORDER BY for a query
`List<Person> findByLastnameOrderByFirstnameAsc(String lastname);`

Counting :
`Long countByLastname(String lastname);`

Deleting by property :
`Long deleteByLastname(String lastname);`

Using property expressions (zipCode attribute in address object) :
`List<Person> findByAddress_ZipCode(ZipCode zipCode);`

# Paging and sorting requests

Finding data using paging
`List<User> findByLastname(String lastname, Pageable pageable);`

Sorting data
`List<User> findByLastname(String lastname, Sort sort);`

Paging first 10 by property
`Page<User> queryFirst10ByLastname(String lastname, Pageable pageable);`

# Supported Keywords

The supported keywords are:
`And, Or, Is, Equals, Between, LessThan, LessThanEqual, GreaterThan, GreaterThanEqual, findByAgeGreaterThanEqual, 
After, Before, IsNull, IsNotNull, NotNull, Like, NotLike, StartingWith, EndingWith, Containing, OrderBy, 
Not, In, NotIn, True, False, IgnoreCase`
