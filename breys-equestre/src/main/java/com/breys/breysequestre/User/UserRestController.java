package com.breys.breysequestre.User;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;
import org.modelmapper.ModelMapper;
import org.springframework.web.util.UriComponentsBuilder;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.Date;

@RestController
@RequestMapping("/rest/user/api/")
public class UserRestController {

    public static class InfoUser {
        private String email;
        private String password;

        public String getEmail() {
            return email;
        }

        public String getPassword() {
            return password;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private JavaMailSender javaMailSender;

    private User user;

    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@RequestBody InfoUser infoUser) {

        User user = userService.findUserByEmail(infoUser.getEmail());
        if(user.getIsLog()){
            return new ResponseEntity<Boolean>(false, HttpStatus.FORBIDDEN);
        }

        user.setIsLog(true);
        userService.saveUser(user);

        return new ResponseEntity<Boolean>(true, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/searchUser")
    public ResponseEntity<UserDTO> listUser(@RequestParam("login") String login) {
        boolean isPhone = true;
        try {
            Integer i = Integer.parseInt(login);
        } catch (NumberFormatException e) {
            isPhone = false;
        }

        if (isPhone == false){
            System.out.println("utilisation de l'adresse mail");
            user = userService.findUserByEmail(login);
        }
        else{
            user = userService.findUserByPhone(login);
            System.out.println("utilisation du téléphone");
        }
        
        if (user != null) {
            UserDTO userDTO = mapUserToUserDTO(user);
            return new ResponseEntity<UserDTO>(userDTO, HttpStatus.OK);
        }
        return new ResponseEntity<UserDTO>(HttpStatus.NO_CONTENT);
    }

    @CrossOrigin
    @PostMapping("/sendEmail")
    public ResponseEntity<Boolean> sendMailToUser(@RequestBody MailDTO mailDTO, UriComponentsBuilder uriComponentBuilder) {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setFrom(mailDTO.MAIL_FROM);
        mail.setTo(mailDTO.getEmailUser());
        mail.setSentDate(new Date());
        mail.setSubject(mailDTO.getEmailSubject());
        mail.setText(mailDTO.getEmailContent());

        User user = userService.findUserByEmail(mailDTO.getEmailUser());
        user.setTmpCode(mailDTO.getCode());
        userService.saveUser(user);

        try {
            javaMailSender.send(mail);
        } catch (MailException e) {
            System.out.println(e);
            return new ResponseEntity<Boolean>(false, HttpStatus.FORBIDDEN);
        }

        return new ResponseEntity<Boolean>(true, HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping("/addUser")
    public ResponseEntity<UserDTO> createNewUser(@RequestBody UserDTO userDTORequest) throws NoSuchAlgorithmException, InvalidKeySpecException {

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

    @CrossOrigin
    @PostMapping("/updatePassword")
    public ResponseEntity<String> updatePassword(@RequestBody InfoUser infoUser) {

        System.out.println(infoUser.getEmail());

        User user = userService.findUserByEmail(infoUser.getEmail());

        String hashed = BCrypt.hashpw(infoUser.getPassword(), BCrypt.gensalt());
        user.setPassword(hashed);
        user.setTmpCode(null);
        userService.saveUser(user);

        //User user = userService.findUserByEmail(email);
        //System.out.println(password);

        return new ResponseEntity<String>("Validé", HttpStatus.CREATED);
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
