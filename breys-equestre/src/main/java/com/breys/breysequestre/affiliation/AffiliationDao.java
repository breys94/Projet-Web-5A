package com.breys.breysequestre.affiliation;

import com.breys.breysequestre.reprise.Reprise;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AffiliationDao extends JpaRepository<Affiliation, Integer> {

    public List<Affiliation> findAffiliationByIdReprise(Integer id);
    public List<Affiliation> findAffiliationByEmailUser(String emailUser);
    public Affiliation findAffiliationById(Integer id);

}
