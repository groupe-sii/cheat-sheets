# Predicates

Implements QueryDslPredicateExecutor:
`interface UserRepository extends CrudRepository<User, Long>, QueryDslPredicateExecutor<User>`

Working with predicates:
`Predicate predicate = user.firstname.equalsIgnoreCase("dave")
.and(user.lastname.startsWithIgnoreCase("mathews"));`
`userRepository.findAll(predicate);`

# Using @Query

Implements the JPA repository
`public interface UserRepository extends JpaRepository<User, Long>`

Named queries in an interface
`@Query("select u from User u where u.firstname like %?1")`
`List<User> findByFirstnameEndsWith(String firstname);`

Streaming the result of a query with java 8
`@Query("select u from User u")`
`Stream<User> findAllByCustomQueryAndStream();`

# Native queries

Native queries can be executed using an EntityManager
`@PersistenceContext private EntityManager em;`
`...`
`Query q = em.createNativeQuery("SELECT a.id, a.version, a.firstname, a.lastname FROM Author a", Author.class);`
`List<Author> authors = q.getResultList();`

Native queries using @Query
`@Query(value = "SELECT * FROM USERS WHERE LASTNAME = ?1",`
`countQuery = "SELECT count(*) FROM USERS WHERE LASTNAME = ?1",`
`nativeQuery = true)`
`Page<User> findByLastname(String lastname, Pageable pageable);`