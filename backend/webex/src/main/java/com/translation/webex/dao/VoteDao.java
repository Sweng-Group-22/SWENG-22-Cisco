package com.translation.webex.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.translation.webex.entity.Vote;

public interface VoteDao extends MongoRepository<Vote, Integer> {

	
}
