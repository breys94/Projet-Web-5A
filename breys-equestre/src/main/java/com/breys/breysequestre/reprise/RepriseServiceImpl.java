package com.breys.breysequestre.reprise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service("repriseService")
@Transactional
public class RepriseServiceImpl implements RepriseService {

    @Autowired
    private RepriseDao repriseDao;

    @Override
    public Reprise saveReprise(Reprise reprise) {
        return repriseDao.save(reprise);
    }

    @Override
    public Reprise updateReprise(Reprise reprise) {
        return repriseDao.save(reprise);
    }

    @Override
    public void deleteReprise(Integer repriseId) {
        repriseDao.deleteById(repriseId);
    }

    @Override
    public boolean checkIfIdexists(Integer id) {
        return repriseDao.existsById(id);
    }

    @Override
    public List<Reprise> findReprises() {
        return repriseDao.findAll();
    }

    @Override
    public List<Reprise> findRepriseByEmailMonitor(String emailMonitor) {
        return repriseDao.findRepriseByEmailMonitor(emailMonitor);
    }

    @Override
    public Reprise findRepriseById(Integer repriseId) {
        return repriseDao.findRepriseById(repriseId);
    }
}
