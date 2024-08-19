package com.admission.demo.Controller;

import com.admission.demo.Model.Form;
import com.admission.demo.Service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/form")
@CrossOrigin(origins = "http://localhost:5173/",allowedHeaders = "*")
public class FormController {

    @Autowired
    private FormService formService;

    @GetMapping
    public ResponseEntity<List<Form>> getAllForms() {
        List<Form> forms = formService.getAllForms();
        return new ResponseEntity<>(forms, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Form>> getFormById(@PathVariable Long id) {
        Optional<Form> form = formService.getFormById(id);
        return new ResponseEntity<>(form, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Form> saveForm(@RequestBody Form form) {
        Form savedForm = formService.saveForm(form);
        return new ResponseEntity<>(savedForm, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteForm(@PathVariable Long id) {
        formService.deleteForm(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}