package com.breys.breysequestre.affiliation;


public class AffiliationDTO implements Comparable<AffiliationDTO> {

    private Integer id;
    private Integer idUser;
    private Integer idReprise;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIdUser() {
        return idUser;
    }

    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
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
