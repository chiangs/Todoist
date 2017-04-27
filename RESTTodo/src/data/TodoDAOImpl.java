package data;

import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import entities.Todo;
import entities.User;

@Transactional
@Repository
public class TodoDAOImpl implements TodoDAO {
	
	@PersistenceContext
	private EntityManager em;

	@Override
	public Set<Todo> index(int uid) {
		User u = em.find(User.class, uid);
		return u.getTodos();
	}

	@Override
	public Todo show(int uid, int tid) {
		return em.find(Todo.class, tid);
	}

	@Override
	public Todo create(int uid, String todoJson) {
		try {
			ObjectMapper mapper = new ObjectMapper();
			Todo mTodo = mapper.readValue(todoJson, Todo.class);
			mTodo.setUser(em.find(User.class, uid));
			em.persist(mTodo);
			em.flush();
			return mTodo;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public Todo update(int uid, int tid, String todoJson) {
		try {
			ObjectMapper mapper = new ObjectMapper();
			Todo mTodo = mapper.readValue(todoJson, Todo.class);
			Todo uTodo = em.find(Todo.class, tid);
			uTodo.setCompleteDate(mTodo.getCompleteDate());
			uTodo.setCreatedAt(mTodo.getCreatedAt());
			uTodo.setCompleted(mTodo.isCompleted());
			uTodo.setDescription(mTodo.getDescription());
			uTodo.setDueDate(mTodo.getDueDate());
			uTodo.setTask(mTodo.getTask());
			uTodo.setUpdatedAt(mTodo.getUpdatedAt());
			return uTodo;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public Boolean destroy(int uid, int tid) {
		Todo dTodo = em.find(Todo.class, tid);
		em.remove(dTodo);
		return em.contains(dTodo);
	}
}