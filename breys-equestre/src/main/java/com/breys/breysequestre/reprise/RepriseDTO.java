package com.breys.breysequestre.reprise;

import java.util.Date;

public class RepriseDTO implements Comparable<RepriseDTO> {

    private Integer id;
    private String emailMonitor;

    public String getEmailMonitor() {
        return emailMonitor;
    }

    public void setEmailMonitor(String emailMonitor) {
        this.emailMonitor = emailMonitor;
    }

    private Date beginDate;
    private Date endDate;
    private Integer nbHorseRider;
    private Integer nbMaxHorseRider;
    private String title;
    private String level;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getBeginDate() {
        return beginDate;
    }

    public void setBeginDate(Date beginDate) {
        this.beginDate = beginDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Integer getNbHorseRider() {
        return nbHorseRider;
    }

    public void setNbHorseRider(Integer nbHorseRider) {
        this.nbHorseRider = nbHorseRider;
    }

    public Integer getNbMaxHorseRider() {
        return nbMaxHorseRider;
    }

    public void setNbMaxHorseRider(Integer nbMaxHorseRider) {
        this.nbMaxHorseRider = nbMaxHorseRider;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    @Override
    public int compareTo(RepriseDTO o) {
        return 0;
    }
}
