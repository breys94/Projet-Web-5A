package com.breys.breysequestre.affiliation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service("AffiliationService")
@Transactional
public class AffiliationServiceImpl implements AffiliationService {

    @Autowired
    private AffiliationDao affiliationDao;

    @Override
    public Affiliation saveAffiliation(Affiliation affiliation) {
        return affiliationDao.save(affiliation);
    }

    @Override
    public Affiliation updateAffiliation(Affiliation affiliation) {
        return affiliationDao.save(affiliation);
    }

    @Override
    public void deleteAffiliation(Integer affiliationId) {
        affiliationDao.deleteById(affiliationId);
    }

    @Override
    public boolean checkIfIdexists(Integer id) {
        return affiliationDao.existsById(id);
    }

    @Override
    public List<Affiliation> findAffiliations() {
        return affiliationDao.findAll();
    }

    @Override
    public List<Affiliation> findAffiliationByIdReprise(Integer id) {
        return affiliationDao.findAffiliationByIdReprise(id);
    }

    @Override
    public List<Affiliation> findAffiliationByEmailUser(String emailUser) {
        return affiliationDao.findAffiliationByEmailUser(emailUser);
    }

    @Override
    public Affiliation findAffiliationById(Integer affiliationId) {
        return affiliationDao.findAffiliationById(affiliationId);
    }

}
