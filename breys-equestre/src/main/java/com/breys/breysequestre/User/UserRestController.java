package com.breys.breysequestre.User;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.modelmapper.ModelMapper;
import org.springframework.web.cors.CorsUtils;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;

@RestController
@RequestMapping("/rest/user/api/")
public class UserRestController {
    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private JavaMailSender javaMailSender;

    @CrossOrigin
    @GetMapping("/login")
    public String login() {
        return "Login succesful";
    }

    @CrossOrigin
    @GetMapping("/searchUser")
    public ResponseEntity<UserDTO> listUser(@RequestParam("firstName") String firstName) {
        User user = userService.findUserByFirstName(firstName);
        if (user != null) {
            UserDTO userDTO = mapUserToUserDTO(user);
            return new ResponseEntity<UserDTO>(userDTO, HttpStatus.OK);
        }
        return new ResponseEntity<UserDTO>(HttpStatus.NO_CONTENT);
    }

    @CrossOrigin
    @PostMapping("/addUser")
    public ResponseEntity<UserDTO> createNewCustomer(@RequestBody UserDTO userDTORequest) throws NoSuchAlgorithmException, InvalidKeySpecException {

        String hashed = BCrypt.hashpw(userDTORequest.getPassword(), BCrypt.gensalt());
        //if (BCrypt.checkpw(candidate, hashed))
        userDTORequest.setPassword(hashed);

        User existingUser = userService.findUserByEmail(userDTORequest.getEmail());
        if (existingUser != null) {
            return new ResponseEntity<UserDTO>(HttpStatus.CONFLICT);
        }

        User userRequest = mapUserDTOToUser(userDTORequest);
        User userResponse = userService.saveUser(userRequest);
        if (userResponse != null) {
            UserDTO userDTO = mapUserToUserDTO(userResponse);
            return new ResponseEntity<UserDTO>(userDTO, HttpStatus.CREATED);
        }
        return new ResponseEntity<UserDTO>(HttpStatus.NOT_MODIFIED);
    }

    private UserDTO mapUserToUserDTO(User user) {
        ModelMapper mapper = new ModelMapper();
        UserDTO userDTO = mapper.map(user, UserDTO.class);
        return userDTO;
    }

    private User mapUserDTOToUser(UserDTO userDTO) {
        ModelMapper mapper = new ModelMapper();
        User user = mapper.map(userDTO, User.class);
        return user;
    }
}
