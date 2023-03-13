package com.translation.webex.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.translation.webex.entity.Translation;

public interface TranslationDao extends MongoRepository<Translation, Integer> {

	
}
