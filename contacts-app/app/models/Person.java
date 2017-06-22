package models;


import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;
import org.mongodb.morphia.annotations.Property;

import play.data.validation.Constraints;

@Entity(value="person")
public class Person {
    
    @Id
	private String _id;
    
	@Constraints.Required
	@Property
	private String firstName;
	@Property
	private String lastName;
	@Property
	private String email;
	
	
	public String getId() {
		return _id;
	}


	public void setId(String id) {
		this._id = id;
	}


	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	@Override
	public String toString() {
		return "Person [_id=" + _id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + "]";
	}
}
