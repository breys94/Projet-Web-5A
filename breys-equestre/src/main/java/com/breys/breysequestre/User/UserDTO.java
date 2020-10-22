package com.breys.breysequestre.User;

public class UserDTO implements Comparable<UserDTO>{

    private Integer id;

    private String firstName;
    private String lastName;
    private String phone;
    private String email;
    private String password;
    private String licence;
    private String role;
    //Correspond au code envoyé lors d'une réintialisation de mot de passe
    private String tmpCode;
    private boolean isLog;
    private Integer nbBlock;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getLicence() {
        return licence;
    }

    public void setLicence(String licence) {
        this.licence = licence;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getTmpCode() {
        return tmpCode;
    }

    public void setTmpCode(String tmpCode) {
        this.tmpCode = tmpCode;
    }

    public boolean getIsLog() {
        return isLog;
    }

    public void setIsLog(boolean isLog) {
        this.isLog = isLog;
    }

    public Integer getNbBlock() {
        return nbBlock;
    }

    public void setNbBlock(Integer nbBlock) {
        this.nbBlock = nbBlock;
    }

    @Override
    public int compareTo(UserDTO o) {
        return this.lastName.compareToIgnoreCase(o.getLastName());
    }

}
