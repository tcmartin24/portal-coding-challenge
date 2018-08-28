package io.ctl.portal.challenge.controller;

import io.ctl.portal.challenge.model.Person;
import io.ctl.portal.challenge.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PersonController {

    @Autowired
    private PersonService personService;

    public List<Person> getPeople() {
        return personService.getPeople();
    }

    public Person savePerson(Person person) {
        return personService.savePerson(person);
    }
}
