package com.breys.breysequestre.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {

    public User findUserByEmailIgnoreCase(String email);

    public List<User> findUserByLastNameIgnoreCase(String lastName);

    public User findUserByFirstNameIgnoreCase(String firstName);

    public User findUserByPassword(String password);
}