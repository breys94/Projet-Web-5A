package com.breys.breysequestre.horse;

import javax.persistence.*;

@Entity
@Table(name = "HORSE")
public class Horse {

    private Integer id;
    private String emailOwner;
    private Integer age;
    private String name;
    private String sexe;
    private Float height;
    private Float weight;
    private Integer nbWins;
    private Integer nbLoses;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "HORSE_ID")
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Column(name = "EMAIL_OWNER", nullable = true)
    public String getEmailOwner() {
        return emailOwner;
    }

    public void setEmailOwner(String emailOwner) {
        this.emailOwner = emailOwner;
    }

    @Column(name = "AGE", nullable = false)
    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Column(name = "NAME", nullable = false, unique = true)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "SEXE", nullable = false)
    public String getSexe() {
        return sexe;
    }

    public void setSexe(String sexe) {
        this.sexe = sexe;
    }

    @Column(name = "NBWINS", nullable = false)
    public Integer getNbWins() {
        return nbWins;
    }

    public void setNbWins(Integer nbWins) {
        this.nbWins = nbWins;
    }

    @Column(name = "NBLOSES", nullable = false)
    public Integer getNbLoses() {
        return nbLoses;
    }

    public void setNbLoses(Integer nbLoses) {
        this.nbLoses = nbLoses;
    }

    @Column(name = "WEIGHT", nullable = false)
    public Float getWeight() {
        return weight;
    }

    public void setWeight(Float weight) {
        this.weight = weight;
    }

    @Column(name = "HEIGHT", nullable = false)
    public Float getHeight() {
        return height;
    }

    public void setHeight(Float height) {
        this.height = height;
    }

}
