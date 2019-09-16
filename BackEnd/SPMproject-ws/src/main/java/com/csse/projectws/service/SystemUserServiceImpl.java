package com.csse.projectws.service;

import com.csse.projectws.model.SystemUser;
import com.csse.projectws.repository.SystemUserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
*
* @author (IT17119122 ** Liyanage I.M)
*/
@Service
public class SystemUserServiceImpl {
   
   @Autowired
   SystemUserRepository systemUserRepository;
   
    public SystemUser findByUsernameandPassword(String username,String password) {
        SystemUser systemUser  = systemUserRepository.findByUsernameandPassword(username,password);
        return systemUser; 
    }
    
    public void saveUser(SystemUser systemUser) {
        systemUserRepository.save(systemUser);
    }
}
