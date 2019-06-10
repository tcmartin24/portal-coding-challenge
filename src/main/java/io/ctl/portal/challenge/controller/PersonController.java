package io.ctl.portal.challenge.controller;

import io.ctl.portal.challenge.model.Person;
import io.ctl.portal.challenge.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/people")
public class PersonController {

    @Autowired
    private PersonService personService;

    @GetMapping("/getPeople")
    public List<Person> getPeople() {
        return personService.getPeople();
    }

    @PostMapping("/person")
    public Person savePerson(@RequestBody Person person) {
        return personService.savePerson(person);
    }
}
