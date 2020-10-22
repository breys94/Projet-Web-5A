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
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/rest/user/api/")
public class UserRestController {

    public static class InfoUser {
        private String email;
        private String password;
        private String phone;
        private String firstName;
        private String lastName;
        private Integer id;

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

        public String getPhone() {
            return phone;
        }

        public void setPhone(String phone) {
            this.phone = phone;
        }

        public String getFirstName() {
            return firstName;
        }

        public String getLastName() {
            return lastName;
        }

        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }

        public void setLastName(String lastName) {
            this.lastName = lastName;
        }

        public Integer getId() {
            return id;
        }

        public void setId(Integer id) {
            this.id = id;
        }
    }

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private JavaMailSender javaMailSender;

    private User user;

    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<Integer> login(@RequestBody InfoUser infoUser) {

        boolean isPhone = true;
        try {
            Integer i = Integer.parseInt(infoUser.getEmail());
        } catch (NumberFormatException e) {
            isPhone = false;
        }

        if (isPhone == false){
            System.out.println("utilisation de l'adresse mail");
            user = userService.findUserByEmail(infoUser.getEmail());
        }
        else{
            user = userService.findUserByPhone(infoUser.getEmail());
            System.out.println("utilisation du téléphone");
        }

        if (user == null) {
            return new ResponseEntity<Integer>(1, HttpStatus.OK);
        }

        if(user.getIsLog()){
            return new ResponseEntity<Integer>(0, HttpStatus.OK);
        }

        if (BCrypt.checkpw(infoUser.getPassword(), user.getPassword())){
            user.setIsLog(true);
            user.setNbBlock(0);
            userService.saveUser(user);
            return new ResponseEntity<Integer>(0, HttpStatus.OK);
        }
        else{
            user.setNbBlock(user.getNbBlock() + 1);
            userService.saveUser(user);
            if(user.getNbBlock() >= 3){
                return new ResponseEntity<Integer>(4, HttpStatus.OK);
            }
            else{
                return new ResponseEntity<Integer>(3, HttpStatus.OK);
            }
        }

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
    @GetMapping("/searchUsersRole")
    public List<UserDTO> listUsersRole(@RequestParam("role") String role) {
        List<User> listUser = userService.findUserByRole(role);
        List<UserDTO> listToReturn = new ArrayList<>();
        for(User user : listUser){
            listToReturn.add(mapUserToUserDTO(user));
        }
        return listToReturn;
    }

    @CrossOrigin
    @GetMapping("/searchNbBlock")
    public ResponseEntity<Integer> getNbBlock(@RequestParam("login") String login) {
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

        return new ResponseEntity<Integer>(user.getNbBlock(), HttpStatus.CREATED);
    }

    @CrossOrigin
    @GetMapping("/searchUsers")
    public List<UserDTO> listUsers() {
        List<User> listUser = userService.findUsers();
        List<UserDTO> listToReturn = new ArrayList<>();
        for(User user : listUser){
            listToReturn.add(mapUserToUserDTO(user));
        }
        return listToReturn;
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

        return new ResponseEntity<String>("Validé", HttpStatus.CREATED);
    }

    @CrossOrigin
    @PostMapping("/updateUser")
    public ResponseEntity<Integer> updateUser(@RequestBody InfoUser infoUser) {

        User userTmpEmail = userService.findUserByEmail(infoUser.getEmail());
        if (userTmpEmail != null) {
            System.out.println(userTmpEmail.getId().toString() + "  " + infoUser.getId().toString());
            if(userTmpEmail.getId().equals(infoUser.getId())){
                System.out.println("OK");
            }
            else {
                return new ResponseEntity<Integer>(1, HttpStatus.OK);
            }
        }

        User userTmpPhone = userService.findUserByPhone(infoUser.getPhone());
        if (userTmpPhone != null) {
            if(userTmpPhone.getId().equals(infoUser.getId())){
                System.out.println("OK");
            }
            else {
                return new ResponseEntity<Integer>(1, HttpStatus.OK);
            }
        }

        User user = userService.findUserById(infoUser.getId());

        user.setEmail(infoUser.getEmail());
        user.setFirstName(infoUser.getFirstName());
        user.setLastName(infoUser.getLastName());
        user.setPhone(infoUser.getPhone());

        userService.saveUser(user);

        return new ResponseEntity<Integer>(0, HttpStatus.OK);
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
