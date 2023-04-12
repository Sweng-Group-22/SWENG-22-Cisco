package com.translation.webex.dao;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.translation.webex.entity.Vote;

public interface VoteDao extends MongoRepository<Vote, ObjectId> {

	Vote findBySegmentAndLanguage(int segment,String language);
	
	List<Vote> findBySegmentIn(List<Integer> seg);

	List<Vote> findAllByLanguage(String language);
}
