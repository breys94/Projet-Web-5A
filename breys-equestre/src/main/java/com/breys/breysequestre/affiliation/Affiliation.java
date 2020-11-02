package com.breys.breysequestre.affiliation;

import javax.persistence.*;

@Entity
@Table(name = "AFFILIATION")
public class Affiliation {

    private Integer id;
    private Integer idUser;
    private Integer idReprise;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "AFFILIATION_ID")
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Column(name = "USER_ID", nullable = false)
    public Integer getIdUser() {
        return idUser;
    }

    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
    }

    @Column(name = "REPRISE_ID", nullable = false)
    public Integer getIdReprise() {
        return idReprise;
    }

    public void setIdReprise(Integer idReprise) {
        this.idReprise = idReprise;
    }

}
