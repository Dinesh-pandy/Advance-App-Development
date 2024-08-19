package com.admission.demo.Repository;

import com.admission.demo.Model.studentReg;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface studRepo  extends JpaRepository<studentReg, Long>{
    
}