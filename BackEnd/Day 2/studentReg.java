package com.admission.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;


@Entity
public class studentReg {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String FullName;
    private String email;
    private String Mobile;
    private String pswd;
    public  studentReg() {
        // Default constructor
    }
    
    public studentReg(String FullName, String email, String Mobile, String pswd) {
        this.FullName = FullName;
        this.email = email;
        this.Mobile = Mobile;
        this.pswd = pswd;
    }
    
    // Getters and setters
    
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getFullName() {
        return FullName;
    }
    
    public void setFullName(String FullName) {
        this.FullName = FullName;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    public String getMobile() {
        return Mobile;
    }
    
    public void setMobile(String Mobile) {
        this.Mobile = Mobile;
    }
    
    public String getPswd() {
        return pswd;
    }
    
    public void setPswd(String pswd) {
        this.pswd = pswd;
    }
}