//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

import "hardhat/console.sol";

contract Election {
    struct Candidate {
        uint32 id;
        string name;
        string desc;
        string work;
        uint32 voteCount;
    }
    event votedEvent(uint32 indexed _candidateId);
    mapping(address => bool) public voters;
    mapping(uint32 => Candidate) public candidates;
    uint32 public candidatesCount;

    constructor() {
        addCandidate("Michael Jordan", "A jumping man", "B-balling");
        addCandidate("Michael Phelps", "A swimming man", "Speed-o-Bathing");
    }

    function addCandidate(
        string memory _name,
        string memory _desc,
        string memory _work
    ) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(
            candidatesCount,
            _name,
            _desc,
            _work,
            0
        );
    }

    function vote(uint32 _candidateId) public {
        require(!voters[msg.sender], "We already counted your vote");
        // require a valid candidate
        require(
            _candidateId > 0 && _candidateId <= candidatesCount,
            "Candidate not found"
        );

        // record that voter has voted
        voters[msg.sender] = true;

        // update candidate vote Count
        candidates[_candidateId].voteCount++;

        // trigger voted event
        emit votedEvent(_candidateId);
    }
}
