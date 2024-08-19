package com.admission.demo.Service;

import com.admission.demo.Model.Form;
import com.admission.demo.Repository.FormRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FormService {

    @Autowired
    private FormRepo formRepo;

    public List<Form> getAllForms() {
        return formRepo.findAll();
    }

    public Optional<Form> getFormById(Long id) {
        return formRepo.findById(id);
    }

    public Form saveForm(Form form) {
        return formRepo.save(form);
    }

    public void deleteForm(Long id) {
        formRepo.deleteById(id);
    }
}