# Create query from properties

Create your interface implementing the **CrudRepository** :
```Java
public interface PersonRepository extends CrudRepository<User, Long>
```

Create a "find by" query :
```Java
List<Person> findByLastname(String lastname);
```

Using several class attributes :
```Java
List<Person> findByEmailAddressAndLastname(EmailAddress emailAddress, String lastname);
```

Using several properties and distinct:
```Java
List<Person> findDistinctPeopleByLastnameOrFirstname(String lastname, String firstname);
```

Ignoring case for all properties :
```Java
List<Person> findByLastnameAndFirstnameAllIgnoreCase(String lastname, String firstname);
```

Using ORDER BY for a query
```Java
List<Person> findByLastnameOrderByFirstnameAsc(String lastname);
```

Counting :
```Java
Long countByLastname(String lastname);
```

Deleting by property :
```Java
Long deleteByLastname(String lastname);
```

Using property expressions (zipCode attribute in address object) :
```Java
List<Person> findByAddress_ZipCode(ZipCode zipCode);
```

# Paging and sorting requests

Finding data using paging
```Java
List<User> findByLastname(String lastname, Pageable pageable);
```

Sorting data
```Java
List<User> findByLastname(String lastname, Sort sort);
```

Paging first 10 by property
```Java
Page<User> queryFirst10ByLastname(String lastname, Pageable pageable);
```

# Supported Keywords

The supported keywords are:
And, Or, Is, Equals, Between, LessThan, LessThanEqual, GreaterThan, GreaterThanEqual, findByAgeGreaterThanEqual,
After, Before, IsNull, IsNotNull, NotNull, Like, NotLike, StartingWith, EndingWith, Containing, OrderBy,
Not, In, NotIn, True, False, IgnoreCase
