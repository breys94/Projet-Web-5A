package com.breys.breysequestre.horse;


public class HorseDTO implements Comparable<HorseDTO> {
    private Integer id;
    private Integer idOwner;
    private Integer age;
    private String name;
    private String sexe;
    private Float height;
    private Float weight;
    private Integer nbWins;
    private Integer nbLoses;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIdOwner() {
        return idOwner;
    }

    public void setIdOwner(Integer idOwner) {
        this.idOwner = idOwner;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSexe() {
        return sexe;
    }

    public void setSexe(String sexe) {
        this.sexe = sexe;
    }

    public Float getHeight() {
        return height;
    }

    public void setHeight(Float height) {
        this.height = height;
    }

    public Float getWeight() {
        return weight;
    }

    public void setWeight(Float weight) {
        this.weight = weight;
    }

    public Integer getNbWins() {
        return nbWins;
    }

    public void setNbWins(Integer nbWins) {
        this.nbWins = nbWins;
    }

    public Integer getNbLoses() {
        return nbLoses;
    }

    public void setNbLoses(Integer nbLoses) {
        this.nbLoses = nbLoses;
    }

    @Override
    public int compareTo(HorseDTO o) {
        return 0;
    }
}
