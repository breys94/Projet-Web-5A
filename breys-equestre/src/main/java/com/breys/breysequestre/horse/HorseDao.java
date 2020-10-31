package com.breys.breysequestre.horse;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HorseDao extends JpaRepository<Horse, Integer> {

    public Horse findHorseByName(String name);
    public Horse findHorseById(Integer horseId);

}