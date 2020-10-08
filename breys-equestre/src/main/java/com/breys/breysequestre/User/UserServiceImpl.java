package com.breys.breysequestre.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService{

    @Autowired
    private UserDao userDao;

    public User saveUser(User customer) {
        return userDao.save(customer);
    }

    public User updateUser(User customer) {
        return userDao.save(customer);
    }

    public void deleteUser(Integer customerId) {
        userDao.deleteById(customerId);
    }

    public boolean checkIfIdexists(Integer id) {
        return userDao.existsById(id);
    }

    public User findUserById(Integer customerId) {
        return userDao.getOne(customerId);
    }

    public User findUserByEmail(String email) {
        return userDao.findUserByEmailIgnoreCase(email);
    }

    public User findUserByPhone(String phone) {
        return userDao.findUserByPhone(phone);
    }

    public User findUserByFirstName(String name) {
        return userDao.findUserByFirstNameIgnoreCase(name);
    }

    public List<User> findUserByLastName(String lastName){
        return userDao.findUserByLastNameIgnoreCase(lastName);
    }

    public List<User> findUsers(){
        return userDao.findAll();
    }

    public User findUserByPassword(String password){
        return userDao.findUserByPassword(password);
    }

}
