package com.breys.breysequestre.affiliation;

import javax.persistence.*;

@Entity
@Table(name = "AFFILIATION")
public class Affiliation {

    private Integer id;
    private Integer idHorse;
    private String emailUser;
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

    @Column(name = "USER_EMAIL", nullable = false)
    public String getEmailUser() {
        return emailUser;
    }

    public void setEmailUser(String emailUser) {
        this.emailUser = emailUser;
    }

    @Column(name = "REPRISE_ID", nullable = false)
    public Integer getIdReprise() {
        return idReprise;
    }

    public void setIdReprise(Integer idReprise) {
        this.idReprise = idReprise;
    }

    @Column(name = "HORSE_ID", nullable = true)
    public Integer getIdHorse() {
        return idHorse;
    }

    public void setIdHorse(Integer idHorse) {
        this.idHorse = idHorse;
    }

}
