package com.breys.breysequestre.affiliation;


public class AffiliationDTO implements Comparable<AffiliationDTO> {

    private Integer id;
    private String emailUser;
    private Integer idReprise;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmailUser() {
        return emailUser;
    }

    public void setEmailUser(String emailUser) {
        this.emailUser = emailUser;
    }

    public Integer getIdReprise() {
        return idReprise;
    }

    public void setIdReprise(Integer idReprise) {
        this.idReprise = idReprise;
    }

    @Override
    public int compareTo(AffiliationDTO o) {
        return 0;
    }
}
