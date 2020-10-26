package com.breys.breysequestre.horse;

import com.breys.breysequestre.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HorseDao extends JpaRepository<Horse, Integer> {

    public Horse findHorseByName(String name);
    public Horse findHorseById(Integer horseId);

}