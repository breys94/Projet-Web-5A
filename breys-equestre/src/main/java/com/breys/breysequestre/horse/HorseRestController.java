package com.breys.breysequestre.horse;

import com.breys.breysequestre.User.UserDTO;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/rest/horse/api/")
public class HorseRestController {

    @Autowired
    private HorseServiceImpl horseService;

    private Horse horse;

    @CrossOrigin
    @PostMapping("/addHorse")
    public ResponseEntity<HorseDTO> createHorse(@RequestBody HorseDTO horseDTORequest){

        Horse existingHorse = horseService.findHorseById(horseDTORequest.getId());
        if (existingHorse != null) {
            return new ResponseEntity<HorseDTO>(HttpStatus.CONFLICT);
        }

        Horse horseRequest = mapHorseDTOToHorse(horseDTORequest);
        Horse horseResponse = horseService.saveHorse(horseRequest);
        if (horseResponse != null) {
            HorseDTO horseDTO = mapHorseToHorseDTO(horseResponse);
            return new ResponseEntity<HorseDTO>(horseDTO, HttpStatus.CREATED);
        }
        return new ResponseEntity<HorseDTO>(HttpStatus.NOT_MODIFIED);
    }

    @CrossOrigin
    @GetMapping("/searchHorses")
    public List<HorseDTO> listHorses() {
        List<Horse> listHorse = horseService.findHorses();
        List<HorseDTO> listToReturn = new ArrayList<>();
        for(Horse horse : listHorse){
            listToReturn.add(mapHorseToHorseDTO(horse));
        }
        return listToReturn;
    }

    @CrossOrigin
    @GetMapping("/searchHorsesByEmailUser")
    public  ResponseEntity<HorseDTO> GetHorseByEmailUser(@RequestParam("emailUser") String emailUser) {
        List<Horse> listHorse = horseService.findHorses();
        boolean findHorse = false;
        for(Horse horse : listHorse){
            if(horse.getEmailOwner().equals(emailUser)){
                return new ResponseEntity<HorseDTO>(mapHorseToHorseDTO(horse), HttpStatus.OK);
            }
        }
        return new ResponseEntity<HorseDTO>(HttpStatus.NO_CONTENT);
    }

    @CrossOrigin
    @GetMapping("/addUserToHorse")
    public Integer AddUserToHorse(@RequestParam("email") String email, @RequestParam("id") Integer id) {
        Horse horse = horseService.findHorseById(id);
        horse.setEmailOwner(email);
        horseService.saveHorse(horse);
        return 0;
    }

    private HorseDTO mapHorseToHorseDTO(Horse horse) {
        ModelMapper mapper = new ModelMapper();
        HorseDTO horseDTO = mapper.map(horse, HorseDTO.class);
        return horseDTO;
    }

    private Horse mapHorseDTOToHorse(HorseDTO horseDTO) {
        ModelMapper mapper = new ModelMapper();
        Horse horse = mapper.map(horseDTO, Horse.class);
        return horse;
    }
    
}
