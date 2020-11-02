package com.breys.breysequestre.reprise;

import com.breys.breysequestre.reprise.Reprise;

import java.util.List;

public interface RepriseService {

    public Reprise saveReprise(Reprise reprise);

    public Reprise updateReprise(Reprise reprise);

    public void deleteReprise(Integer repriseId);

    public boolean checkIfIdexists(Integer id);

    public List<Reprise> findReprises();

    public List<Reprise> findRepriseByEmailMonitor(String emailMonitor);

    public Reprise findRepriseById(Integer repriseId);

}
