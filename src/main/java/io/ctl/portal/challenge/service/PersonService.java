package io.ctl.portal.challenge.service;

import io.ctl.portal.challenge.model.Person;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Component
public class PersonService {

    private List<Person> people = new ArrayList();

    public List<Person> getPeople() {
        return people;
    }

    public Person savePerson(Person person) {
        int nextId = (100 * people.size()) + 100;
        person.setId(nextId);
        people.add(person);
        return person;
    }
}
