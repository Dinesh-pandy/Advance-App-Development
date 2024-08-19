
package com.admission.demo.Controller;

import com.admission.demo.Dto.AuthRequest;
import com.admission.demo.Model.studentReg;
import com.admission.demo.Service.JwtService;
import com.admission.demo.Service.studService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;

import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:5173/",allowedHeaders = "*")
public class studController {

    @Autowired
    private studService studService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping("/all")
    public List<studentReg> getAllStudents() {
        return studService.getAllStudents();
    }

    @PostMapping("/add")
    public studentReg createstudentReg(@RequestBody studentReg studentReg) {
        return studService.createstudentReg(studentReg);
    }
    @PostMapping("/addUser")
    public studentReg saveLogin(@RequestBody studentReg login) {
        return studService.saveLogin(login);
    }

    @PostMapping("/authenticate")
    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPswd()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(authRequest.getEmail());
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }

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