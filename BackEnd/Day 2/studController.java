
package com.admission.demo.Controller;

import com.admission.demo.Model.studentReg;
import com.admission.demo.Service.studService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:5173/",allowedHeaders = "*")
public class studController {

    @Autowired
    private studService studService;

    @GetMapping("/all")
    public List<studentReg> getAllStudents() {
        return studService.getAllStudents();
    }

    @PostMapping("/add")
    public studentReg createstudentReg(@RequestBody studentReg studentReg) {
        return studService.createstudentReg(studentReg);
    }

    @PutMapping("/update")
    public studentReg updatestudentReg(@PathVariable Long id,@RequestBody studentReg updatedstudentrReg) {
        return studService.updatestudentReg(id,updatedstudentrReg);
    }

    @DeleteMapping("/delete/{id}")
    public void deletestudentReg(@PathVariable Long id) {
        studService.deletestudentReg(id);
    }
}