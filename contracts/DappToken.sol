// SPDX-License-Identifier:MIT
pragma solidity 0.8.10;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DappToken is ERC20{
    constructor(string memory _name, string memory _symbol) ERC20(_name , _symbol){}
    function mint(address _to, uint _amount)public {
        _mint(_to, _amount);
    }
}