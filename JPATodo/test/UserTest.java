import static org.junit.Assert.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import entities.User;

public class UserTest {
	private EntityManagerFactory emf;
	private EntityManager em;
	private User user;
	
	@Before
	public void setup() throws Exception {
		emf = Persistence.createEntityManagerFactory("Todo");
		em = emf.createEntityManager();
		user = em.find(User.class, 1);
		
	}
	
	@After
	public void tearDown() throws Exception {
		em.close();
		emf.close();
	}
	
	@Test
	public void test() {
	  boolean pass = true;
	  assertEquals(pass, true);
	}
	
	@Test
	public void test_todo_has_email() {
		assertEquals("test@test.com", user.getEmail());
	}
}
