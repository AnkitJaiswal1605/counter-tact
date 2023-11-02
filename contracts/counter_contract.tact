import "@stdlib/deploy";

// SPDX-License-Identifier: MIT
pragma ton-solidity >=0.49.0 <0.50.0;

contract CounterContract {
    uint32 public id;
    uint32 public val;

    constructor(uint32 _id) public {
        id = _id;
        val = 0;
    }

    function increment() public {
        val++;
    }

    function getCounter() public view returns (uint32) {
        return val;
    }

    function getId() public view returns (uint32) {
        return id;
    }
}

   










