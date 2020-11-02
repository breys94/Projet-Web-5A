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

import java.util.ArrayList;
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
    @PostMapping("/inscriptionReprise")
    public ResponseEntity<AffiliationDTO> inscriptionReprise(@RequestBody AffiliationDTO affiliationDTORequest){

        Affiliation affiliationRequest = mapAffiliationDTOToAffiliation(affiliationDTORequest);
        Affiliation affiliationResponse = affiliationService.saveAffiliation(affiliationRequest);
        if (affiliationResponse != null) {
            AffiliationDTO affiliationDTO = mapAffiliationToAffiliationDTO(affiliationResponse);
            return new ResponseEntity<AffiliationDTO>(affiliationDTO, HttpStatus.CREATED);
        }
        return new ResponseEntity<AffiliationDTO>(HttpStatus.NOT_MODIFIED);
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
