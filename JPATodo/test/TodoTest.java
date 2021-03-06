import static org.junit.Assert.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import entities.Todo;


public class TodoTest {
	private EntityManagerFactory emf;
	private EntityManager em;
	private Todo todo;
	
	@Before
	public void setup() throws Exception {
		emf = Persistence.createEntityManagerFactory("Todo");
		em = emf.createEntityManager();
		todo = em.find(Todo.class, 1);
		
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
	public void test_todo_has_tasks() {
		assertEquals("test", todo.getTask());
	}
}
