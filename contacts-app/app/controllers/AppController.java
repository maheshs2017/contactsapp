package controllers;

import static play.libs.Json.toJson;

import java.util.List;

import org.bson.types.ObjectId;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;
import org.mongodb.morphia.query.Query;

import com.mongodb.MongoClient;
import com.mongodb.WriteResult;

import models.Person;
import play.data.Form;
import play.mvc.Controller;
import play.mvc.Result;
import views.html.index;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class AppController extends Controller {

	final Morphia morphia = new Morphia();
	final Datastore datastore = morphia.createDatastore(new MongoClient(), "contacts");
	final Query<Person> query = datastore.createQuery(Person.class);
	
	public AppController() {
		morphia.mapPackage("models");
		
	}
	
    public Result index() {
        return ok(index.render("Hello World!"));
    }
    
    public Result addPerson() {
    	Form form = Form.form(Person.class).bindFromRequest();
    	
		Person person = (Person) form.get();
    	datastore.save(person);
    	
    	return redirect(routes.AppController.index());
    }
    
    public Result deletePerson() {
    	Form form = Form.form(Person.class).bindFromRequest();
    	
    	Person person = (Person) form.get();
    	

    	ObjectId id = new ObjectId(person.getId());
    	Query<Person> deleteQuery = datastore.createQuery(Person.class).filter("_id = ", id);
    	deleteQuery.disableValidation();
    	Person dbPerson = deleteQuery.get();
    	
    	WriteResult result = datastore.delete(deleteQuery);
    	
      	return redirect(routes.AppController.index());
    }
    
    public Result getPersons() {
    	List<Person> persons = query.asList(); 
    	return ok(toJson(persons));
    }
    

}
