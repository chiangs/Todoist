package entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Todo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String task;
	
	private String description;
	
	private boolean completed;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;
	
	@Column(name="due_date")
	private String dueDate;
	
	@Column(name="complete_date")
	private String completeDate;
	
	@Column(name="created_at")
	private Date createdAt;
	
	@Column(name="updated_at")
	private Date updatedAt;


	//toString
	@Override
	public String toString() {
		return "Todo [id=" + id + ", task=" + task + ", description=" + description + ", completed=" + completed
				+ ", user_id=" + user + ", dueDate=" + dueDate + ", completeDate=" + completeDate
				+ ", createdAt=" + createdAt + ", updatedAt=" + updatedAt + "]";
	}

	//gets/sets
	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isCompleted() {
		return completed;
	}

	public void setCompleted(boolean completed) {
		this.completed = completed;
	}

	public User getuserId() {
		return user;
	}

	public void setuserId(User user) {
		this.user = user;
	}

	public String getdueDate() {
		return dueDate;
	}

	public void setdueDate(String dueDate) {
		this.dueDate = dueDate;
	}

	public String getcompleteDate() {
		return completeDate;
	}

	public void setcompleteDate(String completeDate) {
		this.completeDate = completeDate;
	}

	public Date getcreatedAt() {
		return createdAt;
	}

	public void setcreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getupdatedAt() {
		return updatedAt;
	}

	public void setupdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public int getId() {
		return id;
	}

}
