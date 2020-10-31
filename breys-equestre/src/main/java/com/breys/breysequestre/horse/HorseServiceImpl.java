package com.breys.breysequestre.horse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service("horseService")
@Transactional
public class HorseServiceImpl implements HorseService{

    @Autowired
    private HorseDao horseDao;


    @Override
    public Horse saveHorse(Horse horse) {
        return horseDao.save(horse);
    }

    @Override
    public Horse updateHorse(Horse horse) {
        return horseDao.save(horse);
    }

    @Override
    public void deleteHorse(Integer horseId) {
        horseDao.deleteById(horseId);
    }

    @Override
    public boolean checkIfIdexists(Integer id) {
        return horseDao.existsById(id);
    }

    @Override
    public List<Horse> findHorses() {
        return horseDao.findAll();
    }

    @Override
    public Horse findHorseById(Integer horseId) {
        return horseDao.findHorseById(horseId);
    }

    @Override
    public Horse findHorseByName(String name) {
        return horseDao.findHorseByName(name);
    }
}
