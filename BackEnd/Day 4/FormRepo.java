package com.admission.demo.Repository;

import com.admission.demo.Model.Form;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormRepo extends JpaRepository<Form, Long> {
}