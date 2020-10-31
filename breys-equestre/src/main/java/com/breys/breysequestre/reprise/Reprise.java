package com.breys.breysequestre.reprise;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "REPRISE")
public class Reprise {

    private Integer id;
    private Integer idMonitor;
    private Date beginDate;
    private Date endDate;
    private Integer nbHorseRider;
    private Integer nbMaxHorseRider;
    private String title;
    private String level;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "REPRISE_ID")
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Column(name = "ID_MONITOR", nullable = false)
    public Integer getIdMonitor() {
        return idMonitor;
    }

    public void setIdMonitor(Integer idMonitor) {
        this.idMonitor = idMonitor;
    }

    @Column(name = "BEGIN_DATE", nullable = true)
    public Date getBeginDate() {
        return beginDate;
    }

    public void setBeginDate(Date beginDate) {
        this.beginDate = beginDate;
    }

    @Column(name = "END_DATE", nullable = true)
    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    @Column(name = "NB_HORSE_RIDER", nullable = true)
    public Integer getNbHorseRider() {
        return nbHorseRider;
    }

    public void setNbHorseRider(Integer nbHorseRider) {
        this.nbHorseRider = nbHorseRider;
    }

    @Column(name = "NB_MAX_HORSE_RIDER", nullable = false)
    public Integer getNbMaxHorseRider() {
        return nbMaxHorseRider;
    }

    public void setNbMaxHorseRider(Integer nbMaxHorseRider) {
        this.nbMaxHorseRider = nbMaxHorseRider;
    }

    @Column(name = "TITLE", nullable = true)
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Column(name = "LEVEL", nullable = false)
    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

}
