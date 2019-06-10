package io.ctl.portal.challenge.service;

import io.ctl.portal.challenge.model.Person;
import org.junit.Test;

import static org.assertj.core.api.Assertions.*;

import static org.junit.Assert.*;

public class PersonService_UT {

    private PersonService service = new PersonService();

    @Test
    public void savedPersonIDIs100WhenStoreIsEmpty() {
        Person savedPerson = service.savePerson(new Person());
        assertThat(savedPerson.getId()).isEqualTo(100);
    }

    @Test
    public void savedPersonIdIs400WhenStoreHas3People() {
        service.savePerson(new Person());
        service.savePerson(new Person());
        service.savePerson(new Person());
        Person savedPerson = service.savePerson(new Person());
        assertThat(savedPerson.getId()).isEqualTo(400);
    }

}