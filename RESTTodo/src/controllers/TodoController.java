package controllers;

import java.util.Collection;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import data.TodoDAO;
import entities.Todo;

@RestController
public class TodoController {

	@Autowired
	private TodoDAO todoDAO;

	@RequestMapping(path = "ping", method = RequestMethod.GET)
	public String ping() {
		return "PONG!";
	}

	@RequestMapping(path = "user/{uid}/todos", method = RequestMethod.GET)
	public Collection<Todo> index(HttpServletRequest req, HttpServletResponse res, @PathVariable int uid) {
		res.setStatus(200);
		return todoDAO.index(uid);
	}

	@RequestMapping(path = "user/{uid}/todo/{tid}", method = RequestMethod.GET)
	public Todo show(HttpServletRequest req, HttpServletResponse res,  @PathVariable int uid,  @PathVariable int tid) {
		res.setStatus(200);
		return todoDAO.show(uid, tid);
	}

	@RequestMapping(path = "user/{uid}/todo", method = RequestMethod.POST)
	public Todo create(HttpServletRequest req, HttpServletResponse res, @PathVariable int uid, @RequestBody String todoJson) {
		try {
			return todoDAO.create(uid, todoJson);
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			return null;
		}
	}

	@RequestMapping(path = "user/{uid}/todo/{tid}", method = RequestMethod.PUT)
	public Todo update(HttpServletRequest req, HttpServletResponse res, @PathVariable int uid, @PathVariable int tid, @RequestBody String todoJson) {
		try {
			return todoDAO.update(uid, tid, todoJson);
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			return null;
		}
	}

	@RequestMapping(path = "user/{uid}/todo/{tid}", method = RequestMethod.DELETE)
	public Boolean destroy(HttpServletRequest req, HttpServletResponse res, @PathVariable int uid, @PathVariable int tid) {
		res.setStatus(202);
		return todoDAO.destroy(uid, tid);
	}
}
