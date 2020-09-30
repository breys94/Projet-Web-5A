package com.breys.breysequestre.User;

import org.springframework.data.domain.Page;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {

    public User saveUser(User customer);

    public User updateUser(User customer);

    public void deleteUser(Integer customerId);

    public boolean checkIfIdexists(Integer id);

    public User findUserByEmail(String email);

    public User findUserByFirstName(String name);

    public List<User> findUserByLastName(String lastName);

    public User findUserById(Integer customerId);

    public User findUserByPassword(String password);

}
