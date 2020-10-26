package com.breys.breysequestre.horse;

import com.breys.breysequestre.User.User;

import java.util.List;

public interface HorseService {

    public Horse saveHorse(Horse horse);

    public Horse updateHorse(Horse horse);

    public void deleteHorse(Integer HorseId);

    public boolean checkIfIdexists(Integer id);

    public List<Horse> findHorses();

    public Horse findHorseById(Integer horseId);

    public Horse findHorseByName(String name);

}
