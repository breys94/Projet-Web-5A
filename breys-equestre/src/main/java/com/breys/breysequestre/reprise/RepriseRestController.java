package com.breys.breysequestre.reprise;

import com.breys.breysequestre.affiliation.Affiliation;
import com.breys.breysequestre.affiliation.AffiliationDTO;
import com.breys.breysequestre.affiliation.AffiliationServiceImpl;
import com.breys.breysequestre.horse.Horse;
import com.breys.breysequestre.horse.HorseDTO;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/rest/reprise/api/")
public class RepriseRestController {

    @Autowired
    private RepriseServiceImpl repriseService;

    @Autowired
    private AffiliationServiceImpl affiliationService;

    private Reprise reprise;

    @CrossOrigin
    @PostMapping("/addReprise")
    public ResponseEntity<RepriseDTO> createReprise(@RequestBody RepriseDTO repriseDTORequest){

        Reprise repriseRequest = mapRepriseDTOToReprise(repriseDTORequest);
        Reprise repriseResponse = repriseService.saveReprise(repriseRequest);
        if (repriseResponse != null) {
            RepriseDTO repriseDTO = mapRepriseToRepriseDTO(repriseResponse);
            return new ResponseEntity<RepriseDTO>(repriseDTO, HttpStatus.CREATED);
        }
        return new ResponseEntity<RepriseDTO>(HttpStatus.NOT_MODIFIED);
    }

    @CrossOrigin
    @GetMapping("/searchReprises")
    public List<RepriseDTO> listReprise() {
        List<Reprise> listReprise = repriseService.findReprises();
        List<RepriseDTO> listToReturn = new ArrayList<>();
        for(Reprise reprise : listReprise){
            listToReturn.add(mapRepriseToRepriseDTO(reprise));
        }
        return listToReturn;
    }

    @CrossOrigin
    @GetMapping("/searchReprises24hours")
    public List<RepriseDTO> listReprise24Hours() {
        List<Reprise> listReprise = repriseService.findReprises();
        List<Reprise> listReprise24Hours= new ArrayList<>();
        for(Reprise reprise : listReprise){
            Date date = new Date();
            Long diff = reprise.getBeginDate().getTime() - date.getTime();
            float res = (diff / (1000*60*60*24));
            System.out.println(res);
            if(res <= 1.0){
                listReprise24Hours.add(reprise);
            }
        }
        List<RepriseDTO> listToReturn = new ArrayList<>();
        for(Reprise reprise : listReprise24Hours){
            listToReturn.add(mapRepriseToRepriseDTO(reprise));
        }
        return listToReturn;
    }

    @CrossOrigin
    @GetMapping("/searchRepriseById")
    public RepriseDTO RepriseById(@RequestParam("id") Integer id) {
        Reprise reprise = repriseService.findRepriseById(id);
        System.out.println(reprise);
        RepriseDTO repriseDTO = mapRepriseToRepriseDTO(reprise);
        return repriseDTO;
    }
    
    @CrossOrigin
    @PostMapping("/inscriptionReprise")
    public ResponseEntity<AffiliationDTO> inscriptionReprise(@RequestBody AffiliationDTO affiliationDTORequest){

        Affiliation affiliationRequest = mapAffiliationDTOToAffiliation(affiliationDTORequest);
        Affiliation affiliationResponse = affiliationService.saveAffiliation(affiliationRequest);
        if (affiliationResponse != null) {

            Reprise reprise = repriseService.findRepriseById(affiliationDTORequest.getIdReprise());
            reprise.setNbHorseRider(reprise.getNbHorseRider() + 1);
            repriseService.saveReprise(reprise);

            AffiliationDTO affiliationDTO = mapAffiliationToAffiliationDTO(affiliationResponse);
            return new ResponseEntity<AffiliationDTO>(affiliationDTO, HttpStatus.CREATED);
        }
        return new ResponseEntity<AffiliationDTO>(HttpStatus.NOT_MODIFIED);
    }

    @CrossOrigin
    @GetMapping("/searchInscriptions")
    public List<AffiliationDTO> listInscription() {
        List<Affiliation> listAffiliation = affiliationService.findAffiliations();
        List<AffiliationDTO> listToReturn = new ArrayList<>();
        for(Affiliation affiliation : listAffiliation){
            listToReturn.add(mapAffiliationToAffiliationDTO(affiliation));
        }
        return listToReturn;
    }

    @CrossOrigin
    @GetMapping("/searchInscriptionsByReprise")
    public List<AffiliationDTO> listInscriptionByReprise(@RequestParam("id") Integer id) {
        List<Affiliation> listAffiliation = affiliationService.findAffiliationByIdReprise(id);
        List<AffiliationDTO> listToReturn = new ArrayList<>();
        for(Affiliation affiliation : listAffiliation){
            listToReturn.add(mapAffiliationToAffiliationDTO(affiliation));
        }
        return listToReturn;
    }

    @CrossOrigin
    @GetMapping("/searchInscriptionsByUser")
    public List<AffiliationDTO> ListInscriptionByUser(@RequestParam("emailUser") String emailUser) {
        List<Affiliation> listAffiliation = affiliationService.findAffiliationByEmailUser(emailUser);
        List<AffiliationDTO> listToReturn = new ArrayList<>();
        for(Affiliation affiliation : listAffiliation){
            listToReturn.add(mapAffiliationToAffiliationDTO(affiliation));
        }
        return listToReturn;
    }



    @CrossOrigin
    @GetMapping("/deleteReprise")
    public Integer DeleteReprise(@RequestParam("id") Integer id) {
        repriseService.deleteReprise(id);
        return 0;
    }

    private RepriseDTO mapRepriseToRepriseDTO(Reprise reprise) {
        ModelMapper mapper = new ModelMapper();
        RepriseDTO repriseDTO = mapper.map(reprise, RepriseDTO.class);
        return repriseDTO;
    }

    private Reprise mapRepriseDTOToReprise(RepriseDTO repriseDTO) {
        ModelMapper mapper = new ModelMapper();
        Reprise reprise = mapper.map(repriseDTO, Reprise.class);
        return reprise;
    }


    private AffiliationDTO mapAffiliationToAffiliationDTO(Affiliation affiliation) {
        ModelMapper mapper = new ModelMapper();
        AffiliationDTO affiliationDTO = mapper.map(affiliation, AffiliationDTO.class);
        return affiliationDTO;
    }

    private Affiliation mapAffiliationDTOToAffiliation(AffiliationDTO affiliationDTO) {
        ModelMapper mapper = new ModelMapper();
        Affiliation affiliation = mapper.map(affiliationDTO, Affiliation.class);
        return affiliation;
    }
    
}
