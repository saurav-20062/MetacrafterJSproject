// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract CustomToken {
    string public name = "CustomToken";
    string public symbol = "CTK";
    uint public totalSupply;

    // Mapping from addresses to balances
    mapping(address => uint) public balances;

    // Mint function to Create New tokens
    function mint(address _to, uint _amount) public {
        totalSupply += _amount;
        balances[_to] += _amount;
    }

    // Burn function to Destroy tokens
    function burn(address _from, uint _amount) public {
        if (balances[_from] >= _amount) {
            totalSupply -= _amount;
            balances[_from] -= _amount;
        } else {
            revert("Insufficient balance to burn");
        }
    }
}
