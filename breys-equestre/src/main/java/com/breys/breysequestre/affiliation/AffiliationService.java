package com.breys.breysequestre.affiliation;

import com.breys.breysequestre.affiliation.Affiliation;

import java.util.List;

public interface AffiliationService {

    public Affiliation saveAffiliation(Affiliation affiliation);

    public Affiliation updateAffiliation(Affiliation affiliation);

    public void deleteAffiliation(Integer AffiliationId);

    public boolean checkIfIdexists(Integer id);

    public List<Affiliation> findAffiliations();

    public List<Affiliation> findAffiliationByIdReprise(Integer idUser);

    public List<Affiliation> findAffiliationByEmailUser(String EmailUser);

    public Affiliation findAffiliationById(Integer affiliationId);
    
}
