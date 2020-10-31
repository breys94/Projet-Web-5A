package com.breys.breysequestre.reprise;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RepriseDao extends JpaRepository<Reprise, Integer> {

    public Reprise findRepriseById(Integer id);
    public Reprise findRepriseByTitle(String title);
    public List<Reprise> findRepriseByIdMonitor(Integer idMonitor);

}
